import React from "react";
import { Container, Row, Col, Image, Form, InputGroup, Button  } from "react-bootstrap";
import { Link } from "react-router-dom";
import HyperButton from "../Components/HyperButton";
import { BsTwitter, BsMedium } from 'react-icons/bs';
import { FaDiscord, FaTelegramPlane, FaRegHeart } from 'react-icons/fa';
import { RiFilePaper2Line, RiUserHeartLine } from "react-icons/ri";
import { IoFitnessOutline, IoGameControllerOutline, IoLogoBitcoin } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";
import './Footer.css';


const Footer = (props) => {

    return(

<Container fluid className="footer mt-5">
    <Container>
        <Row className="g-5">
        <Col xs={"auto"} md={4}>
        <Link to="/">
            <Image src="./assets/images/HM_NewLogo.png" fluid className="header-logo "/>
            </Link>
        </Col>
        <Col xs={"auto"} md={4} className="connect-col">
        <h4>Connect</h4>
            <ul>
                <li>
                    <div>
                    <p>For Business Enquiries</p>
                    <a href="mailto:business@hypermove.io" target={'_blank'}>business@hypermove.io</a>
                    </div>
                </li>
                <li>
                    <div>
                    <p>For Marketing Purpose</p>
                    <a href="mailto:marketing@hypermove.io" target={'_blank'}>marketing@hypermove.io</a>
                    </div>
                </li>
                <li>
                    <div>
                    <p>Support Team</p>
                    <a href="mailto:support@hypermove.io" target={'_blank'}>support@hypermove.io</a>
                    </div>
                </li>
            </ul>
        </Col>
        <Col xs={"auto"} md={4}>
                    <h4>Subscribe to our newsletter and stay tuned for the latest announcemnets</h4>

                    <Form>
                    <Row className="my-3">
                    <Row className="align-items-center">
                    <Col xs="auto">
                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                        Email import ReactDOM from 'react-dom'
                    </Form.Label>
                    <Form.Control
                        className="mb-2"
                        id="inlineFormInput"
                        placeholder="Jane Doe"
                        type="email"
                    />
                    </Col>
                    
                    
                    <Col xs="auto">
                    <Button type="submit" className="mb-2">
                        Submit
                    </Button>
                    </Col>
                </Row>
                    </Row>
                    </Form>
                    <div className="d-sm-flex text-start justify-content-start">
                    <a href="#" target="_blank" className="footer-social-icon">
                    
                    <RiFilePaper2Line className="text-white "/>
                                            
                    </a>
                    <a href="https://twitter.com/hypermove_io" target="_blank" className="footer-social-icon">
                    
                        <BsTwitter className="text-white "/>
                      
                    </a> 
                    <a href="#" target="_blank" className="footer-social-icon">
                    
                        <FaDiscord className="text-white "/>
                       
                    </a> 
                    <a href="https://t.me/Hypermove_io" target="_blank" className="footer-social-icon">
                    
                        <FaTelegramPlane className="text-white "/>
                         
                    </a> 
                    <a href="https://medium.com/@hypermove"  target="_blank" className="footer-social-icon">
                    
                        <BsMedium className="text-white "/>
                        
                    </a>     
                    </div>
        </Col>
        </Row>
    </Container>
</Container>
    );
}

export default Footer;