/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../organization/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Organization } from "../organization/organization";

export const protobufPackage = "ashrafmohey.authority.organization";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetOrganizationsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetOrganizationsResponse {
  /** Returning a list of organizations */
  organizations: Organization[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetOrganizationByIdRequest {
  organizationId: number;
}

export interface QueryGetOrganizationByIdResponse {
  organization: Organization | undefined;
}

export interface QueryGetOrganizationsByCreatorRequest {
  creator: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetOrganizationsByCreatorResponse {
  /** Returning a list of organizations records */
  organizations: Organization[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QuerySearchOrganizationsRequest {
  nameQuery: string;
  pagination: PageRequest | undefined;
}

export interface QuerySearchOrganizationsResponse {
  /** Returning a list of organizations records */
  organizations: Organization[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetOrganizationsByAddressRequest {
  address: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetOrganizationsByAddressResponse {
  organization: Organization | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationsRequest: object = {};

export const QueryGetOrganizationsRequest = {
  encode(
    message: QueryGetOrganizationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationsRequest,
    } as QueryGetOrganizationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationsRequest {
    const message = {
      ...baseQueryGetOrganizationsRequest,
    } as QueryGetOrganizationsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationsRequest>
  ): QueryGetOrganizationsRequest {
    const message = {
      ...baseQueryGetOrganizationsRequest,
    } as QueryGetOrganizationsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationsResponse: object = {};

export const QueryGetOrganizationsResponse = {
  encode(
    message: QueryGetOrganizationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.organizations) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationsResponse,
    } as QueryGetOrganizationsResponse;
    message.organizations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizations.push(
            Organization.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationsResponse {
    const message = {
      ...baseQueryGetOrganizationsResponse,
    } as QueryGetOrganizationsResponse;
    message.organizations = [];
    if (object.organizations !== undefined && object.organizations !== null) {
      for (const e of object.organizations) {
        message.organizations.push(Organization.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationsResponse): unknown {
    const obj: any = {};
    if (message.organizations) {
      obj.organizations = message.organizations.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.organizations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationsResponse>
  ): QueryGetOrganizationsResponse {
    const message = {
      ...baseQueryGetOrganizationsResponse,
    } as QueryGetOrganizationsResponse;
    message.organizations = [];
    if (object.organizations !== undefined && object.organizations !== null) {
      for (const e of object.organizations) {
        message.organizations.push(Organization.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationByIdRequest: object = { organizationId: 0 };

export const QueryGetOrganizationByIdRequest = {
  encode(
    message: QueryGetOrganizationByIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.organizationId !== 0) {
      writer.uint32(8).uint64(message.organizationId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationByIdRequest,
    } as QueryGetOrganizationByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizationId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationByIdRequest {
    const message = {
      ...baseQueryGetOrganizationByIdRequest,
    } as QueryGetOrganizationByIdRequest;
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = Number(object.organizationId);
    } else {
      message.organizationId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationByIdRequest): unknown {
    const obj: any = {};
    message.organizationId !== undefined &&
      (obj.organizationId = message.organizationId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationByIdRequest>
  ): QueryGetOrganizationByIdRequest {
    const message = {
      ...baseQueryGetOrganizationByIdRequest,
    } as QueryGetOrganizationByIdRequest;
    if (object.organizationId !== undefined && object.organizationId !== null) {
      message.organizationId = object.organizationId;
    } else {
      message.organizationId = 0;
    }
    return message;
  },
};

const baseQueryGetOrganizationByIdResponse: object = {};

export const QueryGetOrganizationByIdResponse = {
  encode(
    message: QueryGetOrganizationByIdResponse,
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
  ): QueryGetOrganizationByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationByIdResponse,
    } as QueryGetOrganizationByIdResponse;
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

  fromJSON(object: any): QueryGetOrganizationByIdResponse {
    const message = {
      ...baseQueryGetOrganizationByIdResponse,
    } as QueryGetOrganizationByIdResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationByIdResponse): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationByIdResponse>
  ): QueryGetOrganizationByIdResponse {
    const message = {
      ...baseQueryGetOrganizationByIdResponse,
    } as QueryGetOrganizationByIdResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationsByCreatorRequest: object = { creator: "" };

export const QueryGetOrganizationsByCreatorRequest = {
  encode(
    message: QueryGetOrganizationsByCreatorRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationsByCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationsByCreatorRequest,
    } as QueryGetOrganizationsByCreatorRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationsByCreatorRequest {
    const message = {
      ...baseQueryGetOrganizationsByCreatorRequest,
    } as QueryGetOrganizationsByCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationsByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationsByCreatorRequest>
  ): QueryGetOrganizationsByCreatorRequest {
    const message = {
      ...baseQueryGetOrganizationsByCreatorRequest,
    } as QueryGetOrganizationsByCreatorRequest;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationsByCreatorResponse: object = {};

export const QueryGetOrganizationsByCreatorResponse = {
  encode(
    message: QueryGetOrganizationsByCreatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.organizations) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationsByCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationsByCreatorResponse,
    } as QueryGetOrganizationsByCreatorResponse;
    message.organizations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizations.push(
            Organization.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationsByCreatorResponse {
    const message = {
      ...baseQueryGetOrganizationsByCreatorResponse,
    } as QueryGetOrganizationsByCreatorResponse;
    message.organizations = [];
    if (object.organizations !== undefined && object.organizations !== null) {
      for (const e of object.organizations) {
        message.organizations.push(Organization.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationsByCreatorResponse): unknown {
    const obj: any = {};
    if (message.organizations) {
      obj.organizations = message.organizations.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.organizations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationsByCreatorResponse>
  ): QueryGetOrganizationsByCreatorResponse {
    const message = {
      ...baseQueryGetOrganizationsByCreatorResponse,
    } as QueryGetOrganizationsByCreatorResponse;
    message.organizations = [];
    if (object.organizations !== undefined && object.organizations !== null) {
      for (const e of object.organizations) {
        message.organizations.push(Organization.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySearchOrganizationsRequest: object = { nameQuery: "" };

export const QuerySearchOrganizationsRequest = {
  encode(
    message: QuerySearchOrganizationsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.nameQuery !== "") {
      writer.uint32(10).string(message.nameQuery);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchOrganizationsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchOrganizationsRequest,
    } as QuerySearchOrganizationsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nameQuery = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchOrganizationsRequest {
    const message = {
      ...baseQuerySearchOrganizationsRequest,
    } as QuerySearchOrganizationsRequest;
    if (object.nameQuery !== undefined && object.nameQuery !== null) {
      message.nameQuery = String(object.nameQuery);
    } else {
      message.nameQuery = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySearchOrganizationsRequest): unknown {
    const obj: any = {};
    message.nameQuery !== undefined && (obj.nameQuery = message.nameQuery);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchOrganizationsRequest>
  ): QuerySearchOrganizationsRequest {
    const message = {
      ...baseQuerySearchOrganizationsRequest,
    } as QuerySearchOrganizationsRequest;
    if (object.nameQuery !== undefined && object.nameQuery !== null) {
      message.nameQuery = object.nameQuery;
    } else {
      message.nameQuery = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQuerySearchOrganizationsResponse: object = {};

export const QuerySearchOrganizationsResponse = {
  encode(
    message: QuerySearchOrganizationsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.organizations) {
      Organization.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QuerySearchOrganizationsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchOrganizationsResponse,
    } as QuerySearchOrganizationsResponse;
    message.organizations = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.organizations.push(
            Organization.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySearchOrganizationsResponse {
    const message = {
      ...baseQuerySearchOrganizationsResponse,
    } as QuerySearchOrganizationsResponse;
    message.organizations = [];
    if (object.organizations !== undefined && object.organizations !== null) {
      for (const e of object.organizations) {
        message.organizations.push(Organization.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySearchOrganizationsResponse): unknown {
    const obj: any = {};
    if (message.organizations) {
      obj.organizations = message.organizations.map((e) =>
        e ? Organization.toJSON(e) : undefined
      );
    } else {
      obj.organizations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchOrganizationsResponse>
  ): QuerySearchOrganizationsResponse {
    const message = {
      ...baseQuerySearchOrganizationsResponse,
    } as QuerySearchOrganizationsResponse;
    message.organizations = [];
    if (object.organizations !== undefined && object.organizations !== null) {
      for (const e of object.organizations) {
        message.organizations.push(Organization.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationsByAddressRequest: object = { address: "" };

export const QueryGetOrganizationsByAddressRequest = {
  encode(
    message: QueryGetOrganizationsByAddressRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetOrganizationsByAddressRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationsByAddressRequest,
    } as QueryGetOrganizationsByAddressRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetOrganizationsByAddressRequest {
    const message = {
      ...baseQueryGetOrganizationsByAddressRequest,
    } as QueryGetOrganizationsByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationsByAddressRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationsByAddressRequest>
  ): QueryGetOrganizationsByAddressRequest {
    const message = {
      ...baseQueryGetOrganizationsByAddressRequest,
    } as QueryGetOrganizationsByAddressRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetOrganizationsByAddressResponse: object = {};

export const QueryGetOrganizationsByAddressResponse = {
  encode(
    message: QueryGetOrganizationsByAddressResponse,
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
  ): QueryGetOrganizationsByAddressResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetOrganizationsByAddressResponse,
    } as QueryGetOrganizationsByAddressResponse;
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

  fromJSON(object: any): QueryGetOrganizationsByAddressResponse {
    const message = {
      ...baseQueryGetOrganizationsByAddressResponse,
    } as QueryGetOrganizationsByAddressResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromJSON(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetOrganizationsByAddressResponse): unknown {
    const obj: any = {};
    message.organization !== undefined &&
      (obj.organization = message.organization
        ? Organization.toJSON(message.organization)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetOrganizationsByAddressResponse>
  ): QueryGetOrganizationsByAddressResponse {
    const message = {
      ...baseQueryGetOrganizationsByAddressResponse,
    } as QueryGetOrganizationsByAddressResponse;
    if (object.organization !== undefined && object.organization !== null) {
      message.organization = Organization.fromPartial(object.organization);
    } else {
      message.organization = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of organizations. */
  GetOrganizations(
    request: QueryGetOrganizationsRequest
  ): Promise<QueryGetOrganizationsResponse>;
  /** Queries an organization by id. */
  GetOrganizationById(
    request: QueryGetOrganizationByIdRequest
  ): Promise<QueryGetOrganizationByIdResponse>;
  /** Queries a list of organizations by creator. */
  GetOrganizationsByCreator(
    request: QueryGetOrganizationsByCreatorRequest
  ): Promise<QueryGetOrganizationsByCreatorResponse>;
  /** Searches organizations by name. */
  SearchOrganizations(
    request: QuerySearchOrganizationsRequest
  ): Promise<QuerySearchOrganizationsResponse>;
  /** Queries a list of GetOrganizationsByAddress items. */
  GetOrganizationsByAddress(
    request: QueryGetOrganizationsByAddressRequest
  ): Promise<QueryGetOrganizationsByAddressResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GetOrganizations(
    request: QueryGetOrganizationsRequest
  ): Promise<QueryGetOrganizationsResponse> {
    const data = QueryGetOrganizationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Query",
      "GetOrganizations",
      data
    );
    return promise.then((data) =>
      QueryGetOrganizationsResponse.decode(new Reader(data))
    );
  }

  GetOrganizationById(
    request: QueryGetOrganizationByIdRequest
  ): Promise<QueryGetOrganizationByIdResponse> {
    const data = QueryGetOrganizationByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Query",
      "GetOrganizationById",
      data
    );
    return promise.then((data) =>
      QueryGetOrganizationByIdResponse.decode(new Reader(data))
    );
  }

  GetOrganizationsByCreator(
    request: QueryGetOrganizationsByCreatorRequest
  ): Promise<QueryGetOrganizationsByCreatorResponse> {
    const data = QueryGetOrganizationsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Query",
      "GetOrganizationsByCreator",
      data
    );
    return promise.then((data) =>
      QueryGetOrganizationsByCreatorResponse.decode(new Reader(data))
    );
  }

  SearchOrganizations(
    request: QuerySearchOrganizationsRequest
  ): Promise<QuerySearchOrganizationsResponse> {
    const data = QuerySearchOrganizationsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Query",
      "SearchOrganizations",
      data
    );
    return promise.then((data) =>
      QuerySearchOrganizationsResponse.decode(new Reader(data))
    );
  }

  GetOrganizationsByAddress(
    request: QueryGetOrganizationsByAddressRequest
  ): Promise<QueryGetOrganizationsByAddressResponse> {
    const data = QueryGetOrganizationsByAddressRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.organization.Query",
      "GetOrganizationsByAddress",
      data
    );
    return promise.then((data) =>
      QueryGetOrganizationsByAddressResponse.decode(new Reader(data))
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
