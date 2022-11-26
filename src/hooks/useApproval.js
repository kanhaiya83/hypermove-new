import { useCallback, useEffect, useState } from "react";
import { useTokenContract } from "./useContract.js";
import { estimatedGas, gasPrice, unitParser, unitFormatter } from "../utils";
import { useWeb3React } from "@web3-react/core";
import { isEmpty } from "lodash";
import { BigNumber } from "ethers";
import { useMetaMask } from "metamask-react";

export const useApproval = (
  /** amount to spend */
  amountToSpend,
  /** spender address */
  spender,
  /** approval token Id */
  tokenId,
  /**provider */
  provider
) => {
  const [tx, setTx] = useState(false);

  let [approvalTxStatus, setApprovalTxStatus] = useState();

  const { account, library } = useMetaMask();
  const instance = useTokenContract(tokenId);

  const triggeredApproval = useCallback(async () => {
    try {
      if (!account || !instance || !spender) return null;
      // set approval status loading
      setApprovalTxStatus("loading");
      // fetch the gaslimit
      // console.log('amount', amount);
      const gasLimit = await estimatedGas(
        instance,
        "approve",
        [spender, unitParser(amountToSpend)],
        account
      );
      // get the median gas price for latest 50 BLock.
      const gas_price = await gasPrice(library);

      const transaction = await instance
        .connect(library.getSigner())
        .approve(spender, unitParser(amountToSpend), {
          from: account,
          gasLimit,
          gasPrice: gas_price,
        });

      // waiting atleast two confirmation
      await transaction.wait(2);
      setTx(true);
      setApprovalRequired(false);
      // set approval transaction status to confirm
      setApprovalTxStatus("confirmed");
    } catch (err) {
      // set error
      setApprovalTxStatus("error");
    }
  }, [spender, library, instance, account, amount]);

  return {
    approvalTxStatus,
    triggeredApproval,
    tx,
  };
};
