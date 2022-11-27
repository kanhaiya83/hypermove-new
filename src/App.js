import React from "react";
// import { MetaMaskProvider } from "metamask-react";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import HyperMove from "./HyperMove";
import Web3ReactManager from "./Components/web3ReactManager/index";
// import AuthContextProvider from "./context/AuthContext";

import ScoresProvider from "./context/leaderBoard";
import AlertProvider from "./context/alert";

import { BrowserRouter } from "react-router-dom";

function App() {
  const getLibrary = (provider) => {
    return new Web3Provider(provider);
  };
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <BrowserRouter>
        <ScoresProvider>
          <AlertProvider>
            <Web3ReactManager />
            <HyperMove />
            {/* </AuthContextProvider> */}
          </AlertProvider>
        </ScoresProvider>
      </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
