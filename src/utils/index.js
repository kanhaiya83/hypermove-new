import { aggregate } from "@makerdao/multicall";
import { ethers } from "ethers";
import { parseUnits, formatUnits } from "@ethersproject/units";
import { isEmpty } from "lodash";
import { BSC_TESTNET_CHAIN } from "../constants";

export const multicallAddress = {
  97: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C",
};

export const rpcUrls = {
  97: "https://rpc.ankr.com/bsc_testnet_chapel",
};

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const createIDOMulticall = (IDO, account) => {
  if (!IDO || !account) return null;
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
      call: ["userPurchases(address)(uint256)", account],
      returns: [["PURCHASED"]],
    },
    {
      target: IDO,
      call: ["isSaleEnd()(bool)"],
      returns: [["isSaleEnd"]],
    },
    {
      target: IDO,
      call: ["isSaleStarted()(bool)"],
      returns: [["isSaleStarted"]],
    },
    {
      target: IDO,
      call: ["isClaimable()(bool)"],
      returns: [["isClaimable"]],
    },
    {
      target: IDO,
      call: ["hyperMovePrice()(uint256)"],
      returns: [["hyperMovePrice"]],
    },
  ];
};

export const multicall = async (calls) => {
  if (isEmpty(calls)) return null;
  const results = await aggregate(calls, {
    rpcUrl: rpcUrls[BSC_TESTNET_CHAIN],
    multicallAddress: multicallAddress[BSC_TESTNET_CHAIN],
  });
  return results;
};

export const getIDOMulticall = async (IDO, account) => {
  const calls = createIDOMulticall(IDO, account);
  const idoMulticall = await multicall(calls);

  // return result results
  return idoMulticall.results.original;
};

export const unitParser = (units, decimals = 18) => {
  if (!units) return null;
  return ethers.utils.parseUnits(units);
};

export const unitFormatter = (units, decimals = 18) => {
  if (!units) return null;
  return parseInt(ethers.utils.formatUnits(units, decimals));
};

export const gasPrice = async (library) => {
  return await library.getGasPrice();
};

export const estimatedGas = async (contract, method, methodParams, account) => {
  const gasEstemation = await contract.estimateGas[method](...methodParams, {
    from: account,
  });
  return gasEstemation;
};

export const currencyFormatter = (amount) => {
  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return formatter.format(amount);
};

export function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = months[a.getMonth()];
  var date = a.getDate();
  var time = month + " " + date + "th";
  return time;
}

export const roundValue = (value, roundTo) => {
  return Math.floor(value * 10 ** roundTo) / 10 ** roundTo;
};
