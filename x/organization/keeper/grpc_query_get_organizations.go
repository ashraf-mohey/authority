package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/organization/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"
)

func (k Keeper) GetOrganizations(goCtx context.Context, req *types.QueryGetOrganizationsRequest) (*types.QueryGetOrganizationsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	// Define a variable that will store a list of patients' metadata records
	var organizations []*types.Organization
	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps organization records
	organizationsStore := prefix.NewStore(store, []byte(types.OrganizationKey))
	// Paginate the records store based on PageRequest
	pageRes, err := query.Paginate(organizationsStore, req.Pagination, func(key []byte, value []byte) error {
		var organization types.Organization
		if err := k.cdc.Unmarshal(value, &organization); err != nil {
			return err
		}
		organizations = append(organizations, &organization)
		return nil
	})
	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	return &types.QueryGetOrganizationsResponse{Organizations: organizations, Pagination: pageRes}, nil
}
