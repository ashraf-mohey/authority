package types

// ValidateBasic is used for validating the packet
func (p IbcOrganizationPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcOrganizationPacketData) GetBytes() ([]byte, error) {
	var modulePacket OrganizationPacketData

	modulePacket.Packet = &OrganizationPacketData_IbcOrganizationPacket{&p}

	return modulePacket.Marshal()
}
