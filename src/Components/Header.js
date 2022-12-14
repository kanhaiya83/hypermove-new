import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Header.css";
import HyperButton from "./HyperButton";
import NavMenuLinks from "./NavMenuLinks";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connector";

const Header = (props) => {
  const [show, setShow] = useState(false);

  const { active, chainId, activate, account, connector } = useWeb3React();

  console.log({ account, active });

  const tryActivate = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await activate(null);
    } catch (error) {
      console.log(error);
    }
  };
  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  return (
    <>
      <Navbar className="main-menu" expand="lg" fixed="top">
        <Container>
          <Row className="flex-fill align-items-center d-none d-sm-flex">
            <Col xs={12} md={2} className="text-center">
              <Navbar.Brand className="">
                <Link to="/">
                  <Image
                    src="./assets/images/HM_NewLogo.png"
                    fluid
                    className="header-logo "
                  />
                </Link>
              </Navbar.Brand>
            </Col>
            <Col xs={12} md={10}>
              <div className="d-flex">
                <Nav className="flex-fill justify-content-center">
                  <NavDropdown
                    title="Hypermove Directory"
                    id="basic-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <NavMenuLinks href="/play-to-earn" text="Play-to-Earn" />
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavMenuLinks href="/move-to-earn" text="Move-to-Earn" />
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavMenuLinks
                        href="/nft-marketplace"
                        text="NFT Marketplace"
                      />
                    </NavDropdown.Item>
                    {active && (
                      <NavDropdown.Item>
                        <NavMenuLinks href="/profile" text="Profile" />
                      </NavDropdown.Item>
                    )}

                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <NavMenuLinks href="/metaverse" text="Metaverse" />
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavMenuLinks href="/launchpad" text="Launchpad" />
                  <NavMenuLinks href="/tournaments" text="Tournaments" />
                </Nav>
                {/* {isAuthenticated &&  <Link to="/profile"><img className="profile-button" src="./assets/images/profile.svg" alt="" /></Link>} */}

                <HyperButton
                  variant="dark"
                  className="purple-btn float-end"
                  text={
                    active && account
                      ? account?.slice(0, 10) + "..."
                      : "CONNECT WALLET"
                  }
                  onClick={() => {
                    if (active) {
                      return handleLogout();
                    }
                    tryActivate();
                  }}
                ></HyperButton>
              </div>
            </Col>
          </Row>

          <Row className="d-flex flex-fill d-sm-none text-center justify-content-center mobile-menu">
            <Navbar.Brand href="#home" className="mb-3">
              <Image
                src="./assets/images/HM_NewLogo.png"
                fluid
                className="header-logo "
              />
            </Navbar.Brand>
            <Col xs={4} className="text-start">
              <Navbar.Toggle
                aria-controls="navbarScroll"
                className="mobile-toggle-btn"
              />
              <Navbar.Collapse id="navbarScroll">
                <NavDropdown
                  title="Hypermove Directory"
                  id="basic-nav-dropdown"
                  show={show}
                  onMouseEnter={showDropdown}
                  onMouseLeave={hideDropdown}
                >
                  <NavDropdown.Item>
                    <NavMenuLinks href="/play-to-earn" text="Play-to-Earn" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavMenuLinks href="/move-to-earn" text="Move-to-Earn" />
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <NavMenuLinks
                      href="/nft-marketplace"
                      text="NFT Marketplace"
                    />
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <NavMenuLinks href="/metaverse" text="Metaverse" />
                  </NavDropdown.Item>
                </NavDropdown>

                <NavMenuLinks
                  href="/launchpad"
                  text="Launchpad"
                  className="py-3"
                />
                <NavMenuLinks
                  href="/tournaments"
                  text="Tournaments"
                  className="py-3"
                />
              </Navbar.Collapse>
            </Col>
            <Col xs={8}>
              <HyperButton
                variant="dark"
                className="purple-btn float-end"
                text={
                  active && account
                    ? String(account).slice(0, 10) + "..."
                    : "CONNECT WALLET"
                }
                onClick={() => {
                  if (active && account) {
                    return handleLogout();
                  }
                  tryActivate();
                }}
              ></HyperButton>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
