import React from "react";
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';


import './NavMenuLinks.css';


const NavMenuLinks = (props) => {

    return(

          
        <Nav.Item>
              <Link className="nav-link" to={props.href}>{props.text}</Link>
              </Nav.Item>    
              
           
         
        
    );
}

export default NavMenuLinks;