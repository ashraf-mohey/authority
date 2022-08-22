/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "ashrafmohey.authority.organization";

export interface OrganizationPacketData {
  noData: NoData | undefined;
  /** this line is used by starport scaffolding # ibc/packet/proto/field */
  ibcOrganizationPacket: IbcOrganizationPacketData | undefined;
}

export interface NoData {}

/** IbcOrganizationPacketData defines a struct for the packet payload */
export interface IbcOrganizationPacketData {
  creator: string;
  name: string;
  organizationType: string;
  country: string;
}

/** IbcOrganizationPacketAck defines a struct for the packet acknowledgment */
export interface IbcOrganizationPacketAck {
  accountName: string;
  address: string;
}

const baseOrganizationPacketData: object = {};

export const OrganizationPacketData = {
  encode(
    message: OrganizationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.noData !== undefined) {
      NoData.encode(message.noData, writer.uint32(10).fork()).ldelim();
    }
    if (message.ibcOrganizationPacket !== undefined) {
      IbcOrganizationPacketData.encode(
        message.ibcOrganizationPacket,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): OrganizationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOrganizationPacketData } as OrganizationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.noData = NoData.decode(reader, reader.uint32());
          break;
        case 2:
          message.ibcOrganizationPacket = IbcOrganizationPacketData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OrganizationPacketData {
    const message = { ...baseOrganizationPacketData } as OrganizationPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromJSON(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.ibcOrganizationPacket !== undefined &&
      object.ibcOrganizationPacket !== null
    ) {
      message.ibcOrganizationPacket = IbcOrganizationPacketData.fromJSON(
        object.ibcOrganizationPacket
      );
    } else {
      message.ibcOrganizationPacket = undefined;
    }
    return message;
  },

  toJSON(message: OrganizationPacketData): unknown {
    const obj: any = {};
    message.noData !== undefined &&
      (obj.noData = message.noData ? NoData.toJSON(message.noData) : undefined);
    message.ibcOrganizationPacket !== undefined &&
      (obj.ibcOrganizationPacket = message.ibcOrganizationPacket
        ? IbcOrganizationPacketData.toJSON(message.ibcOrganizationPacket)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<OrganizationPacketData>
  ): OrganizationPacketData {
    const message = { ...baseOrganizationPacketData } as OrganizationPacketData;
    if (object.noData !== undefined && object.noData !== null) {
      message.noData = NoData.fromPartial(object.noData);
    } else {
      message.noData = undefined;
    }
    if (
      object.ibcOrganizationPacket !== undefined &&
      object.ibcOrganizationPacket !== null
    ) {
      message.ibcOrganizationPacket = IbcOrganizationPacketData.fromPartial(
        object.ibcOrganizationPacket
      );
    } else {
      message.ibcOrganizationPacket = undefined;
    }
    return message;
  },
};

const baseNoData: object = {};

export const NoData = {
  encode(_: NoData, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): NoData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseNoData } as NoData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },

  toJSON(_: NoData): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<NoData>): NoData {
    const message = { ...baseNoData } as NoData;
    return message;
  },
};

const baseIbcOrganizationPacketData: object = {
  creator: "",
  name: "",
  organizationType: "",
  country: "",
};

export const IbcOrganizationPacketData = {
  encode(
    message: IbcOrganizationPacketData,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.organizationType !== "") {
      writer.uint32(26).string(message.organizationType);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): IbcOrganizationPacketData {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIbcOrganizationPacketData,
    } as IbcOrganizationPacketData;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.organizationType = reader.string();
          break;
        case 4:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcOrganizationPacketData {
    const message = {
      ...baseIbcOrganizationPacketData,
    } as IbcOrganizationPacketData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.organizationType !== undefined &&
      object.organizationType !== null
    ) {
      message.organizationType = String(object.organizationType);
    } else {
      message.organizationType = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
    return message;
  },

  toJSON(message: IbcOrganizationPacketData): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.organizationType !== undefined &&
      (obj.organizationType = message.organizationType);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IbcOrganizationPacketData>
  ): IbcOrganizationPacketData {
    const message = {
      ...baseIbcOrganizationPacketData,
    } as IbcOrganizationPacketData;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.organizationType !== undefined &&
      object.organizationType !== null
    ) {
      message.organizationType = object.organizationType;
    } else {
      message.organizationType = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
    return message;
  },
};

const baseIbcOrganizationPacketAck: object = { accountName: "", address: "" };

export const IbcOrganizationPacketAck = {
  encode(
    message: IbcOrganizationPacketAck,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountName !== "") {
      writer.uint32(10).string(message.accountName);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): IbcOrganizationPacketAck {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseIbcOrganizationPacketAck,
    } as IbcOrganizationPacketAck;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountName = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IbcOrganizationPacketAck {
    const message = {
      ...baseIbcOrganizationPacketAck,
    } as IbcOrganizationPacketAck;
    if (object.accountName !== undefined && object.accountName !== null) {
      message.accountName = String(object.accountName);
    } else {
      message.accountName = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: IbcOrganizationPacketAck): unknown {
    const obj: any = {};
    message.accountName !== undefined &&
      (obj.accountName = message.accountName);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<IbcOrganizationPacketAck>
  ): IbcOrganizationPacketAck {
    const message = {
      ...baseIbcOrganizationPacketAck,
    } as IbcOrganizationPacketAck;
    if (object.accountName !== undefined && object.accountName !== null) {
      message.accountName = object.accountName;
    } else {
      message.accountName = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
