import React from "react";
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
                
                <NavMenuLinks href="/play-to-earn" text="Play-to-Earn"/>
                <NavMenuLinks href="/move-to-earn" text="Move-to-Earn"/>
                <NavMenuLinks href="/nft-marketplace" text="NFT Marketplace"/>
                <NavMenuLinks href="/metaverse" text="METAVERSE"/>           



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
          <Nav className="me-auto my-2 my-lg-0">
            
          <NavMenuLinks href="/play-to-earn" text="Play-to-Earn"/>
                <NavMenuLinks href="/move-to-earn" text="Move-to-Earn"/>
                <NavMenuLinks href="/nft-marketplace" text="NFT Marketplace"/>
                <NavMenuLinks href="/metaverse" text="METAVERSE"/>   
          </Nav>
          
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