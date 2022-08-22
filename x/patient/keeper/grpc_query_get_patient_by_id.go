package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/patient/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"encoding/binary"
	"errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
)

func (k Keeper) GetPatientById(goCtx context.Context, req *types.QueryGetPatientByIdRequest) (*types.QueryGetPatientByIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps patient's metadata records
	patientsStore := prefix.NewStore(store, []byte(types.PatientKey))

	//
	var patient types.Patient
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, req.PatientId)
	// Get the patient bytes using patient ID as a key
	bz := patientsStore.Get(byteKey)
	// Unmarshal the patient bytes into the patient object
	k.cdc.MustUnmarshal(bz, &patient)

	if patient.Id < 1 {
		return nil, errors.New("Patient does not exist")
	}
	return &types.QueryGetPatientByIdResponse{Patient: &patient}, nil
}
