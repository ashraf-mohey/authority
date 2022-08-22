package keeper

import (
	"errors"

	"github.com/ashraf-mohey/authority/x/organization/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
	channeltypes "github.com/cosmos/ibc-go/v2/modules/core/04-channel/types"
	host "github.com/cosmos/ibc-go/v2/modules/core/24-host"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"io/ioutil"
	"os"
	"strconv"

	"encoding/binary"
)

// TransmitIbcOrganizationPacket transmits the packet over IBC with the specified source port and source channel
func (k Keeper) TransmitIbcOrganizationPacket(
	ctx sdk.Context,
	packetData types.IbcOrganizationPacketData,
	sourcePort,
	sourceChannel string,
	timeoutHeight clienttypes.Height,
	timeoutTimestamp uint64,
) error {

	sourceChannelEnd, found := k.ChannelKeeper.GetChannel(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(channeltypes.ErrChannelNotFound, "port ID (%s) channel ID (%s)", sourcePort, sourceChannel)
	}

	destinationPort := sourceChannelEnd.GetCounterparty().GetPortID()
	destinationChannel := sourceChannelEnd.GetCounterparty().GetChannelID()

	// get the next sequence
	sequence, found := k.ChannelKeeper.GetNextSequenceSend(ctx, sourcePort, sourceChannel)
	if !found {
		return sdkerrors.Wrapf(
			channeltypes.ErrSequenceSendNotFound,
			"source port: %s, source channel: %s", sourcePort, sourceChannel,
		)
	}

	channelCap, ok := k.ScopedKeeper.GetCapability(ctx, host.ChannelCapabilityPath(sourcePort, sourceChannel))
	if !ok {
		return sdkerrors.Wrap(channeltypes.ErrChannelCapabilityNotFound, "module does not own channel capability")
	}

	packetBytes, err := packetData.GetBytes()
	if err != nil {
		return sdkerrors.Wrap(sdkerrors.ErrJSONMarshal, "cannot marshal the packet: "+err.Error())
	}

	packet := channeltypes.NewPacket(
		packetBytes,
		sequence,
		sourcePort,
		sourceChannel,
		destinationPort,
		destinationChannel,
		timeoutHeight,
		timeoutTimestamp,
	)

	if err := k.ChannelKeeper.SendPacket(ctx, channelCap, packet); err != nil {
		return err
	}

	return nil
}

// OnRecvIbcOrganizationPacket processes packet reception
func (k Keeper) OnRecvIbcOrganizationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcOrganizationPacketData) (packetAck types.IbcOrganizationPacketAck, err error) {
	// validate packet data upon receiving
	if err := data.ValidateBasic(); err != nil {
		return packetAck, err
	}

	// TODO: packet reception logic

	return packetAck, nil
}

// OnAcknowledgementIbcOrganizationPacket responds to the the success or failure of a packet
// acknowledgement written on the receiving chain.
func (k Keeper) OnAcknowledgementIbcOrganizationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcOrganizationPacketData, ack channeltypes.Acknowledgement) error {
	switch dispatchedAck := ack.Response.(type) {
	case *channeltypes.Acknowledgement_Error:

		// TODO: failed acknowledgement logic
		_ = dispatchedAck.Error

		return nil
	case *channeltypes.Acknowledgement_Result:
		// Decode the packet acknowledgment
		var packetAck types.IbcOrganizationPacketAck

		if err := types.ModuleCdc.UnmarshalJSON(dispatchedAck.Result, &packetAck); err != nil {
			// The counter-party module doesn't implement the correct acknowledgment format
			return errors.New("cannot unmarshal acknowledgment")
		}

		// TODO: successful acknowledgement logic

		privateKey, publicKey := generateRsaKeyPair()

		privateKeyPem := privateKeyRsaToPemString(privateKey)
		publicKeySsh, err := publicKeyRsaToSshString(publicKey)

		if err != nil {
			return err
		}

		// Encapsulate patient's metadata fields as an object PatientMetadata
		var organization = types.Organization{
			Creator:          data.Creator,
			Name:             data.Name,
			OrganizationType: data.OrganizationType,
			Country:          data.Country,
			AccountName:      packetAck.AccountName,
			Address:          packetAck.Address,
			PublicKey:        publicKeySsh,
		}
		// Add a organization to the blockchain and get back the ID
		id := k.AppendOrganization(ctx, organization)
		organizationId := strconv.FormatUint(id, 10)

		privateKeysDir := "./private_keys/organizations/" + organizationId + "/"
		ensureDir(privateKeysDir)
		organizationInfo := "Address: " + packetAck.Address + "\n" + "Account Name: " + packetAck.AccountName + "\n" + "Organization ID: " + organizationId
		writeKeyToFile([]byte(privateKeyPem), privateKeysDir + "privatekey.pem")
		writeKeyToFile([]byte(organizationInfo), privateKeysDir + "info")
		return nil
	default:
		// The counter-party module doesn't implement the correct acknowledgment format
		return errors.New("invalid acknowledgment format")
	}
}

// OnTimeoutIbcOrganizationPacket responds to the case where a packet has not been transmitted because of a timeout
func (k Keeper) OnTimeoutIbcOrganizationPacket(ctx sdk.Context, packet channeltypes.Packet, data types.IbcOrganizationPacketData) error {

	// TODO: packet timeout logic

	return nil
}

//Helper Functions
func writeKeyToFile(keyBytes []byte, saveFileTo string) error {
	err := ioutil.WriteFile(saveFileTo, keyBytes, 0600)
	if err != nil {
		return err
	}
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

func (k Keeper) GetNextOrganizationId(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.OrganizationIdKey))
	// Convert the OrganizationIdKey to bytes
	byteKey := []byte(types.OrganizationIdKey)
	// Get the value of the id
	bz := store.Get(byteKey)
	// Return one if the id value is not found for first record
	if bz == nil {
		return 1
	}
	// Convert the id into a uint64
	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetNextOrganizationId(ctx sdk.Context, nextId uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.OrganizationIdKey))
	// Convert the OrganizationIdKey to bytes
	byteKey := []byte(types.OrganizationIdKey)
	// Convert id from uint64 to string and get bytes
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, nextId)
	// Set the value of OrganizationIdKey to nextId
	store.Set(byteKey, bz)
}

func (k Keeper) AppendOrganization(ctx sdk.Context, organization types.Organization) uint64 {
	// Get the next organization ID in the store
	id := k.GetNextOrganizationId(ctx)
	organization.Id = id
	// Get the store
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.OrganizationKey))
	// Convert the organization ID into bytes
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, organization.Id)
	// Marshal the organization into bytes
	appendedValue := k.cdc.MustMarshal(&organization)
	// Insert the organization bytes using organization ID as a key
	store.Set(byteKey, appendedValue)
	// Update the organization next id
	k.SetNextOrganizationId(ctx, id+1)
	return id
}
