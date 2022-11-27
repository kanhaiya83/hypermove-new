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
import _ from "lodash";
import { errorToast, successToast } from "../utils/toast";

export const useBuy = (IDO) => {
  const { account, library } = useWeb3React();
  const [transactionStatus, setTransactionStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const ido = useIdoContract(IDO);

  const buyToken = useCallback(
    async (amount) => {
      if (!ido) return null;
      try {
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

        const gas_price = await gasPrice(library);

        const transaction = await ido
          .connect(library.getSigner())
          .buy(unitParser(String(amount)), {
            from: account,
            gasLimit,
            gasPrice: gas_price,
          });

        await transaction.wait(2);

        setTransactionStatus(transaction.hash);
        setIsLoading(false);
        successToast("Payment successful!!")
      } catch (err) {
        setIsLoading(false);
        errorToast("Payment unsuccessful!!")

        console.log(err);
      }
    },
    [IDO, account, ido, transactionStatus]
  );

  return { transactionStatus, buyToken, isLoading };
};
