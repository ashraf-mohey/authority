package cli

import (
	"strconv"

	"github.com/ashraf-mohey/authority/x/organization/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGetOrganizationsByCreator() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-organizations-by-creator",
		Short: "Query getOrganizationsByCreator",
		Args:  cobra.ExactArgs(0),
		RunE: func(cmd *cobra.Command, args []string) (err error) {

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetOrganizationsByCreatorRequest{}

			res, err := queryClient.GetOrganizationsByCreator(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
