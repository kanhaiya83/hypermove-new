import { useCallback, useEffect, useState } from "react";
import { useTokenContract } from "./useContract";
import { estimatedGas, gasPrice, unitParser, unitFormatter } from "../utils";
import { useWeb3React } from "@web3-react/core";
import { isEmpty } from "lodash";
import { BigNumber } from "ethers";

export const useApproval = (
  /** amount to spend */
  amountToSpend,
  /** spender address */
  spender,
  /** approval token Id */
  tokenId
) => {
  // to check if approval required
  let [isApprovalRequired, setApprovalRequired] = useState < boolean > true;
  const [tx, setTx] = useState < boolean > false;

  let [approvalTxStatus, setApprovalTxStatus] = useState();
  const { account, library } = useWeb3React();
  const instance = useTokenContract(tokenId);

  const triggeredApproval = useCallback(async () => {
    try {
      if (!account || !instance || !spender) return null;
      // set approval status loading
      setApprovalTxStatus(ApprovalTransactionStatus.APPROVAL_LOADING);
      // fetch the gaslimit
      // console.log('amount', amount);
      const gasLimit = await estimatedGas(
        instance,
        "approve",
        [spender, amount],
        account
      );
      // get the median gas price for latest 50 BLock.
      const gas_price = await gasPrice(library);

      const transaction = await instance
        .connect(library.getSigner())
        .approve(spender, amount, {
          from: account,
          gasLimit,
          gasPrice: gas_price,
        });

      // waiting atleast two confirmation
      await transaction.wait(2);

      setApprovalRequired(false);
      // set approval transaction status to confirm
      setApprovalTxStatus(ApprovalTransactionStatus.APPROVAL_CONFIRMED);
    } catch (err) {
      // set error
      setApprovalTxStatus(ApprovalTransactionStatus.APPROVAL_ERROR);
    }
  }, [spender, library, instance, account, amount]);

  return {
    // isApprovalRequired,
    approvalTxStatus,
    triggeredApproval,
    tx,
  };
};
