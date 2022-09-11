import React, { useState } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import NFTModal from './NFTModal';
import "./NFTSection.css"
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');
const NFTSection = (props) => {

    const [nftUrl,setNftUrl]= useState("")
    const [showModal,setShowModal]= useState(false)

const nftData=[{
    image:"../assets/images/shoe-thumb/01.png",
    iframeLink:"https://app.vectary.com/p/33UdpimCRuQZuQQL66B21p",
},{
    image:"../assets/images/shoe-thumb/02.png",
    iframeLink:"https://app.vectary.com/p/3wy3jxchbGO4w9CgyBINyS",
},{
    image:"../assets/images/shoe-thumb/03.png",
    iframeLink:"https://app.vectary.com/p/2JU2I6vNFeeVIVvyy1bZAE",
},{
    image:"../assets/images/shoe-thumb/04.png",
    iframeLink:"https://app.vectary.com/p/4JtWSuEonRWuU02LyNNtlr",
},{
    image:"../assets/images/shoe-thumb/05.png",
    iframeLink:"https://app.vectary.com/p/2Ms4zNoKquPRSNNyeubI0l",
},{
    image:"../assets/images/shoe-thumb/06.png",
    iframeLink:"https://app.vectary.com/p/1aElzxjuWZNe1OSFrJDq6J",
},
]
const handleClick=(url)=>{
    console.log(url);
    setNftUrl(url);
    setShowModal(true);
}
    return(
        <>
    <Container>
        <Row className="py-5 nft-section text-center align-items-center">
        <h2 className="nevan section-heading py-2 py-md-3">SNEAKER NFTs</h2>
        <p>Click on the shoe image to access QR code and experience the AR shoe in your live environment</p>
<div className='row row-cols-1 row-cols-md-3 g-5'>
{
    nftData.map((nft,i)=>{

        return <Image src={nft.image} className="img-fluid" onClick={()=>{
            handleClick(nft.iframeLink) 
        }}   key={i} />
    })
}

</div>


        </Row>
    </Container>
    <NFTModal url={nftUrl} showModal={showModal} setShowModal={setShowModal}/>
    </>
    );
}
export default NFTSection;