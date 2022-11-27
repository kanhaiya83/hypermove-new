import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
import { useTokenContract } from "./useContract.js";
import { estimatedGas, gasPrice, unitParser, unitFormatter } from "../utils";

// to fetch allowance
export const useTokenBalance = (
  /** account address */
  account,
  /** token address */
  token
) => {
  let tokenContract = useTokenContract(token);
  let [balance, setBalance] = useState(null);

  useEffect(() => {
    if (!isEmpty(tokenContract) && account) {
      // fetch balance
      const derivedBalance = async () => {
        console.log({ account });
        let balance = await tokenContract.balanceOf(account);
        setBalance(unitFormatter(balance));
      };
      derivedBalance();
    }
  }, [tokenContract, account]);

  return balance;
};
