import { useCallback, useEffect, useState } from "react";
import { useIdoContract, useTokenContract } from "./useContract";
import {
  estimatedGas,
  gasPrice,
  unitParser,
  unitFormatter,
  roundValue,
} from "../utils";
import { useWeb3React } from "@web3-react/core";
import { isEmpty } from "lodash";
import { BigNumber } from "ethers";
import { BSC_CHAIN_ID } from "../constants";
import { useAuthContext } from "../context/AuthContext";
import _ from "lodash";

export const useBuy = (IDO) => {
  const { account, provider, chainId } = useAuthContext();
  const [transactionStatus, setTransactionStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const ido = useIdoContract(IDO);

  const buyToken = useCallback(
    async (amount) => {
      if (!ido) return null;
      try {
        console.log({ chainId, ido });
        setIsLoading(true);
        const gasLimitExpected = await estimatedGas(
          ido,
          "buy",
          [unitParser(String(amount))],
          account
        );

        // set the gas limit margin
        const gasLimit = roundValue(
          _.add(
            gasLimitExpected,
            _.divide(_.multiply(gasLimitExpected, 5), 100)
          ),
          0
        );

        const gas_price = await gasPrice(provider);

        const transaction = await ido
          .connect(provider.getSigner())
          .buy(unitParser(String(amount)), {
            from: account,
            gasLimit,
            gasPrice: gas_price,
          });

        await transaction.wait(2);

        setTransactionStatus(transaction.hash);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    },
    [IDO, account, ido, transactionStatus]
  );

  return { transactionStatus, buyToken, isLoading };
};
