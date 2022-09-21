import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import './Header.css';
import HyperButton from "./HyperButton";
import NavMenuLinks from "./NavMenuLinks";


const Header = (props) => {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }

    return(

        <Navbar className="main-menu" expand="lg" fixed="top">
       
          <Container>
          <Row className="flex-fill align-items-center d-none d-sm-flex">
          <Col xs={12} md={2} className="text-center">
            <Navbar.Brand className="">
              <Link to="/">
            <Image src="./assets/images/HM_NewLogo.png" fluid className="header-logo "/>
            </Link>
            </Navbar.Brand>
          </Col>
          <Col xs={12} md={10}>
         <div className="d-flex">
         <Nav className="flex-fill justify-content-center" >
         <NavDropdown title="Hypermove Directory" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
           <NavDropdown.Item href="#action/3.1">
           <NavMenuLinks href="/play-to-earn" text="Play-to-Earn"/>
           </NavDropdown.Item>
           <NavDropdown.Item>
           <NavMenuLinks href="/move-to-earn" text="Move-to-Earn"/>
           </NavDropdown.Item>
           <NavDropdown.Item>
           <NavMenuLinks href="/nft-marketplace" text="NFT Marketplace"/>
           </NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item>
           <NavMenuLinks href="/metaverse" text="Metaverse"/>           

           </NavDropdown.Item>
         </NavDropdown>         
           
           
           <NavMenuLinks href="/launchpad" text="Launchpad"/>           
           <NavMenuLinks href="/tournament" text="Tournaments"/>           
           


         </Nav>
              <HyperButton variant="dark" className="purple-btn float-end" text="JOIN COMMUNITY"></HyperButton>
              </div>
            </Col>
            </Row>



            <Row className="d-flex flex-fill d-sm-none text-center justify-content-center mobile-menu">
            <Navbar.Brand href="#home" className="mb-3">
            <Image src="./assets/images/HM_NewLogo.png" fluid className="header-logo "/>
            </Navbar.Brand>
            <Col xs={4} className="text-start">
            <Navbar.Toggle aria-controls="navbarScroll" className="mobile-toggle-btn"/>
        <Navbar.Collapse id="navbarScroll">
              <NavDropdown title="Hypermove Directory" id="basic-nav-dropdown" show={show} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
              <NavDropdown.Item>
              <NavMenuLinks href="/play-to-earn" text="Play-to-Earn"/>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavMenuLinks href="/move-to-earn" text="Move-to-Earn"/>
              </NavDropdown.Item>
              <NavDropdown.Item>
              <NavMenuLinks href="/nft-marketplace" text="NFT Marketplace"/>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <NavMenuLinks href="/metaverse" text="Metaverse"/>           

              </NavDropdown.Item>
            </NavDropdown>         
              
              
              <NavMenuLinks href="#" text="Launchpad" className="py-3"/>           
              <NavMenuLinks href="#" text="Tournaments" className="py-3"/>      
          
        </Navbar.Collapse>
            </Col>
            <Col xs={8}>
            <HyperButton variant="dark" className="purple-btn float-end" text="JOIN COMMUNITY"></HyperButton>
            </Col>
            
            </Row>
          </Container>
      </Navbar>
    );
}

export default Header;