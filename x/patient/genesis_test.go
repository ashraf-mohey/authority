package patient_test

import (
	"testing"

	keepertest "github.com/ashraf-mohey/authority/testutil/keeper"
	"github.com/ashraf-mohey/authority/testutil/nullify"
	"github.com/ashraf-mohey/authority/x/patient"
	"github.com/ashraf-mohey/authority/x/patient/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PatientKeeper(t)
	patient.InitGenesis(ctx, *k, genesisState)
	got := patient.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
