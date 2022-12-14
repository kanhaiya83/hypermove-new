import { useCallback, useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import Web3 from "web3"
import { Row } from "react-bootstrap";
import { useAuthContext } from "../../context/AuthContext";
import MintBadgeSection from "./MintBadge";
import MainPage from "./MainPage";
import {  useLocation, useNavigate } from "react-router-dom";
const PlayToEarn=()=>{
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    const [isSteamConnected,setIsSteamConnected] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()
    console.log(location.state)
    const [timecreated,settimecreated] = useState(false);
    const {isAuthenticated,setIsAuthenticated,setUserData,userData,isWalletConnected,setIsWalletConnected} = useAuthContext()
    let badgeNumber = 0;
    if(timecreated > 1640975400){
      badgeNumber=3
    }
    else if(timecreated > 1609439400){
      badgeNumber=2
    }
    else{
      badgeNumber=1
    }
    
    const handleSteamConnect=async ()=>{
      if(isSteamConnected) return ;
      const authToken = localStorage.getItem("auth-token")
      if(!isWalletConnected || !authToken)return alert("First connect Metamask wallet")
        const popupWindow = window.open(
            process.env.REACT_APP_SERVER_URL + "/auth/steam",
            "_blank",
            "width=800, height=600",
          );
          if (window.focus) popupWindow.focus();
    } 
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
    
    useEffect(() => {
      const onMessage = event => {
        if (event.origin !== process.env.REACT_APP_SERVER_URL) return;
        let { user, ok } = event.data;
        const savedReferralCode = localStorage.getItem("referral-code")
        if(savedReferralCode){
          user.enteredReferralCode= savedReferralCode
        }
        console.log({savedReferralCode,user});
        if (ok) {
          fetch(process.env.REACT_APP_SERVER_URL +"/user",{
            method:"POST",
            headers:{"Content-Type":"application/json","auth-token":localStorage.getItem("auth-token")},
            body:JSON.stringify(user)
          }).then(d=>d.json()).then(res=>{
            if(res && res.success){
              const {address,timecreated,avatar}=res.updatedUser
              setIsAuthenticated(true)
              setUserData(res.updatedUser)
              if(location.state && location.state.from){
                navigate(location.state.from)
              }
              // setIsSteamConnected(true)
              // setIsAuthenticated(true)
              // settimecreated(res.updatedUser.timecreated)
            }
          })
        }
      }
        window.addEventListener("message", onMessage);
        return () => {
          window.removeEventListener("message",onMessage);
        }
      }, []);
      let content=<></>
      if (status === "initializing") {content= <button>Synchronising.</button>}

    if (status === "unavailable") {content= <button>Unavailable</button>}

    if (status === "notConnected") {content= <button onClick={connectMetamask}><img src="./assets/images/metamask-icon.svg" alt="" /><span>Connect Metamask</span> </button>}

    if (status === "connecting") {content= <button>Connecting...</button>}

    if (status === "connected" && isWalletConnected) {content= <button onClick={()=>{signAndVerify(account)}}><img src="./assets/images/metamask-icon.svg" alt="" /><span>Metamask Connected</span> </button>}
    if (status === "connected" && !isWalletConnected) {content= <button onClick={connectMetamask}><img src="./assets/images/metamask-icon.svg" alt="" /><span>Connect Metamask</span> </button>}

    const ConnectProfileContent=  <>

    <div className="container play-to-earn-container">
    <Row className="vh-100">
    <div className="flex flex-column align-items-center mt-5">
      
    {content}
    <button onClick={handleSteamConnect}><img src="./assets/images/steam-icon.svg" alt="" />{isSteamConnected ? <span>Steam Connected</span>: <span>Connect Steam</span>}</button>
    </div>
    </Row>
    </div>
    {timecreated && <div className="badge-container">
      <span>{badgeNumber}</span>
      
      </div>
  }
    </>
   
    return(
     <>
      <div className="play-to-earn-page">
     {isAuthenticated ?<MainPage/> : <MintBadgeSection connectMetamask={connectMetamask}  handleSteamConnect={handleSteamConnect} isWalletConnected={isWalletConnected}/>
     }
     </div>
    {
      // isAuthenticated ? ProfilePageContent :ConnectProfileContent
    }
     </>  
    )
}

export default PlayToEarn