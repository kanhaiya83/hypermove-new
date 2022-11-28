import React from "react";
import { IDO_INFO } from "../constants/idoInfo";
import { getIDOMulticall, unitFormatter, ZERO_ADDRESS } from "../utils";
import { round } from "lodash";
import { useQuery } from "@tanstack/react-query";
import { useWeb3React } from "@web3-react/core";

export const useIdoInfo = () => {
  const { account } = useWeb3React();
  const { isFetching, data, error } = useQuery({
    queryKey: ["idoData"],
    queryFn: async () => {
      const ido = await getIDOMulticall(
        IDO_INFO.contractAddress,
        account ? account : ZERO_ADDRESS,
        97
      );
      return ido;
    },
    enabled: true,
    initialData: {},
  });
  return {
    isFetching,
    minAllocation: unitFormatter(data?.minAllocation),
    maxAllocation: unitFormatter(data?.maxAllocation),
    userPurchases: unitFormatter(data?.PURCHASED),
    totalRaised: unitFormatter(data?.TOTAL_RAISED),
    purchaseCap: unitFormatter(data?.purchaseCap),
    raisedPercentage: round(
      (unitFormatter(data?.TOTAL_RAISED) / unitFormatter(data?.purchaseCap)) *
        100,
      2
    ),
    isSaleStarted: data?.isSaleStarted,
    isSaleEnd: data?.isSaleEnd,
    isClaimable: data?.isClaimable,
    hyperMovePrice: String(data?.hyperMovePrice),
  };
};

export const useMultiCall = () => {
  const [totalRaised, setTotalRaised] = React.useState(0);
  const [minAllocation, setMinAllocation] = React.useState(0);
  const [maxAllocation, setMaxAllocation] = React.useState(0);
  const [purchaseCap, setPurchaseCap] = React.useState(0);
  const [userPurchases, setUserPurchases] = React.useState(0);
  const [raisedPercentage, setRaisedPercentage] = React.useState(0);
  const [isSaleStarted, setSaleStarted] = React.useState(false);
  const [isSaleEnd, setSaleEnd] = React.useState(false);
  const [isClaimable, setClaimable] = React.useState(false);
  const [hyperMovePrice, setHyperMovePrice] = React.useState(0);
  const { account } = useWeb3React();

  React.useEffect(() => {
    async function fetchIdoData() {
      const ido = await getIDOMulticall(
        IDO_INFO.contractAddress,
        account ? account : ZERO_ADDRESS,
        97
      );

      console.log({ ido });

      const raisedPercentaged =
        (unitFormatter(ido.TOTAL_RAISED) / unitFormatter(ido.purchaseCap)) *
        100;

      setTotalRaised(unitFormatter(ido.TOTAL_RAISED));
      setMinAllocation(unitFormatter(ido.minAllocation));
      setMaxAllocation(unitFormatter(ido.maxAllocation));
      setPurchaseCap(unitFormatter(ido.purchaseCap));
      setUserPurchases(unitFormatter(ido.PURCHASED));
      setRaisedPercentage(round(raisedPercentaged, 2));
      setSaleStarted(ido.isSaleStarted);
      setSaleEnd(ido.isSaleStarted);
      setClaimable(ido.isClaimable);
      setHyperMovePrice(Number(ido.hyperMovePrice));
    }

    fetchIdoData();
  }, [account]);

  return {
    totalRaised,
    minAllocation,
    maxAllocation,
    purchaseCap,
    userPurchases,
    raisedPercentage,
    isSaleStarted,
    isSaleEnd,
    isClaimable,
    hyperMovePrice,
  };
};
