import React from "react";

import TOKEN_ABI from "../constants/ABI/TOKEN_ABI.json";
import IDO_ABI from "../constants/ABI/IDO_ABI.json";
import { Contract } from "ethers";
import { useWeb3React } from "@web3-react/core";

export const useContract = (ABI, address) => {
  const { chainId, library } = useWeb3React();
  // const { library, chainId } = useWeb3React();
  return React.useMemo(() => {
    if (!address || !library || !chainId) return null;
    return new Contract(address, ABI, library);
  }, [ABI, address, library]);
};

export const useTokenContract = (address) => {
  return useContract(TOKEN_ABI, address);
};

export const useIdoContract = (address) => {
  return useContract(IDO_ABI, address);
};
