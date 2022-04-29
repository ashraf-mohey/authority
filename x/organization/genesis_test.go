package organization_test

import (
	"testing"

	keepertest "github.com/ashraf-mohey/authority/testutil/keeper"
	"github.com/ashraf-mohey/authority/testutil/nullify"
	"github.com/ashraf-mohey/authority/x/organization"
	"github.com/ashraf-mohey/authority/x/organization/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),
		PortId: types.PortID,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.OrganizationKeeper(t)
	organization.InitGenesis(ctx, *k, genesisState)
	got := organization.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.Equal(t, genesisState.PortId, got.PortId)

	// this line is used by starport scaffolding # genesis/test/assert
}
