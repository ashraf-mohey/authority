/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "ashrafmohey.authority.patient";

export interface Patient {
  creator: string;
  id: number;
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

const basePatient: object = {
  creator: "",
  id: 0,
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

export const Patient = {
  encode(message: Patient, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
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

  decode(input: Reader | Uint8Array, length?: number): Patient {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePatient } as Patient;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): Patient {
    const message = { ...basePatient } as Patient;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
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

  toJSON(message: Patient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
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

  fromPartial(object: DeepPartial<Patient>): Patient {
    const message = { ...basePatient } as Patient;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
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
