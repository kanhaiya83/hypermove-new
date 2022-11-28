import React from "react";
// import { MetaMaskProvider } from "metamask-react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import HyperMove from "./HyperMove";
import Web3ReactManager from "./Components/web3ReactManager/index";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import AuthContextProvider from "./context/AuthContext";

import ScoresProvider from "./context/leaderBoard";
import AlertProvider from "./context/alert";

import { BrowserRouter } from "react-router-dom";

function App() {
  const getLibrary = (provider) => {
    return new Web3Provider(provider);
  };
  const queryClient = new QueryClient();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ScoresProvider>
            <AlertProvider>
              <Web3ReactManager />
              <HyperMove />
              {/* </AuthContextProvider> */}
            </AlertProvider>
          </ScoresProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
