import React from "react";

import Nav from 'react-bootstrap/Nav';



import './NavMenuLinks.css';


const NavMenuLinks = (props) => {

    return(

          
        <Nav.Item>
              <Nav.Link href={props.href}>{props.text}</Nav.Link>
              </Nav.Item>    
              
           
         
        
    );
}

export default NavMenuLinks;