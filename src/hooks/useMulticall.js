import React from "react";
import { getIDOMulticall, unitParser } from "../utils";

export const useMultiCall = (account) => {
  const [totalRaised, setTotalRaised] = React.useState(0);
  const [minAllocation, setMinAllocation] = React.useState(0);
  const [maxAllocation, setMaxAllocation] = React.useState(0);
  const [purchaseCap, setPurchaseCap] = React.useState(0);
  const [userPurchases, setUserPurchases] = React.useState(0);
  React.useEffect(() => {
    const fetchIdoData = async () => {
      const ido = await getIDOMulticall(
        "0x9988a784bdaea25ae2bFD5e3FC29D243F8D83b04",
        account,
        97
      );
      setTotalRaised(unitParser(ido.TOTAL_RAISED));
      setMinAllocation(unitParser(ido.minAllocation));
      setMaxAllocation(unitParser(ido.maxAllocation));
      setPurchaseCap(unitParser(ido.purchaseCap));
      setUserPurchases(unitParser(ido.PURCHASED));
    };

    fetchIdoData();
  }, []);

  return {
    totalRaised,
    minAllocation,
    maxAllocation,
    purchaseCap,
    userPurchases,
  };
};
