package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdateOrganization = "update_organization"

var _ sdk.Msg = &MsgUpdateOrganization{}

func NewMsgUpdateOrganization(creator string, id uint64, name string, organizationType string, country string) *MsgUpdateOrganization {
	return &MsgUpdateOrganization{
		Creator:          creator,
		OrganizationId:   id,
		Name:             name,
		OrganizationType: organizationType,
		Country:          country,
	}
}

func (msg *MsgUpdateOrganization) Route() string {
	return RouterKey
}

func (msg *MsgUpdateOrganization) Type() string {
	return TypeMsgUpdateOrganization
}

func (msg *MsgUpdateOrganization) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateOrganization) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateOrganization) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
