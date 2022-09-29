import Web3 from "web3"
import { useMetaMask } from "metamask-react";
import { createContext, useContext, useState, useEffect } from "react";
const defaultState = { name: "John Doe", bio: "Please Edit your bio" };
const AuthContext = createContext({
  ...defaultState,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUserData: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const { status, connect, account, chainId, ethereum } = useMetaMask();

  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isWalletConnected,setIsWalletConnected] = useState(false)
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
    setIsWalletConnected(true)
    }
  };
  const connectMetamask = async () => {
    if(isWalletConnected) return; 
    if(status ==="connected" && isWalletConnected){
      return;
    }
    try {
      const data = await connect();
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
    isWalletConnected,setIsWalletConnected
  };

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

export default AuthContextProvider;
