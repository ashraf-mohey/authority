package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgUpdatePatient = "update_patient"

var _ sdk.Msg = &MsgUpdatePatient{}

func NewMsgUpdatePatient(creator string, id uint64, name string, birthDate string, gender string, maritalStatus string, phone string, email string, nationality string, address string, emergencyContact string) *MsgUpdatePatient {
	return &MsgUpdatePatient{
		Creator:          creator,
		PatientId:        id,
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

func (msg *MsgUpdatePatient) Route() string {
	return RouterKey
}

func (msg *MsgUpdatePatient) Type() string {
	return TypeMsgUpdatePatient
}

func (msg *MsgUpdatePatient) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdatePatient) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdatePatient) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
