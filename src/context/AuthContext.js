import Web3 from "web3";
import { useMetaMask } from "metamask-react";
import { createContext, useContext, useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ethers } from "ethers";
const defaultState = { name: "John Doe", bio: "Please Edit your bio" };
const AuthContext = createContext({
  ...defaultState,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUserData: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const { status, connect, chainId, ethereum } = useMetaMask();
  const [account, setAccount] = useState();
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [provider, setProvider] = useState(null);

  console.log({ provider });
  const signAndVerify = async (address) => {
    console.log({ address: address });
    const web3 = new Web3(Web3.givenProvider);
    const response = await fetch(
      process.env.REACT_APP_SERVER_URL + "/message?address=" + address
    );
    const { messageToSign } = await response.json();
    const signature = await web3.eth.personal.sign(messageToSign, address);

    const res = await fetch(
      process.env.REACT_APP_SERVER_URL +
        "/jwt?address=" +
        address +
        "&signature=" +
        signature
    );
    const resData = await res.json();
    if (resData && resData.success) {
      localStorage.setItem("auth-token", resData.authToken);
      setIsWalletConnected(true);

      setProvider();
    }
  };
  const connectMetamask = async () => {
    if (isWalletConnected) return;
    if (status === "connected") {
      setIsWalletConnected(true);
    }
    try {
      const data = await connect();
      setProvider(new ethers.providers.Web3Provider(ethereum));
      setAccount(data[0]);
      signAndVerify(data[0]);
    } catch (e) {
      console.log(e);
    }
  };
  const contextValue = {
    userData,
    isAuthenticated,
    connectMetamask,
    setUserData,
    setIsAuthenticated,
    isWalletConnected,
    setIsWalletConnected,
    ethereum,
    account,
    provider,
    chainId,
  };
  useEffect(() => {
    const authToken = localStorage.getItem("auth-token");
    if (!authToken) return;
    (async () => {
      const res = await fetch(
        process.env.REACT_APP_SERVER_URL + "/user/check",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      const response = await res.json();
      if (response && response.success) {
        // if(response.foundUser.isSteamConnected) setIsSteamConnected(true)
        // if(response.foundUser.isMetamaskConnected) setIsWalletConnected(true)
        // if(response.foundUser.timecreated) settimecreated(response.foundUser.timecreated)

        setUserData(response.user);
        console.log({ user: response.user });
        if (response.user && response.user.isMetamaskConnected) {
          setIsWalletConnected(true);
        }
        if (
          response.user &&
          response.user.isMetamaskConnected &&
          response.user.isSteamConnected
        ) {
          setIsAuthenticated(true);
        }
      }
    })();
  }, []);
  // useEffect(() => {

  //   const authToken = localStorage.getItem("auth-token");
  //   if (!authToken) return setIsVerifying(false);
  //   (async () => {
  //     const res = await fetch(
  //       process.env.REACT_APP_SERVER_URL + "/verifyuser",
  //       { headers: { "auth-token": localStorage.getItem("auth-token") } }
  //     );
  //     if (!res || !res.ok) return setIsVerifying(false);
  //     const response = await res.json();
  //     if (response && response.success) {
  //       updateStates(response)
  //       setIsVerifying(false);
  //     } else {
  //       setIsVerifying(false);
  //     }
  //   })();
  // }, []);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export const RequireAuth = () => {
  let { isAuthenticated } = useAuthContext();
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/play-to-earn" state={{ from: location }} />;
  }

  return <Outlet />;
};

export default AuthContextProvider;
