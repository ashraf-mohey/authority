package cli

import (
	"strconv"

	"github.com/ashraf-mohey/authority/x/organization/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdUpdateOrganization() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-organization organization-id",
		Short: "Broadcast message updateOrganization",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argId, err := strconv.ParseUint(string(args[0]), 10, 64)

			argName, _ := cmd.Flags().GetString("name")
			argOrganizationType, _ := cmd.Flags().GetString("organization-type")
			argCountry, _ := cmd.Flags().GetString("country")

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateOrganization(
				clientCtx.GetFromAddress().String(),
				argId,
				argName,
				argOrganizationType,
				argCountry,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)
	cmd.Flags().String("name", "", "update organization name")
	cmd.Flags().String("organization-type", "", "update organization type")
	cmd.Flags().String("country", "", "update organization country")

	return cmd
}
