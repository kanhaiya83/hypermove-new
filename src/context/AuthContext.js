import { createContext, useContext, useState, useEffect } from "react";
import { useMetaMask, useConnectedMetaMask } from "metamask-react";
const defaultState = { name: "John Doe", bio: "Please Edit your bio" };
const AuthContext = createContext({
  ...defaultState,
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  setUserData: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

const AuthContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 
  const contextValue = {
    userData,
    isAuthenticated,
  
    setUserData,
    setIsAuthenticated,
    
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
