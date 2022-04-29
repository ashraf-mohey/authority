package keeper_test

import (
	"testing"

	testkeeper "github.com/ashraf-mohey/authority/testutil/keeper"
	"github.com/ashraf-mohey/authority/x/organization/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.OrganizationKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
