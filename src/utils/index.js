import { aggregate } from "@makerdao/multicall";
import { parseUnits, formatUnits } from "@ethersproject/units";

export const multicallAddress = {
  1: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
  56: "0x41263cba59eb80dc200f3e2544eda4ed6a90e76c",
  137: "0x11ce4B23bD875D7F5C6a31084f55fDe1e9A87507",
  43114: "0xed386Fe855C1EFf2f843B910923Dd8846E45C5A4",
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const createIDOMulticall = (IDO, account) => {
  if (!IDO) return null;
  return [
    {
      target: IDO,
      call: ["preSaleInfo()(uint256,uint256,uint256)"],
      returns: [["minAllocation"], ["maxAllocation"], ["purchaseCap"]],
    },
    {
      target: IDO,
      call: ["raisedBUSD()(uint256)"],
      returns: [["TOTAL_RAISED"]],
    },
    {
      target: IDO,
      call: ["userPurchases()(uint256)", account],
      returns: [["PURCHASED"]],
    },
  ];
};

export const multicall = async (chainId, calls) => {
  if (isEmpty(calls)) return null;
  const results = await aggregate(calls, {
    rpcUrl: rpcUrls[chainId],
    multicallAddress: multicallAddress[chainId],
  });
  return results;
};

export const getIDOMulticall = async (IDO, account, chainId) => {
  const calls = createIDOMulticall(IDO, account);
  const idoMulticall = await multicall(chainId, calls);

  // return result results
  return idoMulticall.results.original;
};

export const unitParser = (units, decimals = 18) => {
  if (!units) return null;
  return parseUnits(units.toString(), decimals ? decimals : 18);
};

export const gasPrice = async (library) => {
  return await library.getGasPrice();
};

export const estimatedGas = async (contract, method, methodParams, account) => {
  console.log("gasEstemation", contract, method, methodParams);
  const gasEstemation = await contract.estimateGas[method](...methodParams, {
    from: account,
  });
  console.log("gasEstemation", gasEstemation);
  return gasEstemation;
};
