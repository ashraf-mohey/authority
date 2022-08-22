// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: patient/patient.proto

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

type Patient struct {
	Creator          string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id               uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	Name             string `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	BirthDate        string `protobuf:"bytes,4,opt,name=birthDate,proto3" json:"birthDate,omitempty"`
	Gender           string `protobuf:"bytes,5,opt,name=gender,proto3" json:"gender,omitempty"`
	MaritalStatus    string `protobuf:"bytes,6,opt,name=maritalStatus,proto3" json:"maritalStatus,omitempty"`
	Phone            string `protobuf:"bytes,7,opt,name=phone,proto3" json:"phone,omitempty"`
	Email            string `protobuf:"bytes,8,opt,name=email,proto3" json:"email,omitempty"`
	Nationality      string `protobuf:"bytes,9,opt,name=nationality,proto3" json:"nationality,omitempty"`
	Address          string `protobuf:"bytes,10,opt,name=address,proto3" json:"address,omitempty"`
	EmergencyContact string `protobuf:"bytes,11,opt,name=emergencyContact,proto3" json:"emergencyContact,omitempty"`
	PublicKey        string `protobuf:"bytes,12,opt,name=publicKey,proto3" json:"publicKey,omitempty"`
}

func (m *Patient) Reset()         { *m = Patient{} }
func (m *Patient) String() string { return proto.CompactTextString(m) }
func (*Patient) ProtoMessage()    {}
func (*Patient) Descriptor() ([]byte, []int) {
	return fileDescriptor_ae32a8d1a528f6da, []int{0}
}
func (m *Patient) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Patient) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Patient.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Patient) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Patient.Merge(m, src)
}
func (m *Patient) XXX_Size() int {
	return m.Size()
}
func (m *Patient) XXX_DiscardUnknown() {
	xxx_messageInfo_Patient.DiscardUnknown(m)
}

var xxx_messageInfo_Patient proto.InternalMessageInfo

func (m *Patient) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Patient) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Patient) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *Patient) GetBirthDate() string {
	if m != nil {
		return m.BirthDate
	}
	return ""
}

func (m *Patient) GetGender() string {
	if m != nil {
		return m.Gender
	}
	return ""
}

func (m *Patient) GetMaritalStatus() string {
	if m != nil {
		return m.MaritalStatus
	}
	return ""
}

func (m *Patient) GetPhone() string {
	if m != nil {
		return m.Phone
	}
	return ""
}

func (m *Patient) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *Patient) GetNationality() string {
	if m != nil {
		return m.Nationality
	}
	return ""
}

func (m *Patient) GetAddress() string {
	if m != nil {
		return m.Address
	}
	return ""
}

func (m *Patient) GetEmergencyContact() string {
	if m != nil {
		return m.EmergencyContact
	}
	return ""
}

func (m *Patient) GetPublicKey() string {
	if m != nil {
		return m.PublicKey
	}
	return ""
}

func init() {
	proto.RegisterType((*Patient)(nil), "ashrafmohey.authority.patient.Patient")
}

func init() { proto.RegisterFile("patient/patient.proto", fileDescriptor_ae32a8d1a528f6da) }

var fileDescriptor_ae32a8d1a528f6da = []byte{
	// 330 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x64, 0x91, 0x4f, 0x4b, 0xeb, 0x40,
	0x14, 0xc5, 0x9b, 0xbc, 0xfe, 0x79, 0x9d, 0xbe, 0xf7, 0x78, 0x0c, 0x2a, 0x77, 0xa1, 0xa1, 0x88,
	0x8b, 0x22, 0x98, 0x20, 0x7e, 0x03, 0x75, 0xd7, 0x8d, 0xd4, 0x9d, 0xbb, 0x9b, 0xe4, 0xda, 0x0c,
	0x24, 0x33, 0x61, 0x72, 0x03, 0xe6, 0x5b, 0xf8, 0xb1, 0x5c, 0x76, 0x23, 0xb8, 0x94, 0xf6, 0x8b,
	0x48, 0x27, 0x69, 0x55, 0x5c, 0xdd, 0x7b, 0x7e, 0xe7, 0x6c, 0x0e, 0x47, 0x1c, 0x96, 0xc8, 0x8a,
	0x34, 0x47, 0xdd, 0x0d, 0x4b, 0x6b, 0xd8, 0xc8, 0x13, 0xac, 0x32, 0x8b, 0x8f, 0x85, 0xc9, 0xa8,
	0x09, 0xb1, 0xe6, 0xcc, 0x58, 0xc5, 0x4d, 0xd8, 0x85, 0x4e, 0x5f, 0x7d, 0x31, 0xba, 0x6b, 0x7f,
	0x09, 0x62, 0x94, 0x58, 0x42, 0x36, 0x16, 0xbc, 0xa9, 0x37, 0x1b, 0x2f, 0x76, 0x52, 0xfe, 0x13,
	0xbe, 0x4a, 0xc1, 0x9f, 0x7a, 0xb3, 0xfe, 0xc2, 0x57, 0xa9, 0x94, 0xa2, 0xaf, 0xb1, 0x20, 0xf8,
	0xe5, 0x62, 0xee, 0x97, 0xc7, 0x62, 0x1c, 0x2b, 0xcb, 0xd9, 0x2d, 0x32, 0x41, 0xdf, 0x19, 0x9f,
	0x40, 0x1e, 0x89, 0xe1, 0x92, 0x74, 0x4a, 0x16, 0x06, 0xce, 0xea, 0x94, 0x3c, 0x13, 0x7f, 0x0b,
	0xb4, 0x8a, 0x31, 0xbf, 0x67, 0xe4, 0xba, 0x82, 0xa1, 0xb3, 0xbf, 0x43, 0x79, 0x20, 0x06, 0x65,
	0x66, 0x34, 0xc1, 0xc8, 0xb9, 0xad, 0xd8, 0x52, 0x2a, 0x50, 0xe5, 0xf0, 0xbb, 0xa5, 0x4e, 0xc8,
	0xa9, 0x98, 0x68, 0x64, 0x65, 0x34, 0xe6, 0x8a, 0x1b, 0x18, 0x3b, 0xef, 0x2b, 0xda, 0xf6, 0xc4,
	0x34, 0xb5, 0x54, 0x55, 0x20, 0xda, 0x9e, 0x9d, 0x94, 0xe7, 0xe2, 0x3f, 0x15, 0x64, 0x97, 0xa4,
	0x93, 0xe6, 0xc6, 0x68, 0xc6, 0x84, 0x61, 0xe2, 0x22, 0x3f, 0xf8, 0xb6, 0x6f, 0x59, 0xc7, 0xb9,
	0x4a, 0xe6, 0xd4, 0xc0, 0x9f, 0xb6, 0xef, 0x1e, 0x5c, 0xcf, 0x5f, 0xd6, 0x81, 0xb7, 0x5a, 0x07,
	0xde, 0xfb, 0x3a, 0xf0, 0x9e, 0x37, 0x41, 0x6f, 0xb5, 0x09, 0x7a, 0x6f, 0x9b, 0xa0, 0xf7, 0x70,
	0xb9, 0x54, 0x9c, 0xd5, 0x71, 0x98, 0x98, 0x22, 0x6a, 0xb7, 0xb9, 0x70, 0xe3, 0x44, 0xfb, 0x71,
	0xa2, 0xa7, 0xdd, 0x86, 0x11, 0x37, 0x25, 0x55, 0xf1, 0xd0, 0x4d, 0x79, 0xf5, 0x11, 0x00, 0x00,
	0xff, 0xff, 0x22, 0x98, 0x15, 0xbf, 0xe3, 0x01, 0x00, 0x00,
}

func (m *Patient) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Patient) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Patient) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.PublicKey) > 0 {
		i -= len(m.PublicKey)
		copy(dAtA[i:], m.PublicKey)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.PublicKey)))
		i--
		dAtA[i] = 0x62
	}
	if len(m.EmergencyContact) > 0 {
		i -= len(m.EmergencyContact)
		copy(dAtA[i:], m.EmergencyContact)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.EmergencyContact)))
		i--
		dAtA[i] = 0x5a
	}
	if len(m.Address) > 0 {
		i -= len(m.Address)
		copy(dAtA[i:], m.Address)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Address)))
		i--
		dAtA[i] = 0x52
	}
	if len(m.Nationality) > 0 {
		i -= len(m.Nationality)
		copy(dAtA[i:], m.Nationality)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Nationality)))
		i--
		dAtA[i] = 0x4a
	}
	if len(m.Email) > 0 {
		i -= len(m.Email)
		copy(dAtA[i:], m.Email)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Email)))
		i--
		dAtA[i] = 0x42
	}
	if len(m.Phone) > 0 {
		i -= len(m.Phone)
		copy(dAtA[i:], m.Phone)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Phone)))
		i--
		dAtA[i] = 0x3a
	}
	if len(m.MaritalStatus) > 0 {
		i -= len(m.MaritalStatus)
		copy(dAtA[i:], m.MaritalStatus)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.MaritalStatus)))
		i--
		dAtA[i] = 0x32
	}
	if len(m.Gender) > 0 {
		i -= len(m.Gender)
		copy(dAtA[i:], m.Gender)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Gender)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.BirthDate) > 0 {
		i -= len(m.BirthDate)
		copy(dAtA[i:], m.BirthDate)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.BirthDate)))
		i--
		dAtA[i] = 0x22
	}
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0x1a
	}
	if m.Id != 0 {
		i = encodeVarintPatient(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintPatient(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintPatient(dAtA []byte, offset int, v uint64) int {
	offset -= sovPatient(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Patient) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovPatient(uint64(m.Id))
	}
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.BirthDate)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.Gender)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.MaritalStatus)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.Phone)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.Email)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.Nationality)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.Address)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.EmergencyContact)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	l = len(m.PublicKey)
	if l > 0 {
		n += 1 + l + sovPatient(uint64(l))
	}
	return n
}

func sovPatient(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozPatient(x uint64) (n int) {
	return sovPatient(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Patient) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowPatient
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
			return fmt.Errorf("proto: Patient: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Patient: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field BirthDate", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.BirthDate = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Gender", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Gender = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field MaritalStatus", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.MaritalStatus = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 7:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Phone", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Phone = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 8:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Email", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Email = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 9:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Nationality", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Nationality = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 10:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Address", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Address = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 11:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EmergencyContact", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.EmergencyContact = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 12:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field PublicKey", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowPatient
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
				return ErrInvalidLengthPatient
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthPatient
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.PublicKey = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipPatient(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthPatient
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
func skipPatient(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowPatient
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
					return 0, ErrIntOverflowPatient
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
					return 0, ErrIntOverflowPatient
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
				return 0, ErrInvalidLengthPatient
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupPatient
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthPatient
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthPatient        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowPatient          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupPatient = fmt.Errorf("proto: unexpected end of group")
)
