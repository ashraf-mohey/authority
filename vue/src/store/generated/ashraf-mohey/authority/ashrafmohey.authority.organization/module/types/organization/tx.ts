/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Organization } from "../organization/organization";

export const protobufPackage = "ashrafmohey.authority.organization";

export interface MsgSendIbcOrganization {
  creator: string;
  port: string;
  channelID: string;
  timeoutTimestamp: number;
  name: string;
  organizationType: string;
  country: string;
}

export interface MsgSendIbcOrganizationResponse {
  organization: Organization | undefined;
}

export interface MsgUpdateOrganization {
  creator: string;
  organizationId: number;
  name: string;
  OrganizationType: string;
  country: string;
  accountName: string;
  address: string;
  publicKey: string;
}

export interface MsgUpdateOrganizationResponse {
  organization: Organization | undefined;
}

const baseMsgSendIbcOrganization: object = {
  creator: "",
  port: "",
  channelID: "",
  timeoutTimestamp: 0,
  name: "",
  organizationType: "",
  country: "",
};

export const MsgSendIbcOrganization = {
  encode(
    message: MsgSendIbcOrganization,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.port !== "") {
      writer.uint32(18).string(message.port);
    }
    if (message.channelID !== "") {
      writer.uint32(26).string(message.channelID);
    }
    if (message.timeoutTimestamp !== 0) {
      writer.uint32(32).uint64(message.timeoutTimestamp);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.organizationType !== "") {
      writer.uint32(50).string(message.organizationType);
    }
    if (message.country !== "") {
      writer.uint32(58).string(message.country);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendIbcOrganization {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendIbcOrganization } as MsgSendIbcOrganization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.port = reader.string();
          break;
        case 3:
          message.channelID = reader.string();
          break;
        case 4:
          message.timeoutTimestamp = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.organizationType = reader.string();
          break;
        case 7:
          message.country = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcOrganization {
    const message = { ...baseMsgSendIbcOrganization } as MsgSendIbcOrganization;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = String(object.port);
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = String(object.channelID);
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = Number(object.timeoutTimestamp);
    } else {
      message.timeoutTimestamp = 0;
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

  toJSON(message: MsgSendIbcOrganization): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.port !== undefined && (obj.port = message.port);
    message.channelID !== undefined && (obj.channelID = message.channelID);
    message.timeoutTimestamp !== undefined &&
      (obj.timeoutTimestamp = message.timeoutTimestamp);
    message.name !== undefined && (obj.name = message.name);
    message.organizationType !== undefined &&
      (obj.organizationType = message.organizationType);
    message.country !== undefined && (obj.country = message.country);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendIbcOrganization>
  ): MsgSendIbcOrganization {
    const message = { ...baseMsgSendIbcOrganization } as MsgSendIbcOrganization;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    } else {
      message.port = "";
    }
    if (object.channelID !== undefined && object.channelID !== null) {
      message.channelID = object.channelID;
    } else {
      message.channelID = "";
    }
    if (
      object.timeoutTimestamp !== undefined &&
      object.timeoutTimestamp !== null
    ) {
      message.timeoutTimestamp = object.timeoutTimestamp;
    } else {
      message.timeoutTimestamp = 0;
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

const baseMsgSendIbcOrganizationResponse: object = {};

export const MsgSendIbcOrganizationResponse = {
  encode(
    message: MsgSendIbcOrganizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgSendIbcOrganizationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSendIbcOrganizationResponse,
    } as MsgSendIbcOrganizationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendIbcOrganizationResponse {
    const message = {
      ...baseMsgSendIbcOrganizationResponse,
    } as MsgSendIbcOrganizationResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },

  toJSON(message: MsgSendIbcOrganizationResponse): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendIbcOrganizationResponse>
  ): MsgSendIbcOrganizationResponse {
    const message = {
      ...baseMsgSendIbcOrganizationResponse,
    } as MsgSendIbcOrganizationResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },
};

const baseMsgUpdateOrganization: object = {
  creator: "",
  organizationId: 0,
  name: "",
  OrganizationType: "",
  country: "",
  accountName: "",
  address: "",
  publicKey: "",
};

export const MsgUpdateOrganization = {
  encode(
    message: MsgUpdateOrganization,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.organizationId !== 0) {
      writer.uint32(16).uint64(message.organizationId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.OrganizationType !== "") {
      writer.uint32(34).string(message.OrganizationType);
    }
    if (message.country !== "") {
      writer.uint32(42).string(message.country);
    }
    if (message.accountName !== "") {
      writer.uint32(50).string(message.accountName);
    }
    if (message.address !== "") {
      writer.uint32(58).string(message.address);
    }
    if (message.publicKey !== "") {
      writer.uint32(66).string(message.publicKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateOrganization {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateOrganization } as MsgUpdateOrganization;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.organizationId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.OrganizationType = reader.string();
          break;
        case 5:
          message.country = reader.string();
          break;
        case 6:
          message.accountName = reader.string();
          break;
        case 7:
          message.address = reader.string();
          break;
        case 8:
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrganization {
    const message = { ...baseMsgUpdateOrganization } as MsgUpdateOrganization;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = Number(object.organizationId);
    } else {
      message.organizationId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (
      object.OrganizationType !== undefined &&
      object.OrganizationType !== null
    ) {
      message.OrganizationType = String(object.OrganizationType);
    } else {
      message.OrganizationType = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = String(object.country);
    } else {
      message.country = "";
    }
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateOrganization): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    message.name !== undefined && (obj.name = message.name);
    message.OrganizationType !== undefined &&
      (obj.OrganizationType = message.OrganizationType);
    message.country !== undefined && (obj.country = message.country);
    message.accountName !== undefined &&
      (obj.accountName = message.accountName);
    message.address !== undefined && (obj.address = message.address);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateOrganization>
  ): MsgUpdateOrganization {
    const message = { ...baseMsgUpdateOrganization } as MsgUpdateOrganization;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = object.organizationId;
    } else {
      message.organizationId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (
      object.OrganizationType !== undefined &&
      object.OrganizationType !== null
    ) {
      message.OrganizationType = object.OrganizationType;
    } else {
      message.OrganizationType = "";
    }
    if (object.country !== undefined && object.country !== null) {
      message.country = object.country;
    } else {
      message.country = "";
    }
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
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    return message;
  },
};

const baseMsgUpdateOrganizationResponse: object = {};

export const MsgUpdateOrganizationResponse = {
  encode(
    message: MsgUpdateOrganizationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organization !== undefined) {
      Organization.encode(
        message.organization,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateOrganizationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateOrganizationResponse,
    } as MsgUpdateOrganizationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organization = Organization.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateOrganizationResponse {
    const message = {
      ...baseMsgUpdateOrganizationResponse,
    } as MsgUpdateOrganizationResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdateOrganizationResponse): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateOrganizationResponse>
  ): MsgUpdateOrganizationResponse {
    const message = {
      ...baseMsgUpdateOrganizationResponse,
    } as MsgUpdateOrganizationResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SendIbcOrganization(
    request: MsgSendIbcOrganization
  ): Promise<MsgSendIbcOrganizationResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UpdateOrganization(
    request: MsgUpdateOrganization
  ): Promise<MsgUpdateOrganizationResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendIbcOrganization(
    request: MsgSendIbcOrganization
  ): Promise<MsgSendIbcOrganizationResponse> {
    const data = MsgSendIbcOrganization.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Msg",
      "SendIbcOrganization",
      data
    );
    return promise.then((data) =>
      MsgSendIbcOrganizationResponse.decode(new Reader(data))
    );
  }

  UpdateOrganization(
    request: MsgUpdateOrganization
  ): Promise<MsgUpdateOrganizationResponse> {
    const data = MsgUpdateOrganization.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Msg",
      "UpdateOrganization",
      data
    );
    return promise.then((data) =>
      MsgUpdateOrganizationResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
