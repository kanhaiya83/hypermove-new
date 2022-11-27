import { InjectedConnector } from "@web3-react/injected-connector";

import { BSC_MAINNET_CHAIN, BSC_TESTNET_CHAIN } from "../constants";

const supportedChainIds = [BSC_TESTNET_CHAIN, BSC_MAINNET_CHAIN];

export const RPC = {
  56: "https://rpc.ankr.com/bsc",
  97: "https://rpc.ankr.com/bsc_testnet_chapel",
};

export const injected = new InjectedConnector({
  supportedChainIds,
});
