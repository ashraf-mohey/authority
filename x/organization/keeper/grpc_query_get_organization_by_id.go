package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/organization/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"encoding/binary"
	"errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
)

func (k Keeper) GetOrganizationById(goCtx context.Context, req *types.QueryGetOrganizationByIdRequest) (*types.QueryGetOrganizationByIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps organizations records
	organizationsStore := prefix.NewStore(store, []byte(types.OrganizationKey))

	//
	var organization types.Organization
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, req.OrganizationId)
	// Get the organization bytes using organization ID as a key
	bz := organizationsStore.Get(byteKey)
	// Unmarshal the organization bytes into the organization object
	k.cdc.MustUnmarshal(bz, &organization)

	if organization.Id < 1 {
		return nil, errors.New("Organization does not exist")
	}
	return &types.QueryGetOrganizationByIdResponse{Organization: &organization}, nil
}
