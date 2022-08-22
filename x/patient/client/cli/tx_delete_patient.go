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

func CmdDeletePatient() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-patient [patient-id]",
		Short: "Broadcast message deletePatient",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argPatientId, err := strconv.ParseUint(string(args[0]), 10, 64)

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeletePatient(
				clientCtx.GetFromAddress().String(),
				argPatientId,
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
