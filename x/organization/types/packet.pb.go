// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: organization/packet.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type OrganizationPacketData struct {
	// Types that are valid to be assigned to Packet:
	//	*OrganizationPacketData_NoData
	//	*OrganizationPacketData_IbcOrganizationPacket
	Packet isOrganizationPacketData_Packet `protobuf_oneof:"packet"`
}

func (m *OrganizationPacketData) Reset()         { *m = OrganizationPacketData{} }
func (m *OrganizationPacketData) String() string { return proto.CompactTextString(m) }
func (*OrganizationPacketData) ProtoMessage()    {}
func (*OrganizationPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_8898018af4a5e866, []int{0}
}
func (m *OrganizationPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *OrganizationPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_OrganizationPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *OrganizationPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_OrganizationPacketData.Merge(m, src)
}
func (m *OrganizationPacketData) XXX_Size() int {
	return m.Size()
}
func (m *OrganizationPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_OrganizationPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_OrganizationPacketData proto.InternalMessageInfo

type isOrganizationPacketData_Packet interface {
	isOrganizationPacketData_Packet()
	MarshalTo([]byte) (int, error)
	Size() int
}

type OrganizationPacketData_NoData struct {
	NoData *NoData `protobuf:"bytes,1,opt,name=noData,proto3,oneof" json:"noData,omitempty"`
}
type OrganizationPacketData_IbcOrganizationPacket struct {
	IbcOrganizationPacket *IbcOrganizationPacketData `protobuf:"bytes,2,opt,name=ibcOrganizationPacket,proto3,oneof" json:"ibcOrganizationPacket,omitempty"`
}

func (*OrganizationPacketData_NoData) isOrganizationPacketData_Packet()                {}
func (*OrganizationPacketData_IbcOrganizationPacket) isOrganizationPacketData_Packet() {}

func (m *OrganizationPacketData) GetPacket() isOrganizationPacketData_Packet {
	if m != nil {
		return m.Packet
	}
	return nil
}

func (m *OrganizationPacketData) GetNoData() *NoData {
	if x, ok := m.GetPacket().(*OrganizationPacketData_NoData); ok {
		return x.NoData
	}
	return nil
}

func (m *OrganizationPacketData) GetIbcOrganizationPacket() *IbcOrganizationPacketData {
	if x, ok := m.GetPacket().(*OrganizationPacketData_IbcOrganizationPacket); ok {
		return x.IbcOrganizationPacket
	}
	return nil
}

// XXX_OneofWrappers is for the internal use of the proto package.
func (*OrganizationPacketData) XXX_OneofWrappers() []interface{} {
	return []interface{}{
		(*OrganizationPacketData_NoData)(nil),
		(*OrganizationPacketData_IbcOrganizationPacket)(nil),
	}
}

type NoData struct {
}

func (m *NoData) Reset()         { *m = NoData{} }
func (m *NoData) String() string { return proto.CompactTextString(m) }
func (*NoData) ProtoMessage()    {}
func (*NoData) Descriptor() ([]byte, []int) {
	return fileDescriptor_8898018af4a5e866, []int{1}
}
func (m *NoData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *NoData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_NoData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *NoData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_NoData.Merge(m, src)
}
func (m *NoData) XXX_Size() int {
	return m.Size()
}
func (m *NoData) XXX_DiscardUnknown() {
	xxx_messageInfo_NoData.DiscardUnknown(m)
}

var xxx_messageInfo_NoData proto.InternalMessageInfo

// IbcOrganizationPacketData defines a struct for the packet payload
type IbcOrganizationPacketData struct {
	Creator          string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Name             string `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	OrganizationType string `protobuf:"bytes,3,opt,name=organizationType,proto3" json:"organizationType,omitempty"`
	Country          string `protobuf:"bytes,4,opt,name=country,proto3" json:"country,omitempty"`
}

func (m *IbcOrganizationPacketData) Reset()         { *m = IbcOrganizationPacketData{} }
func (m *IbcOrganizationPacketData) String() string { return proto.CompactTextString(m) }
func (*IbcOrganizationPacketData) ProtoMessage()    {}
func (*IbcOrganizationPacketData) Descriptor() ([]byte, []int) {
	return fileDescriptor_8898018af4a5e866, []int{2}
}
func (m *IbcOrganizationPacketData) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IbcOrganizationPacketData) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IbcOrganizationPacketData.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IbcOrganizationPacketData) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IbcOrganizationPacketData.Merge(m, src)
}
func (m *IbcOrganizationPacketData) XXX_Size() int {
	return m.Size()
}
func (m *IbcOrganizationPacketData) XXX_DiscardUnknown() {
	xxx_messageInfo_IbcOrganizationPacketData.DiscardUnknown(m)
}

var xxx_messageInfo_IbcOrganizationPacketData proto.InternalMessageInfo

func (m *IbcOrganizationPacketData) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *IbcOrganizationPacketData) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *IbcOrganizationPacketData) GetOrganizationType() string {
	if m != nil {
		return m.OrganizationType
	}
	return ""
}

func (m *IbcOrganizationPacketData) GetCountry() string {
	if m != nil {
		return m.Country
	}
	return ""
}

// IbcOrganizationPacketAck defines a struct for the packet acknowledgment
type IbcOrganizationPacketAck struct {
	AccountName string `protobuf:"bytes,1,opt,name=accountName,proto3" json:"accountName,omitempty"`
	Address     string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
}

func (m *IbcOrganizationPacketAck) Reset()         { *m = IbcOrganizationPacketAck{} }
func (m *IbcOrganizationPacketAck) String() string { return proto.CompactTextString(m) }
func (*IbcOrganizationPacketAck) ProtoMessage()    {}
func (*IbcOrganizationPacketAck) Descriptor() ([]byte, []int) {
	return fileDescriptor_8898018af4a5e866, []int{3}
}
func (m *IbcOrganizationPacketAck) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *IbcOrganizationPacketAck) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_IbcOrganizationPacketAck.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *IbcOrganizationPacketAck) XXX_Merge(src proto.Message) {
	xxx_messageInfo_IbcOrganizationPacketAck.Merge(m, src)
}
func (m *IbcOrganizationPacketAck) XXX_Size() int {
	return m.Size()
}
func (m *IbcOrganizationPacketAck) XXX_DiscardUnknown() {
	xxx_messageInfo_IbcOrganizationPacketAck.DiscardUnknown(m)
}

var xxx_messageInfo_IbcOrganizationPacketAck proto.InternalMessageInfo

func (m *IbcOrganizationPacketAck) GetAccountName() string {
	if m != nil {
		return m.AccountName
	}
	return ""
}

func (m *IbcOrganizationPacketAck) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func init() {
	proto.RegisterType((*OrganizationPacketData)(nil), "ashrafmohey.authority.organization.OrganizationPacketData")
	proto.RegisterType((*NoData)(nil), "ashrafmohey.authority.organization.NoData")
	proto.RegisterType((*IbcOrganizationPacketData)(nil), "ashrafmohey.authority.organization.IbcOrganizationPacketData")
	proto.RegisterType((*IbcOrganizationPacketAck)(nil), "ashrafmohey.authority.organization.IbcOrganizationPacketAck")
}

func init() { proto.RegisterFile("organization/packet.proto", fileDescriptor_8898018af4a5e866) }

var fileDescriptor_8898018af4a5e866 = []byte{
	// 326 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x92, 0xc1, 0x4a, 0xc3, 0x40,
	0x10, 0x86, 0xb3, 0x5a, 0x62, 0x3b, 0xbd, 0xc8, 0x82, 0x92, 0x5e, 0x96, 0x92, 0x93, 0x14, 0xdc,
	0x80, 0x82, 0x37, 0x0f, 0x96, 0x1e, 0xf4, 0x52, 0x4b, 0x11, 0x0f, 0xde, 0xa6, 0xdb, 0xb5, 0x09,
	0xa5, 0xd9, 0xb0, 0xd9, 0x80, 0xf1, 0x25, 0xf4, 0xb1, 0x3c, 0xf6, 0xe8, 0x4d, 0x69, 0x5f, 0x44,
	0xba, 0x49, 0x25, 0xd2, 0x88, 0xde, 0x66, 0x26, 0x99, 0xef, 0xff, 0xf7, 0x67, 0xa0, 0xa3, 0xf4,
	0x0c, 0xe3, 0xe8, 0x19, 0x4d, 0xa4, 0xe2, 0x20, 0x41, 0x31, 0x97, 0x86, 0x27, 0x5a, 0x19, 0x45,
	0x7d, 0x4c, 0x43, 0x8d, 0x8f, 0x0b, 0x15, 0xca, 0x9c, 0x63, 0x66, 0x42, 0xa5, 0x23, 0x93, 0xf3,
	0xea, 0x82, 0xff, 0x41, 0xe0, 0xf8, 0xb6, 0x32, 0x18, 0x59, 0xc0, 0x00, 0x0d, 0xd2, 0x01, 0xb8,
	0xb1, 0xda, 0x54, 0x1e, 0xe9, 0x92, 0x93, 0xf6, 0x59, 0x8f, 0xff, 0xcd, 0xe3, 0x43, 0xbb, 0x71,
	0xed, 0x8c, 0xcb, 0x5d, 0x9a, 0xc1, 0x51, 0x34, 0x11, 0xbb, 0x12, 0xde, 0x9e, 0x85, 0x5e, 0xfe,
	0x07, 0x7a, 0x53, 0x07, 0x28, 0x75, 0xea, 0xe9, 0xfd, 0x26, 0xb8, 0x45, 0x16, 0x7e, 0x13, 0xdc,
	0xc2, 0x94, 0xff, 0x42, 0xa0, 0xf3, 0x2b, 0x8a, 0x7a, 0x70, 0x20, 0xb4, 0x44, 0xa3, 0xb4, 0x7d,
	0x6f, 0x6b, 0xbc, 0x6d, 0x29, 0x85, 0x46, 0x8c, 0x0b, 0x69, 0x1d, 0xb7, 0xc6, 0xb6, 0xa6, 0x3d,
	0x38, 0xac, 0x5a, 0xbc, 0xcb, 0x13, 0xe9, 0xed, 0xdb, 0xef, 0x3b, 0x73, 0x4b, 0x56, 0x59, 0x6c,
	0x74, 0xee, 0x35, 0x4a, 0x72, 0xd1, 0xfa, 0xf7, 0xe0, 0xd5, 0x1a, 0xba, 0x12, 0x73, 0xda, 0x85,
	0x36, 0x0a, 0xfb, 0xe3, 0x70, 0x23, 0x5e, 0x78, 0xaa, 0x8e, 0x36, 0x5c, 0x9c, 0x4e, 0xb5, 0x4c,
	0xd3, 0xd2, 0xda, 0xb6, 0xed, 0x8f, 0xde, 0x56, 0x8c, 0x2c, 0x57, 0x8c, 0x7c, 0xae, 0x18, 0x79,
	0x5d, 0x33, 0x67, 0xb9, 0x66, 0xce, 0xfb, 0x9a, 0x39, 0x0f, 0x17, 0xb3, 0xc8, 0x84, 0xd9, 0x84,
	0x0b, 0xb5, 0x08, 0x8a, 0xe4, 0x4f, 0x6d, 0xf4, 0xc1, 0x77, 0xf4, 0xc1, 0x53, 0xf0, 0xe3, 0xa4,
	0x4c, 0x9e, 0xc8, 0x74, 0xe2, 0xda, 0x93, 0x3a, 0xff, 0x0a, 0x00, 0x00, 0xff, 0xff, 0xa1, 0xf9,
	0x1f, 0xd7, 0x6f, 0x02, 0x00, 0x00,
}

func (m *OrganizationPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *OrganizationPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *OrganizationPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Packet != nil {
		{
			size := m.Packet.Size()
			i -= size
			if _, err := m.Packet.MarshalTo(dAtA[i:]); err != nil {
				return 0, err
			}
		}
	}
	return len(dAtA) - i, nil
}

func (m *OrganizationPacketData_NoData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *OrganizationPacketData_NoData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	if m.NoData != nil {
		{
			size, err := m.NoData.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintPacket(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}
func (m *OrganizationPacketData_IbcOrganizationPacket) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *OrganizationPacketData_IbcOrganizationPacket) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	if m.IbcOrganizationPacket != nil {
		{
			size, err := m.IbcOrganizationPacket.MarshalToSizedBuffer(dAtA[:i])
			if err != nil {
				return 0, err
			}
			i -= size
			i = encodeVarintPacket(dAtA, i, uint64(size))
		}
		i--
		dAtA[i] = 0x12
	}
	return len(dAtA) - i, nil
}
func (m *NoData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *NoData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *NoData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	return len(dAtA) - i, nil
}

func (m *IbcOrganizationPacketData) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IbcOrganizationPacketData) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IbcOrganizationPacketData) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Country) > 0 {
		i -= len(m.Country)
		copy(dAtA[i:], m.Country)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Country)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.OrganizationType) > 0 {
		i -= len(m.OrganizationType)
		copy(dAtA[i:], m.OrganizationType)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.OrganizationType)))
		i--
		dAtA[i] = 0x1a
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *IbcOrganizationPacketAck) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *IbcOrganizationPacketAck) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *IbcOrganizationPacketAck) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.AccountName) > 0 {
		i -= len(m.AccountName)
		copy(dAtA[i:], m.AccountName)
		i = encodeVarintPacket(dAtA, i, uint64(len(m.AccountName)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPacket(dAtA []byte, offset int, v uint64) int {
	offset -= sovPacket(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *OrganizationPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Packet != nil {
		n += m.Packet.Size()
	}
	return n
}

func (m *OrganizationPacketData_NoData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.NoData != nil {
		l = m.NoData.Size()
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}
func (m *OrganizationPacketData_IbcOrganizationPacket) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.IbcOrganizationPacket != nil {
		l = m.IbcOrganizationPacket.Size()
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}
func (m *NoData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	return n
}

func (m *IbcOrganizationPacketData) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.OrganizationType)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Country)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}

func (m *IbcOrganizationPacketAck) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.AccountName)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovPacket(uint64(l))
	}
	return n
}

func sovPacket(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPacket(x uint64) (n int) {
	return sovPacket(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *OrganizationPacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: OrganizationPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: OrganizationPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field NoData", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			v := &NoData{}
			if err := v.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			m.Packet = &OrganizationPacketData_NoData{v}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field IbcOrganizationPacket", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			v := &IbcOrganizationPacketData{}
			if err := v.Unmarshal(dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			m.Packet = &OrganizationPacketData_IbcOrganizationPacket{v}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *NoData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: NoData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: NoData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *IbcOrganizationPacketData) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: IbcOrganizationPacketData: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IbcOrganizationPacketData: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field OrganizationType", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.OrganizationType = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Country", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Country = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *IbcOrganizationPacketAck) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: IbcOrganizationPacketAck: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: IbcOrganizationPacketAck: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field AccountName", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.AccountName = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthPacket
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPacket
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPacket(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPacket
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipPacket(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPacket
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowPacket
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthPacket
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPacket
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPacket
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPacket        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPacket          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPacket = fmt.Errorf("proto: unexpected end of group")
)
