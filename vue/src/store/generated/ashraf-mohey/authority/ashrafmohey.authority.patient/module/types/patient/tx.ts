/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Patient } from "../patient/patient";

export const protobufPackage = "ashrafmohey.authority.patient";

export interface MsgAddPatient {
  creator: string;
  name: string;
  birthDate: string;
  gender: string;
  maritalStatus: string;
  phone: string;
  email: string;
  nationality: string;
  address: string;
  emergencyContact: string;
}

export interface MsgAddPatientResponse {
  patient: Patient | undefined;
}

export interface MsgUpdatePatient {
  creator: string;
  patientId: number;
  name: string;
  birthDate: string;
  gender: string;
  maritalStatus: string;
  phone: string;
  email: string;
  nationality: string;
  address: string;
  emergencyContact: string;
  publicKey: string;
}

export interface MsgUpdatePatientResponse {
  patient: Patient | undefined;
}

export interface MsgDeletePatient {
  creator: string;
  patientId: number;
}

export interface MsgDeletePatientResponse {
  id: number;
}

const baseMsgAddPatient: object = {
  creator: "",
  name: "",
  birthDate: "",
  gender: "",
  maritalStatus: "",
  phone: "",
  email: "",
  nationality: "",
  address: "",
  emergencyContact: "",
};

export const MsgAddPatient = {
  encode(message: MsgAddPatient, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.birthDate !== "") {
      writer.uint32(26).string(message.birthDate);
    }
    if (message.gender !== "") {
      writer.uint32(34).string(message.gender);
    }
    if (message.maritalStatus !== "") {
      writer.uint32(42).string(message.maritalStatus);
    }
    if (message.phone !== "") {
      writer.uint32(50).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(58).string(message.email);
    }
    if (message.nationality !== "") {
      writer.uint32(66).string(message.nationality);
    }
    if (message.address !== "") {
      writer.uint32(74).string(message.address);
    }
    if (message.emergencyContact !== "") {
      writer.uint32(82).string(message.emergencyContact);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddPatient {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPatient } as MsgAddPatient;
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
          message.birthDate = reader.string();
          break;
        case 4:
          message.gender = reader.string();
          break;
        case 5:
          message.maritalStatus = reader.string();
          break;
        case 6:
          message.phone = reader.string();
          break;
        case 7:
          message.email = reader.string();
          break;
        case 8:
          message.nationality = reader.string();
          break;
        case 9:
          message.address = reader.string();
          break;
        case 10:
          message.emergencyContact = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPatient {
    const message = { ...baseMsgAddPatient } as MsgAddPatient;
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
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = String(object.birthDate);
    } else {
      message.birthDate = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender);
    } else {
      message.gender = "";
    }
    if (object.maritalStatus !== undefined && object.maritalStatus !== null) {
      message.maritalStatus = String(object.maritalStatus);
    } else {
      message.maritalStatus = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.nationality !== undefined && object.nationality !== null) {
      message.nationality = String(object.nationality);
    } else {
      message.nationality = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.emergencyContact !== undefined &&
      object.emergencyContact !== null
    ) {
      message.emergencyContact = String(object.emergencyContact);
    } else {
      message.emergencyContact = "";
    }
    return message;
  },

  toJSON(message: MsgAddPatient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.birthDate !== undefined && (obj.birthDate = message.birthDate);
    message.gender !== undefined && (obj.gender = message.gender);
    message.maritalStatus !== undefined &&
      (obj.maritalStatus = message.maritalStatus);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    message.nationality !== undefined &&
      (obj.nationality = message.nationality);
    message.address !== undefined && (obj.address = message.address);
    message.emergencyContact !== undefined &&
      (obj.emergencyContact = message.emergencyContact);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddPatient>): MsgAddPatient {
    const message = { ...baseMsgAddPatient } as MsgAddPatient;
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
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = object.birthDate;
    } else {
      message.birthDate = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = "";
    }
    if (object.maritalStatus !== undefined && object.maritalStatus !== null) {
      message.maritalStatus = object.maritalStatus;
    } else {
      message.maritalStatus = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.nationality !== undefined && object.nationality !== null) {
      message.nationality = object.nationality;
    } else {
      message.nationality = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.emergencyContact !== undefined &&
      object.emergencyContact !== null
    ) {
      message.emergencyContact = object.emergencyContact;
    } else {
      message.emergencyContact = "";
    }
    return message;
  },
};

const baseMsgAddPatientResponse: object = {};

export const MsgAddPatientResponse = {
  encode(
    message: MsgAddPatientResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.patient !== undefined) {
      Patient.encode(message.patient, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddPatientResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPatientResponse } as MsgAddPatientResponse;
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

  fromJSON(object: any): MsgAddPatientResponse {
    const message = { ...baseMsgAddPatientResponse } as MsgAddPatientResponse;
    if (object.patient !== undefined && object.patient !== null) {
      message.patient = Patient.fromJSON(object.patient);
    } else {
      message.patient = undefined;
    }
    return message;
  },

  toJSON(message: MsgAddPatientResponse): unknown {
    const obj: any = {};
    message.patient !== undefined &&
      (obj.patient = message.patient
        ? Patient.toJSON(message.patient)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddPatientResponse>
  ): MsgAddPatientResponse {
    const message = { ...baseMsgAddPatientResponse } as MsgAddPatientResponse;
    if (object.patient !== undefined && object.patient !== null) {
      message.patient = Patient.fromPartial(object.patient);
    } else {
      message.patient = undefined;
    }
    return message;
  },
};

const baseMsgUpdatePatient: object = {
  creator: "",
  patientId: 0,
  name: "",
  birthDate: "",
  gender: "",
  maritalStatus: "",
  phone: "",
  email: "",
  nationality: "",
  address: "",
  emergencyContact: "",
  publicKey: "",
};

export const MsgUpdatePatient = {
  encode(message: MsgUpdatePatient, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.patientId !== 0) {
      writer.uint32(16).uint64(message.patientId);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.birthDate !== "") {
      writer.uint32(34).string(message.birthDate);
    }
    if (message.gender !== "") {
      writer.uint32(42).string(message.gender);
    }
    if (message.maritalStatus !== "") {
      writer.uint32(50).string(message.maritalStatus);
    }
    if (message.phone !== "") {
      writer.uint32(58).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(66).string(message.email);
    }
    if (message.nationality !== "") {
      writer.uint32(74).string(message.nationality);
    }
    if (message.address !== "") {
      writer.uint32(82).string(message.address);
    }
    if (message.emergencyContact !== "") {
      writer.uint32(90).string(message.emergencyContact);
    }
    if (message.publicKey !== "") {
      writer.uint32(98).string(message.publicKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdatePatient {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdatePatient } as MsgUpdatePatient;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.patientId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.birthDate = reader.string();
          break;
        case 5:
          message.gender = reader.string();
          break;
        case 6:
          message.maritalStatus = reader.string();
          break;
        case 7:
          message.phone = reader.string();
          break;
        case 8:
          message.email = reader.string();
          break;
        case 9:
          message.nationality = reader.string();
          break;
        case 10:
          message.address = reader.string();
          break;
        case 11:
          message.emergencyContact = reader.string();
          break;
        case 12:
          message.publicKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePatient {
    const message = { ...baseMsgUpdatePatient } as MsgUpdatePatient;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.patientId !== undefined && object.patientId !== null) {
      message.patientId = Number(object.patientId);
    } else {
      message.patientId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = String(object.birthDate);
    } else {
      message.birthDate = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = String(object.gender);
    } else {
      message.gender = "";
    }
    if (object.maritalStatus !== undefined && object.maritalStatus !== null) {
      message.maritalStatus = String(object.maritalStatus);
    } else {
      message.maritalStatus = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = String(object.phone);
    } else {
      message.phone = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = String(object.email);
    } else {
      message.email = "";
    }
    if (object.nationality !== undefined && object.nationality !== null) {
      message.nationality = String(object.nationality);
    } else {
      message.nationality = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (
      object.emergencyContact !== undefined &&
      object.emergencyContact !== null
    ) {
      message.emergencyContact = String(object.emergencyContact);
    } else {
      message.emergencyContact = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = String(object.publicKey);
    } else {
      message.publicKey = "";
    }
    return message;
  },

  toJSON(message: MsgUpdatePatient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.patientId !== undefined && (obj.patientId = message.patientId);
    message.name !== undefined && (obj.name = message.name);
    message.birthDate !== undefined && (obj.birthDate = message.birthDate);
    message.gender !== undefined && (obj.gender = message.gender);
    message.maritalStatus !== undefined &&
      (obj.maritalStatus = message.maritalStatus);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    message.nationality !== undefined &&
      (obj.nationality = message.nationality);
    message.address !== undefined && (obj.address = message.address);
    message.emergencyContact !== undefined &&
      (obj.emergencyContact = message.emergencyContact);
    message.publicKey !== undefined && (obj.publicKey = message.publicKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdatePatient>): MsgUpdatePatient {
    const message = { ...baseMsgUpdatePatient } as MsgUpdatePatient;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.patientId !== undefined && object.patientId !== null) {
      message.patientId = object.patientId;
    } else {
      message.patientId = 0;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.birthDate !== undefined && object.birthDate !== null) {
      message.birthDate = object.birthDate;
    } else {
      message.birthDate = "";
    }
    if (object.gender !== undefined && object.gender !== null) {
      message.gender = object.gender;
    } else {
      message.gender = "";
    }
    if (object.maritalStatus !== undefined && object.maritalStatus !== null) {
      message.maritalStatus = object.maritalStatus;
    } else {
      message.maritalStatus = "";
    }
    if (object.phone !== undefined && object.phone !== null) {
      message.phone = object.phone;
    } else {
      message.phone = "";
    }
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    } else {
      message.email = "";
    }
    if (object.nationality !== undefined && object.nationality !== null) {
      message.nationality = object.nationality;
    } else {
      message.nationality = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (
      object.emergencyContact !== undefined &&
      object.emergencyContact !== null
    ) {
      message.emergencyContact = object.emergencyContact;
    } else {
      message.emergencyContact = "";
    }
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = object.publicKey;
    } else {
      message.publicKey = "";
    }
    return message;
  },
};

const baseMsgUpdatePatientResponse: object = {};

export const MsgUpdatePatientResponse = {
  encode(
    message: MsgUpdatePatientResponse,
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
  ): MsgUpdatePatientResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdatePatientResponse,
    } as MsgUpdatePatientResponse;
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

  fromJSON(object: any): MsgUpdatePatientResponse {
    const message = {
      ...baseMsgUpdatePatientResponse,
    } as MsgUpdatePatientResponse;
    if (object.patient !== undefined && object.patient !== null) {
      message.patient = Patient.fromJSON(object.patient);
    } else {
      message.patient = undefined;
    }
    return message;
  },

  toJSON(message: MsgUpdatePatientResponse): unknown {
    const obj: any = {};
    message.patient !== undefined &&
      (obj.patient = message.patient
        ? Patient.toJSON(message.patient)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdatePatientResponse>
  ): MsgUpdatePatientResponse {
    const message = {
      ...baseMsgUpdatePatientResponse,
    } as MsgUpdatePatientResponse;
    if (object.patient !== undefined && object.patient !== null) {
      message.patient = Patient.fromPartial(object.patient);
    } else {
      message.patient = undefined;
    }
    return message;
  },
};

const baseMsgDeletePatient: object = { creator: "", patientId: 0 };

export const MsgDeletePatient = {
  encode(message: MsgDeletePatient, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.patientId !== 0) {
      writer.uint32(16).uint64(message.patientId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeletePatient {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeletePatient } as MsgDeletePatient;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.patientId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePatient {
    const message = { ...baseMsgDeletePatient } as MsgDeletePatient;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.patientId !== undefined && object.patientId !== null) {
      message.patientId = Number(object.patientId);
    } else {
      message.patientId = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePatient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.patientId !== undefined && (obj.patientId = message.patientId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeletePatient>): MsgDeletePatient {
    const message = { ...baseMsgDeletePatient } as MsgDeletePatient;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.patientId !== undefined && object.patientId !== null) {
      message.patientId = object.patientId;
    } else {
      message.patientId = 0;
    }
    return message;
  },
};

const baseMsgDeletePatientResponse: object = { id: 0 };

export const MsgDeletePatientResponse = {
  encode(
    message: MsgDeletePatientResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeletePatientResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeletePatientResponse,
    } as MsgDeletePatientResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeletePatientResponse {
    const message = {
      ...baseMsgDeletePatientResponse,
    } as MsgDeletePatientResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeletePatientResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDeletePatientResponse>
  ): MsgDeletePatientResponse {
    const message = {
      ...baseMsgDeletePatientResponse,
    } as MsgDeletePatientResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  AddPatient(request: MsgAddPatient): Promise<MsgAddPatientResponse>;
  UpdatePatient(request: MsgUpdatePatient): Promise<MsgUpdatePatientResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeletePatient(request: MsgDeletePatient): Promise<MsgDeletePatientResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AddPatient(request: MsgAddPatient): Promise<MsgAddPatientResponse> {
    const data = MsgAddPatient.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Msg",
      "AddPatient",
      data
    );
    return promise.then((data) =>
      MsgAddPatientResponse.decode(new Reader(data))
    );
  }

  UpdatePatient(request: MsgUpdatePatient): Promise<MsgUpdatePatientResponse> {
    const data = MsgUpdatePatient.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Msg",
      "UpdatePatient",
      data
    );
    return promise.then((data) =>
      MsgUpdatePatientResponse.decode(new Reader(data))
    );
  }

  DeletePatient(request: MsgDeletePatient): Promise<MsgDeletePatientResponse> {
    const data = MsgDeletePatient.encode(request).finish();
    const promise = this.rpc.request(
      "ashrafmohey.authority.patient.Msg",
      "DeletePatient",
      data
    );
    return promise.then((data) =>
      MsgDeletePatientResponse.decode(new Reader(data))
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
