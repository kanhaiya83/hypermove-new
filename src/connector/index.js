import { InjectedConnector } from "@web3-react/injected-connector";

import { BSC_MAINNET_CHAIN } from "../constants";

const supportedChainIds = [BSC_MAINNET_CHAIN];

export const RPC = {
  56: "https://rpc.ankr.com/bsc",
};

export const injected = new InjectedConnector({
  supportedChainIds,
});
