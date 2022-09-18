import { useEffect, useState } from "react";
import { useMetaMask } from "metamask-react";
import Web3 from "web3"
const PlayToEarn=()=>{
    const { status, connect, account, chainId, ethereum } = useMetaMask();
    const [isSteamConnected,setIsSteamConnected] = useState(false)
    const [timecreated,settimecreated] = useState(false);
    console.log({timecreated})
    let badgeNumber = 0;
    if(timecreated < 1661970600000){
      badgeNumber=3
    }
    else if(timecreated < 1651343400000){
      badgeNumber=2
    }
    else if(timecreated < 1643653800000){
      badgeNumber=1
    }
    
    const handleSteamConnect=async ()=>{
        const address = localStorage.getItem("wallet-address")
        if(!address) return;
        const popupWindow = window.open(
            process.env.REACT_APP_SERVER_URL + "/auth/steam",
            "_blank",
            "width=800, height=600",
          );
          if (window.focus) popupWindow.focus();
        // const checkInterval = setInterval(async()=>{
        //     const res=await fetch(process.env.REACT_APP_SERVER_URL+"/user/check/"+address)
        //     const response = await res.json()
        //     if(response.success && response.isSteamConnected){
        //         clearInterval(checkInterval);
        //         setIsSteamConnected(true)

        //     }
        // },4000)
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
        //   updateStates(resData);
        console.log({resData})
        localStorage.setItem("auth-token", resData.authToken);
        localStorage.setItem("wallet-address", resData.address);
        }
      };
      const connectMetamask = async () => {
        if(status ==="connected"){
          return;
        }
        try {
          const data = await connect();
          signAndVerify(data[0]);
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(()=>{
        const address = localStorage.getItem("wallet-address")
        if(!address)return;
        (async ()=>{
          const res= await fetch(process.env.REACT_APP_SERVER_URL+"/user/check/"+address)
          const response = await res.json();
          if(response && response.success){
            if(response.foundUser.isSteamConnected) setIsSteamConnected(true)
            if(response.foundUser.timecreated) settimecreated(response.foundUser.timecreated)
          }
        })()
      },[])
    useEffect(() => {
        window.addEventListener("message", event => {
          if (event.origin !== process.env.REACT_APP_SERVER_URL) return;
    console.log(event.data.user);
          const { user, ok } = event.data;
          if (ok) {
            fetch(process.env.REACT_APP_SERVER_URL +"/user/"+localStorage.getItem("wallet-address"),{
              method:"POST",
              headers:{"Content-Type":"application/json"},
              body:JSON.stringify(user)
            }).then(d=>d.json()).then(res=>{
              if(res && res.success){
                console.log(res.updatedUser)
                setIsSteamConnected(true)
                settimecreated(res.updatedUser.timecreated)
              }
            })
          }
        });
      }, []);
      let content=<></>
      if (status === "initializing") {content= <button>Synchronising.</button>}

    if (status === "unavailable") {content= <button>Unavailable</button>}

    if (status === "notConnected") {content= <button onClick={connectMetamask}>Connect Metamask</button>}

    if (status === "connecting") {content= <button>Connecting...</button>}

    if (status === "connected") {content= <button onClick={()=>{signAndVerify(account)}}>Metamask Connected</button>}

    return(
        <>
        <div className="container   play-to-earn-container">
        <div className="flex flex-column align-items-center">
          
        {content}
        <button onClick={handleSteamConnect}>{isSteamConnected ? "Steam Connected":"Connect Steam"}</button>
        </div>
        </div>
        {timecreated && <div className="badge-container">
          {badgeNumber}
        </div>}
        </>
    )
}

export default PlayToEarn