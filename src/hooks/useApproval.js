import { useCallback, useEffect, useState } from "react";
import { useTokenContract } from "./useContract.js";
import { estimatedGas, gasPrice, unitParser, unitFormatter } from "../utils";
import { useWeb3React } from "@web3-react/core";
import { isEmpty } from "lodash";

// to fetch allowance
export const useAllowance = (
  /** account address */
  account,
  /** spender address */
  spender,
  /** token address */
  token
) => {
  let tokenContract = useTokenContract(token);
  let [allowance, setAllownace] = useState(null);

  useEffect(() => {
    if (!isEmpty(tokenContract) && spender && account) {
      // fetch allowance only once
      const derivedAllowance = async () => {
        let allowed = await tokenContract.allowance(account, spender);
        setAllownace(allowed);
      };
      derivedAllowance();
    }
  }, [tokenContract, account, spender]);

  return allowance;
};

export const useApproval = (
  /** amount to spend */
  amount,
  /** spender address */
  spender,
  /** approval token Id */
  tokenId
) => {
  const [tx, setTx] = useState(false);
  const [isApprovalRequired, setApprovalRequired] = useState(true);
  let [isLoding, setIsLoading] = useState(false);

  const { account, library } = useWeb3React();

  const allowance = useAllowance(account, spender, tokenId);

  useEffect(() => {
    if (!allowance || !amount) return;
    if (unitFormatter(allowance) > unitFormatter(amount)) {
      setApprovalRequired(false);
    }
  }, [allowance, amount]);

  const instance = useTokenContract(tokenId);

  const triggeredApproval = useCallback(async () => {
    console.log({ instance, account, spender });
    try {
      if (!account || !instance || !spender) return null;
      // set approval status loading
      setIsLoading(true);
      // fetch the gaslimit
      // console.log('amount', amount);
      const gasLimit = await estimatedGas(
        instance,
        "approve",
        [spender, unitParser(String(10000))],
        account
      );
      // get the median gas price for latest 50 BLock.
      const gas_price = await gasPrice(library?.getSigner());

      const transaction = await instance
        .connect(library?.getSigner())
        .approve(spender, unitParser(String(10000)), {
          from: account,
          gasLimit,
          gasPrice: gas_price,
        });

      // waiting atleast two confirmation
      await transaction.wait(2);
      setTx(true);
      setApprovalRequired(false);
      // set approval transaction status to confirm
      setIsLoading(false);
    } catch (err) {
      // set error
      console.log(err);
      setIsLoading(false);
    }
  }, [spender, library, instance, account, amount]);

  return {
    isApprovalRequired,
    isLoding,
    triggeredApproval,
    tx,
  };
};
