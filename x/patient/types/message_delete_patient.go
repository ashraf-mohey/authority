package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeletePatient = "delete_patient"

var _ sdk.Msg = &MsgDeletePatient{}

func NewMsgDeletePatient(creator string, patientId uint64) *MsgDeletePatient {
	return &MsgDeletePatient{
		Creator:   creator,
		PatientId: patientId,
	}
}

func (msg *MsgDeletePatient) Route() string {
	return RouterKey
}

func (msg *MsgDeletePatient) Type() string {
	return TypeMsgDeletePatient
}

func (msg *MsgDeletePatient) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeletePatient) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeletePatient) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
