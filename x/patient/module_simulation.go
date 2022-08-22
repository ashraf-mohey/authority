package patient

import (
	"math/rand"

	"github.com/ashraf-mohey/authority/testutil/sample"
	patientsimulation "github.com/ashraf-mohey/authority/x/patient/simulation"
	"github.com/ashraf-mohey/authority/x/patient/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = patientsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgAddPatient = "op_weight_msg_add_patient"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddPatient int = 100

	opWeightMsgUpdatePatient = "op_weight_msg_update_patient"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdatePatient int = 100

	opWeightMsgDeletePatient = "op_weight_msg_delete_patient"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeletePatient int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	patientGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&patientGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgAddPatient int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgAddPatient, &weightMsgAddPatient, nil,
		func(_ *rand.Rand) {
			weightMsgAddPatient = defaultWeightMsgAddPatient
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddPatient,
		patientsimulation.SimulateMsgAddPatient(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdatePatient int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUpdatePatient, &weightMsgUpdatePatient, nil,
		func(_ *rand.Rand) {
			weightMsgUpdatePatient = defaultWeightMsgUpdatePatient
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdatePatient,
		patientsimulation.SimulateMsgUpdatePatient(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeletePatient int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgDeletePatient, &weightMsgDeletePatient, nil,
		func(_ *rand.Rand) {
			weightMsgDeletePatient = defaultWeightMsgDeletePatient
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeletePatient,
		patientsimulation.SimulateMsgDeletePatient(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
