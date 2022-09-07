import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NFTSection = (props) => {

    return(
    <Container>
        <Row className="py-5 nft-section text-center align-items-center d-none d-md-block">
        <h2 className="nevan section-heading py-2 py-md-3">SNEAKER NFTs</h2>
<div className='row row-cols-3 g-5'>

<Image src='../assets/images/shoe-thumb/01.png' className='img-fsluid' onClick={props.handleShow}/>

<Image src='../assets/images/shoe-thumb/02.png' className='img-fsluid'/>
<Image src='../assets/images/shoe-thumb/03.png' className='img-fluid'/>
<Image src='../assets/images/shoe-thumb/04.png' className='img-fluid'/>
<Image src='../assets/images/shoe-thumb/05.png' className='img-fluid'/>
<Image src='../assets/images/shoe-thumb/06.png' className='img-fluid'/>


</div>


        </Row>
    </Container>
    );
}
export default NFTSection;