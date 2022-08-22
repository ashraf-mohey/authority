package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgAddPatient = "add_patient"

var _ sdk.Msg = &MsgAddPatient{}

func NewMsgAddPatient(creator string, name string, birthDate string, gender string, maritalStatus string, phone string, email string, nationality string, address string, emergencyContact string) *MsgAddPatient {
	return &MsgAddPatient{
		Creator:          creator,
		Name:             name,
		BirthDate:        birthDate,
		Gender:           gender,
		MaritalStatus:    maritalStatus,
		Phone:            phone,
		Email:            email,
		Nationality:      nationality,
		Address:          address,
		EmergencyContact: emergencyContact,
	}
}

func (msg *MsgAddPatient) Route() string {
	return RouterKey
}

func (msg *MsgAddPatient) Type() string {
	return TypeMsgAddPatient
}

func (msg *MsgAddPatient) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddPatient) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddPatient) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
