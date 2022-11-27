import React from "react";

import TOKEN_ABI from "../constants/ABI/TOKEN_ABI.json";
import IDO_ABI from "../constants/ABI/IDO_ABI.json";
import { Contract } from "ethers";
import { useAuthContext } from "../context/AuthContext";

export const useContract = (ABI, address) => {
  const { chainId, provider } = useAuthContext();
  // const { library, chainId } = useWeb3React();
  return React.useMemo(() => {
    if (!address || !provider || !chainId) return null;
    return new Contract(address, ABI, provider);
  }, [ABI, address, provider]);
};

export const useTokenContract = (address) => {
  return useContract(TOKEN_ABI, address);
};

export const useIdoContract = (address) => {
  return useContract(IDO_ABI, address);
};
