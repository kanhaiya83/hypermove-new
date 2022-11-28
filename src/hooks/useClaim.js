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
import _, { isEmpty } from "lodash";
import { BigNumber } from "ethers";
import { BSC_MAINNET_CHAIN } from "../constants";
import { IDO_INFO } from "../constants/idoInfo";

export const useClaim = () => {
  const { account, library, chainId } = useWeb3React();
  const [transactionStatus, setTransactionStatus] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const ido = useIdoContract(IDO_INFO.contractAddress);

  const claimToken = useCallback(async () => {
    if (chainId !== BSC_MAINNET_CHAIN || !ido) return null;
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

      const gas_price = await gasPrice(library);

      const transaction = await ido
        .connect(library.getSigner())
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
  }, [account, ido, transactionStatus]);

  return { transactionStatus, claimToken, isLoading };
};
