package simulation

import (
	"math/rand"

	"github.com/ashraf-mohey/authority/x/organization/keeper"
	"github.com/ashraf-mohey/authority/x/organization/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgUpdateOrganization(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgUpdateOrganization{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the UpdateOrganization simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "UpdateOrganization simulation not implemented"), nil, nil
	}
}
