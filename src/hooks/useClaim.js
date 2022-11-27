import { useCallback, useEffect, useState } from "react";
import { useIdoContract, useTokenContract } from "./useContract";
import { estimatedGas, gasPrice, unitParser, unitFormatter } from "../utils";
import { useWeb3React } from "@web3-react/core";
import { isEmpty } from "lodash";
import { BigNumber } from "ethers";
import { BSC_CHAIN_ID } from "../constants";
import { useAuthContext } from "../context/AuthContext";

export const useClaim = (IDO) => {
  const { account, provider, chainId } = useAuthContext();
  const [transactionStatus, setTransactionStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const ido = useIdoContract(IDO);

  const claimToken = useCallback(async () => {
    if (chainId !== BSC_CHAIN_ID || !ido) return null;
    try {
      setIsLoading(true);
      const gasLimitExpected = await estimatedGas(
        ido,
        "claimHyperMove",
        [],
        account
      );

      // set the gas limit margin
      const gasLimit = roundValue(
        _.add(gasLimitExpected, _.divide(_.multiply(gasLimitExpected, 5), 100)),
        0
      );

      const gas_price = await gasPrice(provider);

      const transaction = await ido
        .connect(provider.getSigner())
        .claimHyperMove({
          from: account,
          gasLimit,
          gasPrice: gas_price,
        });

      await transaction.wait(2);

      setTransactionStatus(transaction.hash);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err.message);
    }
  }, [IDO, account, ido, transactionStatus]);

  return { transactionStatus, claimToken, isLoading };
};
