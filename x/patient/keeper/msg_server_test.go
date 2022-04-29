package keeper_test

import (
	"context"
	"testing"

	keepertest "github.com/ashraf-mohey/authority/testutil/keeper"
	"github.com/ashraf-mohey/authority/x/patient/keeper"
	"github.com/ashraf-mohey/authority/x/patient/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.PatientKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
