package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/patient/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
)

func (k msgServer) DeletePatient(goCtx context.Context, msg *types.MsgDeletePatient) (*types.MsgDeletePatientResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps patient's metadata records
	patientsStore := prefix.NewStore(store, []byte(types.PatientKey))

	//
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, msg.PatientId)
	// Get the post bytes using post ID as a key
	patientsStore.Delete(byteKey)

	return &types.MsgDeletePatientResponse{Id: msg.PatientId}, nil
}
