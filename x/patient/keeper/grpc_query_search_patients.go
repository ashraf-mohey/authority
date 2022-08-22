package keeper

import (
	"context"

	"github.com/ashraf-mohey/authority/x/patient/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	"github.com/cosmos/cosmos-sdk/types/query"
	"strings"
)

func (k Keeper) SearchPatients(goCtx context.Context, req *types.QuerySearchPatientsRequest) (*types.QuerySearchPatientsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Process the query
	_ = ctx

	// Define a variable that will store a list of patients' metadata records
	var patients []*types.Patient

	store := ctx.KVStore(k.storeKey)
	// Get the part of the store that keeps patient's metadata records
	patientsStore := prefix.NewStore(store, []byte(types.PatientKey))

	// Paginate the records store based on PageRequest
	pageRes, err := query.Paginate(patientsStore, req.Pagination, func(key []byte, value []byte) error {
		var patient types.Patient
		if err := k.cdc.Unmarshal(value, &patient); err != nil {
			return err
		}
		if ContainsI(patient.Name, req.NameQuery) {
			patients = append(patients, &patient)
		}

		return nil
	})
	// Throw an error if pagination failed
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	// Return a struct containing a list of patients' metadata records and pagination info
	return &types.QuerySearchPatientsResponse{Patients: patients, Pagination: pageRes}, nil
}

func ContainsI(a string, b string) bool {
	return strings.Contains(
		strings.ToLower(a),
		strings.ToLower(b),
	)
}
