package keeper

import (
	"github.com/ashraf-mohey/authority/x/organization/types"
)

var _ types.QueryServer = Keeper{}
