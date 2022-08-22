package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendIbcOrganization = "send_ibc_organization"

var _ sdk.Msg = &MsgSendIbcOrganization{}

func NewMsgSendIbcOrganization(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	name string,
	organizationType string,
	country string,
) *MsgSendIbcOrganization {
	return &MsgSendIbcOrganization{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		Name:             name,
		OrganizationType: organizationType,
		Country:          country,
	}
}

func (msg *MsgSendIbcOrganization) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcOrganization) Type() string {
	return TypeMsgSendIbcOrganization
}

func (msg *MsgSendIbcOrganization) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendIbcOrganization) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcOrganization) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
