import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './HyperMove.css';
import HomePage from "./Pages/Home/Home";
import AlertComponent from "./Components/Alert";
const HyperMove = (props) => {

    return(
       <React.Fragment>
  <AlertComponent/>

<Header/>
<HomePage/>
<Footer/>
</React.Fragment>
    );
}

export default HyperMove;