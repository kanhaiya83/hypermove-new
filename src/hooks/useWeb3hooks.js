import { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { injected } from "../connector";

export const useDisconnect = () => {
  const { connector, deactivate } = useWeb3React();
  return useCallback(() => {
    if (connector instanceof InjectedConnector && window.ethereum.isMetaMask) {
      deactivate();
      return;
    }
    deactivate();
  }, [connector, deactivate]);
};

export function useWeb3EagerConnect() {
  const { activate, active } = useWeb3React();

  const [tried, setTried] = useState(false);

  useEffect(() => {
    async function connectwallet() {
      await activate(injected)
        .then(() => {})
        .catch(() => {
          console.log("error in metamask");
        });
    }
    connectwallet();
  }, []);

  // if the connection worked, wait until we get confirmation of that to flip the flag
  useEffect(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);

  return tried;
}

export function useInactiveListener(suppress = false) {
  const { active, error, activate } = useWeb3React();
  useEffect(() => {
    const { ethereum } = window;
    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        activate(injected);
      };
      // eslint-disable-next-line
      const handleChainChanged = (chainId) => {
        activate(injected);
      };
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          activate(injected);
        }
      };

      ethereum.on("connect", handleConnect);
      ethereum.on("chainChanged", handleChainChanged);
      ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener("connect", handleConnect);
          ethereum.removeListener("chainChanged", handleChainChanged);
          ethereum.removeListener("accountsChanged", handleAccountsChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}
