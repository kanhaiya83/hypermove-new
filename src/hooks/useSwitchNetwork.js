import React, { useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { BSC_MAINNET_CHAIN, BSC_TESTNET_CHAIN } from "../constants";

const chainConfig = {
  97: [
    {
      chainId: "0x61",
      chainName: "Binance Smart Chain (Testnet)",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://rpc.ankr.com/bsc_testnet_chapel"],
      blockExplorerUrls: ["https://testnet.bscscan.com/"],
      iconUrls: ["https://cryptologos.cc/logos/bnb-bnb-logo.png?v=023"],
    },
  ],
};

export const useSwitchNetwork = () => {
  const { connector, library } = useWeb3React();
  return useCallback(async () => {
    const isMetaMask = window.ethereum && window.ethereum.isMetaMask;
    try {
      if (connector && isMetaMask) {
        // if (newAppChainId === BSC_MAINNET_CHAIN) {
        //   await library.provider.request({
        //     method: "wallet_switchEthereumChain",
        //     params: [{ chainId: "0x38" }],
        //   });
        // }
        await library.provider.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: "0x61",
            },
          ],
        });
      }
      return true;
    } catch (err) {
      if (err.code === 4902) {
        const ethereum = window?.ethereum;
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: chainConfig[BSC_TESTNET_CHAIN],
        });
      }
      console.log("Error in useChangeAppChainId(): ", err.message);
      return false;
    }
  }, [connector]);
};
