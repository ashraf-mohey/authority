/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../patient/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Patient } from "../patient/patient";

export const protobufPackage = "ashrafmohey.authority.patient";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetPatientsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetPatientsResponse {
  /** Returning a list of patient's metadata records */
  patients: Patient[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetPatientByIdRequest {
  patientId: number;
}

export interface QueryGetPatientByIdResponse {
  patient: Patient | undefined;
}

export interface QuerySearchPatientsRequest {
  nameQuery: string;
  pagination: PageRequest | undefined;
}

export interface QuerySearchPatientsResponse {
  /** Returning a list of patient's metadata records */
  patients: Patient[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryGetPatientsByCreatorRequest {
  creator: string;
  pagination: PageRequest | undefined;
}

export interface QueryGetPatientsByCreatorResponse {
  /** Returning a list of patient's metadata records */
  patients: Patient[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
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

const baseQueryGetPatientsRequest: object = {};

export const QueryGetPatientsRequest = {
  encode(
    message: QueryGetPatientsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetPatientsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPatientsRequest,
    } as QueryGetPatientsRequest;
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

  fromJSON(object: any): QueryGetPatientsRequest {
    const message = {
      ...baseQueryGetPatientsRequest,
    } as QueryGetPatientsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPatientsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPatientsRequest>
  ): QueryGetPatientsRequest {
    const message = {
      ...baseQueryGetPatientsRequest,
    } as QueryGetPatientsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetPatientsResponse: object = {};

export const QueryGetPatientsResponse = {
  encode(
    message: QueryGetPatientsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.patients) {
      Patient.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGetPatientsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPatientsResponse,
    } as QueryGetPatientsResponse;
    message.patients = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.patients.push(Patient.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetPatientsResponse {
    const message = {
      ...baseQueryGetPatientsResponse,
    } as QueryGetPatientsResponse;
    message.patients = [];
    if (object.patients !== undefined && object.patients !== null) {
      for (const e of object.patients) {
        message.patients.push(Patient.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPatientsResponse): unknown {
    const obj: any = {};
    if (message.patients) {
      obj.patients = message.patients.map((e) =>
        e ? Patient.toJSON(e) : undefined
      );
    } else {
      obj.patients = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPatientsResponse>
  ): QueryGetPatientsResponse {
    const message = {
      ...baseQueryGetPatientsResponse,
    } as QueryGetPatientsResponse;
    message.patients = [];
    if (object.patients !== undefined && object.patients !== null) {
      for (const e of object.patients) {
        message.patients.push(Patient.fromPartial(e));
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

const baseQueryGetPatientByIdRequest: object = { patientId: 0 };

export const QueryGetPatientByIdRequest = {
  encode(
    message: QueryGetPatientByIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.patientId !== 0) {
      writer.uint32(8).uint64(message.patientId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPatientByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPatientByIdRequest,
    } as QueryGetPatientByIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.patientId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPatientByIdRequest {
    const message = {
      ...baseQueryGetPatientByIdRequest,
    } as QueryGetPatientByIdRequest;
    if (object.patientId !== undefined && object.patientId !== null) {
      message.patientId = Number(object.patientId);
    } else {
      message.patientId = 0;
    }
    return message;
  },

  toJSON(message: QueryGetPatientByIdRequest): unknown {
    const obj: any = {};
    message.patientId !== undefined && (obj.patientId = message.patientId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPatientByIdRequest>
  ): QueryGetPatientByIdRequest {
    const message = {
      ...baseQueryGetPatientByIdRequest,
    } as QueryGetPatientByIdRequest;
    if (object.patientId !== undefined && object.patientId !== null) {
      message.patientId = object.patientId;
    } else {
      message.patientId = 0;
    }
    return message;
  },
};

const baseQueryGetPatientByIdResponse: object = {};

export const QueryGetPatientByIdResponse = {
  encode(
    message: QueryGetPatientByIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.patient !== undefined) {
      Patient.encode(message.patient, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetPatientByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPatientByIdResponse,
    } as QueryGetPatientByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.patient = Patient.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetPatientByIdResponse {
    const message = {
      ...baseQueryGetPatientByIdResponse,
    } as QueryGetPatientByIdResponse;
    if (object.patient !== undefined && object.patient !== null) {
      message.patient = Patient.fromJSON(object.patient);
    } else {
      message.patient = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPatientByIdResponse): unknown {
    const obj: any = {};
    message.patient !== undefined &&
      (obj.patient = message.patient
        ? Patient.toJSON(message.patient)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPatientByIdResponse>
  ): QueryGetPatientByIdResponse {
    const message = {
      ...baseQueryGetPatientByIdResponse,
    } as QueryGetPatientByIdResponse;
    if (object.patient !== undefined && object.patient !== null) {
      message.patient = Patient.fromPartial(object.patient);
    } else {
      message.patient = undefined;
    }
    return message;
  },
};

const baseQuerySearchPatientsRequest: object = { nameQuery: "" };

export const QuerySearchPatientsRequest = {
  encode(
    message: QuerySearchPatientsRequest,
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
  ): QuerySearchPatientsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchPatientsRequest,
    } as QuerySearchPatientsRequest;
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

  fromJSON(object: any): QuerySearchPatientsRequest {
    const message = {
      ...baseQuerySearchPatientsRequest,
    } as QuerySearchPatientsRequest;
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

  toJSON(message: QuerySearchPatientsRequest): unknown {
    const obj: any = {};
    message.nameQuery !== undefined && (obj.nameQuery = message.nameQuery);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchPatientsRequest>
  ): QuerySearchPatientsRequest {
    const message = {
      ...baseQuerySearchPatientsRequest,
    } as QuerySearchPatientsRequest;
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

const baseQuerySearchPatientsResponse: object = {};

export const QuerySearchPatientsResponse = {
  encode(
    message: QuerySearchPatientsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.patients) {
      Patient.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QuerySearchPatientsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQuerySearchPatientsResponse,
    } as QuerySearchPatientsResponse;
    message.patients = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.patients.push(Patient.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QuerySearchPatientsResponse {
    const message = {
      ...baseQuerySearchPatientsResponse,
    } as QuerySearchPatientsResponse;
    message.patients = [];
    if (object.patients !== undefined && object.patients !== null) {
      for (const e of object.patients) {
        message.patients.push(Patient.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QuerySearchPatientsResponse): unknown {
    const obj: any = {};
    if (message.patients) {
      obj.patients = message.patients.map((e) =>
        e ? Patient.toJSON(e) : undefined
      );
    } else {
      obj.patients = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QuerySearchPatientsResponse>
  ): QuerySearchPatientsResponse {
    const message = {
      ...baseQuerySearchPatientsResponse,
    } as QuerySearchPatientsResponse;
    message.patients = [];
    if (object.patients !== undefined && object.patients !== null) {
      for (const e of object.patients) {
        message.patients.push(Patient.fromPartial(e));
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

const baseQueryGetPatientsByCreatorRequest: object = { creator: "" };

export const QueryGetPatientsByCreatorRequest = {
  encode(
    message: QueryGetPatientsByCreatorRequest,
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
  ): QueryGetPatientsByCreatorRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPatientsByCreatorRequest,
    } as QueryGetPatientsByCreatorRequest;
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

  fromJSON(object: any): QueryGetPatientsByCreatorRequest {
    const message = {
      ...baseQueryGetPatientsByCreatorRequest,
    } as QueryGetPatientsByCreatorRequest;
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

  toJSON(message: QueryGetPatientsByCreatorRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPatientsByCreatorRequest>
  ): QueryGetPatientsByCreatorRequest {
    const message = {
      ...baseQueryGetPatientsByCreatorRequest,
    } as QueryGetPatientsByCreatorRequest;
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

const baseQueryGetPatientsByCreatorResponse: object = {};

export const QueryGetPatientsByCreatorResponse = {
  encode(
    message: QueryGetPatientsByCreatorResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.patients) {
      Patient.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGetPatientsByCreatorResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetPatientsByCreatorResponse,
    } as QueryGetPatientsByCreatorResponse;
    message.patients = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.patients.push(Patient.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetPatientsByCreatorResponse {
    const message = {
      ...baseQueryGetPatientsByCreatorResponse,
    } as QueryGetPatientsByCreatorResponse;
    message.patients = [];
    if (object.patients !== undefined && object.patients !== null) {
      for (const e of object.patients) {
        message.patients.push(Patient.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetPatientsByCreatorResponse): unknown {
    const obj: any = {};
    if (message.patients) {
      obj.patients = message.patients.map((e) =>
        e ? Patient.toJSON(e) : undefined
      );
    } else {
      obj.patients = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetPatientsByCreatorResponse>
  ): QueryGetPatientsByCreatorResponse {
    const message = {
      ...baseQueryGetPatientsByCreatorResponse,
    } as QueryGetPatientsByCreatorResponse;
    message.patients = [];
    if (object.patients !== undefined && object.patients !== null) {
      for (const e of object.patients) {
        message.patients.push(Patient.fromPartial(e));
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of patients. */
  GetPatients(
    request: QueryGetPatientsRequest
  ): Promise<QueryGetPatientsResponse>;
  /** Queries a patient by id. */
  GetPatientById(
    request: QueryGetPatientByIdRequest
  ): Promise<QueryGetPatientByIdResponse>;
  /** Searches patients by name. */
  SearchPatients(
    request: QuerySearchPatientsRequest
  ): Promise<QuerySearchPatientsResponse>;
  /** Queries a list of patients by creator. */
  GetPatientsByCreator(
    request: QueryGetPatientsByCreatorRequest
  ): Promise<QueryGetPatientsByCreatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GetPatients(
    request: QueryGetPatientsRequest
  ): Promise<QueryGetPatientsResponse> {
    const data = QueryGetPatientsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Query",
      "GetPatients",
      data
    );
    return promise.then((data) =>
      QueryGetPatientsResponse.decode(new Reader(data))
    );
  }

  GetPatientById(
    request: QueryGetPatientByIdRequest
  ): Promise<QueryGetPatientByIdResponse> {
    const data = QueryGetPatientByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Query",
      "GetPatientById",
      data
    );
    return promise.then((data) =>
      QueryGetPatientByIdResponse.decode(new Reader(data))
    );
  }

  SearchPatients(
    request: QuerySearchPatientsRequest
  ): Promise<QuerySearchPatientsResponse> {
    const data = QuerySearchPatientsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Query",
      "SearchPatients",
      data
    );
    return promise.then((data) =>
      QuerySearchPatientsResponse.decode(new Reader(data))
    );
  }

  GetPatientsByCreator(
    request: QueryGetPatientsByCreatorRequest
  ): Promise<QueryGetPatientsByCreatorResponse> {
    const data = QueryGetPatientsByCreatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Query",
      "GetPatientsByCreator",
      data
    );
    return promise.then((data) =>
      QueryGetPatientsByCreatorResponse.decode(new Reader(data))
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
