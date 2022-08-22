package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/patient/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"crypto/rand"
	"crypto/rsa"
	"crypto/x509"
	"encoding/pem"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	"golang.org/x/crypto/ssh"
	"io/ioutil"
	"log"
	"os"
	"strconv"

	"encoding/binary"
)

func (k msgServer) AddPatient(goCtx context.Context, msg *types.MsgAddPatient) (*types.MsgAddPatientResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	privateKey, publicKey := generateRsaKeyPair()

	privateKeyPem := privateKeyRsaToPemString(privateKey)
	publicKeySsh, err := publicKeyRsaToSshString(publicKey)
	if err != nil {
		return nil, err
	}

	// Encapsulate patient's metadata fields as an object PatientMetadata
	var patient = types.Patient{
		Creator:          msg.Creator,
		Name:             msg.Name,
		BirthDate:        msg.BirthDate,
		Gender:           msg.Gender,
		MaritalStatus:    msg.MaritalStatus,
		Phone:            msg.Phone,
		Email:            msg.Email,
		Nationality:      msg.Nationality,
		Address:          msg.Address,
		EmergencyContact: msg.EmergencyContact,
		PublicKey:        publicKeySsh,
	}
	// Add a patientMetaData to the blockchain and get back the ID
	id := k.AppendPatient(ctx, patient)
	patient.Id = id
	privateKeysDir := "./private_keys/patients/"
	ensureDir(privateKeysDir)
	writeKeyToFile([]byte(privateKeyPem), privateKeysDir+strconv.FormatUint(id, 10)+".pem")
	// Return the ID of the patient's metadata
	return &types.MsgAddPatientResponse{Patient: &patient}, nil
}

// generatePrivateKey creates a RSA Private Key of specified byte size
func generatePrivateKey() (*rsa.PrivateKey, error) {
	bitSize := 4096
	// Private Key generation
	privateKey, err := rsa.GenerateKey(rand.Reader, bitSize)
	if err != nil {
		return nil, err
	}

	// Validate Private Key
	err = privateKey.Validate()
	if err != nil {
		return nil, err
	}

	log.Println("Private Key generated")
	return privateKey, nil
}

// generatePublicKey take a rsa.PublicKey and return bytes suitable for writing to .pub file
// returns in the format "ssh-rsa ..."
func generatePublicKey(publickey *rsa.PublicKey) ([]byte, error) {
	publicRsaKey, err := ssh.NewPublicKey(publickey)
	if err != nil {
		return nil, err
	}

	pubKeyBytes := ssh.MarshalAuthorizedKey(publicRsaKey)

	log.Println("Public key generated")
	return pubKeyBytes, nil
}

// encodePrivateKeyToPEM encodes Private Key from RSA to PEM format
func encodePrivateKeyToPEM(privateKey *rsa.PrivateKey) []byte {
	// Get ASN.1 DER format
	privDER := x509.MarshalPKCS1PrivateKey(privateKey)

	// pem.Block
	privBlock := pem.Block{
		Type:    "RSA PRIVATE KEY",
		Headers: nil,
		Bytes:   privDER,
	}

	// Private key in PEM format
	privatePEM := pem.EncodeToMemory(&privBlock)

	return privatePEM
}

// writePemToFile writes keys to a file
func writeKeyToFile(keyBytes []byte, saveFileTo string) error {
	err := ioutil.WriteFile(saveFileTo, keyBytes, 0600)
	if err != nil {
		return err
	}

	log.Printf("Key saved to: %s", saveFileTo)
	return nil
}

func ensureDir(dirName string) error {
	err := os.MkdirAll(dirName, os.ModePerm)

	if err == nil || os.IsExist(err) {
		return nil
	} else {
		return err
	}
}

func (k Keeper) GetNextPatientId(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PatientIdKey))
	// Convert the PatientIdKey to bytes
	byteKey := []byte(types.PatientIdKey)
	// Get the value of the id
	bz := store.Get(byteKey)
	// Return one if the id value is not found for first record
	if bz == nil {
		return 1
	}
	// Convert the id into a uint64
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetNextPatientId(ctx sdk.Context, nextId uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PatientIdKey))
	// Convert the PatientIdKey to bytes
	byteKey := []byte(types.PatientIdKey)
	// Convert id from uint64 to string and get bytes
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, nextId)
	// Set the value of PatientIdKey to nextId
	store.Set(byteKey, bz)
}

func (k Keeper) AppendPatient(ctx sdk.Context, patient types.Patient) uint64 {
	// Get the next patient id in the store
	id := k.GetNextPatientId(ctx)
	patient.Id = id
	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.PatientKey))
	// Convert the patient ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, patient.Id)
	// Marshal the patient into bytes
	appendedValue := k.cdc.MustMarshal(&patient)
	// Insert the patient bytes using patient ID as a key
	store.Set(byteKey, appendedValue)
	// Update the next patient id
	k.SetNextPatientId(ctx, id+1)
	return id
}
