package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/organization/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	clienttypes "github.com/cosmos/ibc-go/v2/modules/core/02-client/types"
)

func (k msgServer) SendIbcOrganization(goCtx context.Context, msg *types.MsgSendIbcOrganization) (*types.MsgSendIbcOrganizationResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: logic before transmitting the packet

	// Construct the packet
	var packet types.IbcOrganizationPacketData

	packet.Name = msg.Name
	packet.OrganizationType = msg.OrganizationType
	packet.Country = msg.Country
	packet.Creator = msg.Creator

	// Transmit the packet
	err := k.TransmitIbcOrganizationPacket(
		ctx,
		packet,
		msg.Port,
		msg.ChannelID,
		clienttypes.ZeroHeight(),
		msg.TimeoutTimestamp,
	)
	if err != nil {
		return nil, err
	}

	return &types.MsgSendIbcOrganizationResponse{}, nil
}
