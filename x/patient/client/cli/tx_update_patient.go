package cli

import (
	"strconv"

	"github.com/ashraf-mohey/authority/x/patient/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdUpdatePatient() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-patient patient-id",
		Short: "Broadcast message updatePatient",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argId, err := strconv.ParseUint(string(args[0]), 10, 64)

			argName, _ := cmd.Flags().GetString("name")
			argBirthDate, _ := cmd.Flags().GetString("birth-date")
			argGender, _ := cmd.Flags().GetString("gender")
			argMaritalStatus, _ := cmd.Flags().GetString("marital-status")
			argPhone, _ := cmd.Flags().GetString("phone")
			argEmail, _ := cmd.Flags().GetString("email")
			argNationality, _ := cmd.Flags().GetString("nationality")
			argAddress, _ := cmd.Flags().GetString("address")
			argEmergencyContact, _ := cmd.Flags().GetString("emergency-contact")

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdatePatient(
				clientCtx.GetFromAddress().String(),
				argId,
				argName,
				argBirthDate,
				argGender,
				argMaritalStatus,
				argPhone,
				argEmail,
				argNationality,
				argAddress,
				argEmergencyContact,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.Flags().String("name", "", "update patient name")
	cmd.Flags().String("birth-date", "", "update patient birth date")
	cmd.Flags().String("gender", "", "update patient gender")
	cmd.Flags().String("marital-status", "", "update patient marital status")
	cmd.Flags().String("phone", "", "update patient phone")
	cmd.Flags().String("email", "", "update patient email")
	cmd.Flags().String("nationality", "", "update patient nationality")
	cmd.Flags().String("address", "", "update patient address")
	cmd.Flags().String("emergency-contact", "", "update patient emergency contact")

	return cmd
}
