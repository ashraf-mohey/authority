package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/organization/types"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"encoding/binary"
	"errors"
	"github.com/cosmos/cosmos-sdk/store/prefix"
)

func (k msgServer) UpdateOrganization(goCtx context.Context, msg *types.MsgUpdateOrganization) (*types.MsgUpdateOrganizationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps organizations records
	organizationsStore := prefix.NewStore(store, []byte(types.OrganizationKey))

	//
	var organization types.Organization
	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, msg.OrganizationId)
	// Get the organization bytes using organization ID as a key
	bz := organizationsStore.Get(byteKey)
	// Unmarshal the organization bytes into the organization object
	k.cdc.MustUnmarshal(bz, &organization)

	if organization.Id < 1 {
		return nil, errors.New("Organization does not exist")
	}

	if msg.Name != "" {
		organization.Name = msg.Name
	}
	if msg.OrganizationType != "" {
		organization.OrganizationType = msg.OrganizationType
	}
	if msg.Country != "" {
		organization.Country = msg.Country
	}

	// Marshal the organization into bytes
	appendedValue := k.cdc.MustMarshal(&organization)
	// Insert the organization bytes using organization ID as a key
	organizationsStore.Set(byteKey, appendedValue)

	return &types.MsgUpdateOrganizationResponse{Organization: &organization}, nil
}
