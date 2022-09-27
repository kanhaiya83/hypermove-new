import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.min.css";
import HyperMove from "./HyperMove";

import ScoresProvider from "./context/leaderBoard";
import AlertProvider from "./context/alert";

import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "metamask-react";
import AuthContextProvider from "./context/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScoresProvider>
        <AlertProvider>
          <MetaMaskProvider>
          <AuthContextProvider>
            <HyperMove />
            </AuthContextProvider>
          </MetaMaskProvider>
        </AlertProvider>
      </ScoresProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
