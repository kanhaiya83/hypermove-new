import React from "react";
import { IDO_INFO } from "../constants/idoInfo";
import { getIDOMulticall, unitFormatter, ZERO_ADDRESS } from "../utils";
import { round } from "lodash";

export const useMultiCall = (account) => {
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

  React.useEffect(() => {
    async function fetchIdoData() {
      const ido = await getIDOMulticall(
        IDO_INFO.contractAddress,
        account ? account : ZERO_ADDRESS,
        97
      );

      const raisedPercentaged =
        (unitFormatter(ido.TOTAL_RAISED) / unitFormatter(ido.purchaseCap)) *
        100;

      console.log();

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
