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

func CmdAddPatient() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-patient [name] [birth-date] [gender] [marital-status] [phone] [email] [nationality] [address] [emergency-contact]",
		Short: "Broadcast message addPatient",
		Args:  cobra.ExactArgs(9),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argName := args[0]
			argBirthDate := args[1]
			argGender := args[2]
			argMaritalStatus := args[3]
			argPhone := args[4]
			argEmail := args[5]
			argNationality := args[6]
			argAddress := args[7]
			argEmergencyContact := args[8]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddPatient(
				clientCtx.GetFromAddress().String(),
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

	return cmd
}
