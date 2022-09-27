import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {
    Routes,
    Route,
  } from "react-router-dom";
import './HyperMove.css';
import PlayToEarn from "./Pages/PlayToEarn";
import HomePage from "./Pages/Home/Home";
import AlertComponent from "./Components/Alert";
import ComingSoon from "./Pages/ComingSoon";
import "./index.scss"
const HyperMove = (props) => {

    return(
       <React.Fragment>
  <AlertComponent/>

<Header/>
<Routes>
<Route path="/" element={<HomePage/>}/>
<Route path="/play-to-earn" element={<PlayToEarn/>}/>
<Route path="/move-to-earn" element={<ComingSoon pageAddress="Move to Earn"/>}/>
<Route path="/nft-marketplace" element={<ComingSoon pageAddress="NFT marketplace"/>}/>
<Route path="/metaverse" element={<ComingSoon pageAddress="Metaverse"/>}/>
<Route path="/launchpad" element={<ComingSoon pageAddress="Launchpad"/>}/>
<Route path="/tournament" element={<ComingSoon pageAddress="Tournament"/>}/>
</Routes>
<Footer/>
</React.Fragment>
    );
}

export default HyperMove;