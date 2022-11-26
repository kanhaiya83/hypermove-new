import TOKEN_ABI from "../constants/ABI/TOKEN_ABI.json";
import IDO_ABI from "../constants/ABI/IDO_ABI.json";

export const useContract = (ABI, address, provider) => {
  return useMemo(() => {
    if (!address || !library || !appChainId) return null;
    return new Contract(address, ABI, provider);
  }, [ABI, address, library, appChainId]);
};

export const useTokenContract = (address, provider) => {
  return useContract(TOKEN_ABI, address, provider);
};

export const useIdoContract = (address, provider) => {
  return useContract(IDO_ABI, address, provider);
};
