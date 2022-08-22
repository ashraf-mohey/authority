package simulation

import (
	"math/rand"

	"github.com/ashraf-mohey/authority/x/patient/keeper"
	"github.com/ashraf-mohey/authority/x/patient/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgAddPatient(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgAddPatient{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the AddPatient simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "AddPatient simulation not implemented"), nil, nil
	}
}
