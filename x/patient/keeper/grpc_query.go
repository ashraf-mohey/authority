package keeper

import (
	"github.com/ashraf-mohey/authority/x/patient/types"
)

var _ types.QueryServer = Keeper{}
