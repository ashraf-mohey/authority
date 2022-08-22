package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/patient/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"encoding/binary"
	"errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
)

func (k msgServer) UpdatePatient(goCtx context.Context, msg *types.MsgUpdatePatient) (*types.MsgUpdatePatientResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps patient's metadata records
	patientsStore := prefix.NewStore(store, []byte(types.PatientKey))

	//
	var patient types.Patient
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, msg.PatientId)
	// Get the patient bytes using patient ID as a key
	bz := patientsStore.Get(byteKey)
	// Unmarshal the patient bytes into the patient object
	k.cdc.MustUnmarshal(bz, &patient)

	if patient.Id < 1 {
		return nil, errors.New("Patient does not exist")
	}

	if msg.Name != "" {
		patient.Name = msg.Name
	}
	if msg.BirthDate != "" {
		patient.BirthDate = msg.BirthDate
	}
	if msg.Gender != "" {
		patient.Gender = msg.Gender
	}
	if msg.MaritalStatus != "" {
		patient.MaritalStatus = msg.MaritalStatus
	}
	if msg.Phone != "" {
		patient.Phone = msg.Phone
	}
	if msg.Email != "" {
		patient.Email = msg.Email
	}
	if msg.Nationality != "" {
		patient.Nationality = msg.Nationality
	}
	if msg.Address != "" {
		patient.Address = msg.Address
	}
	if msg.EmergencyContact != "" {
		patient.EmergencyContact = msg.EmergencyContact
	}

	// Marshal the patient into bytes
	appendedValue := k.cdc.MustMarshal(&patient)
	// Insert the patient bytes using patient ID as a key
	patientsStore.Set(byteKey, appendedValue)

	return &types.MsgUpdatePatientResponse{Patient: &patient}, nil
}
