// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAddPatient } from "./types/patient/tx";
import { MsgDeletePatient } from "./types/patient/tx";
import { MsgUpdatePatient } from "./types/patient/tx";


const types = [
  ["/ashrafmohey.authority.patient.MsgAddPatient", MsgAddPatient],
  ["/ashrafmohey.authority.patient.MsgDeletePatient", MsgDeletePatient],
  ["/ashrafmohey.authority.patient.MsgUpdatePatient", MsgUpdatePatient],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgAddPatient: (data: MsgAddPatient): EncodeObject => ({ typeUrl: "/ashrafmohey.authority.patient.MsgAddPatient", value: MsgAddPatient.fromPartial( data ) }),
    msgDeletePatient: (data: MsgDeletePatient): EncodeObject => ({ typeUrl: "/ashrafmohey.authority.patient.MsgDeletePatient", value: MsgDeletePatient.fromPartial( data ) }),
    msgUpdatePatient: (data: MsgUpdatePatient): EncodeObject => ({ typeUrl: "/ashrafmohey.authority.patient.MsgUpdatePatient", value: MsgUpdatePatient.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
