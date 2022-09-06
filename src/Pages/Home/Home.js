/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import HyperButton from "../../Components/HyperButton";
import { BsTwitter, BsMedium } from 'react-icons/bs';
import { FaDiscord, FaTelegramPlane, FaRegHeart } from 'react-icons/fa';
import { RiFilePaper2Line, RiUserHeartLine } from "react-icons/ri";
import { IoFitnessOutline, IoGameControllerOutline, IoLogoBitcoin } from "react-icons/io5";
import { AiOutlineLike } from "react-icons/ai";

import CubeWorld from "./../../Components/games/cuberun/components/CubeWorld" 
import LeaderBoard from "../../Components/LeaderBoard";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectCards, Autoplay   } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';


import 'swiper/css';
import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/autoplay';
  import 'swiper/css/effect-coverflow';
  import 'swiper/css/effect-cards';
  import 'mapbox-gl/dist/mapbox-gl.css';
import './Home.css';
import TeamSection from "./TeamSection";
import PartnersSection from "./PartnersSection";
import RoadmapSection from "./RoadmapSection";
import CuberunGameContainer from "../../Components/CuberunGameContainer";



// import 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2FqOTY5NSIsImEiOiJjbDZ5ZHU5OTIwb3JqM2lxbWZ2bTVvcjQ4In0.ZzvBsABWcugX1G8jbTT7sA';
mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2FqOTY5NSIsImEiOiJjbDZ5ZHU5OTIwb3JqM2lxbWZ2bTVvcjQ4In0.ZzvBsABWcugX1G8jbTT7sA';

const HomePage = (props) => {

    
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-73.94);
const [lat, setLat] = useState(40.72);
const [zoom, setZoom] = useState(15);

useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    // style: 'mapbox://styles/mapbox/streets-v11',
    style: 'mapbox://styles/pankaj9695/cl7bkf91q001i15nsbznuyrz0?optimize=true',
    center: [lng, lat],
    zoom: zoom,
    minzoom: 3,
    maxzoom: 15,
    pitch:80,
    bearing: 80,
    scrollZoom: false,
    });
    
    });





    return(
        <React.Fragment>
  <Container fluid className="home-content">
  <Row className="hero-section text-center align-items-center">
  <div>
  <h1>BLOCKCHAIN's FINEST GAMING PLATFORM!</h1>
  <h3>Onboard HyperMove, Convert your daily activities into real-world cash and Maintain a healthier life-style.</h3>
  <div className="d-grid d-sm-flex p-3 mt-5 gap-3 text-center justify-content-center">
  <Link to="/move-to-earn"><HyperButton href="/move-to-earn" variant="dark" className="purple-btn nevan" text="MOVE TO EARN"></HyperButton></Link>
  <Link to="/move-to-earn"><HyperButton href="/play-to-earn" variant="dark" className="purple-btn nevan" text="PLAY TO EARN"></HyperButton></Link>
  <Link to="/move-to-earn"><HyperButton href="/metaverse" variant="dark" className="purple-btn nevan" text="METAVERSE"></HyperButton></Link>
  </div>

  <div className="d-sm-flex p-3 gap-2 text-center justify-content-center">
  <HyperButton href="https://hypermoveio.gitbook.io/welcome-to-gitbook-1" target="_blank" variant="dark" className="dark-btn me-2 mb-2 m-md-0" text="Whitepaper" icon={<RiFilePaper2Line/>}></HyperButton>
  <HyperButton href="https://twitter.com/hypermove_io" target="_blank" variant="dark" className="dark-btn mb-2 m-md-0" text="Twitter" icon={<BsTwitter/>}></HyperButton>
  <HyperButton variant="dark" className="dark-btn me-2 mb-2 m-md-0" text="Discord" icon={<FaDiscord/>}></HyperButton>
  <HyperButton href="https://t.me/Hypermove_io" target="_blank" variant="dark" className="dark-btn mb-2 m-md-0" text="Telegram" icon={<FaTelegramPlane/>}></HyperButton>
  <HyperButton href="https://medium.com/@hypermove" target="_blank" variant="dark" className="dark-btn" text="Medium" icon={<BsMedium/>}></HyperButton>
  </div>

  </div>
  </Row>

  <Row className="marquee-content py-5">
  <Marquee className='brand-marquee nevan marquee-0' speed={300} gradient={false}>
      <div className='me-5'><span className='purple-text'>MOVE </span> TO EARN</div>
      <div className='me-5'><span className='purple-text'>PLAY </span> TO EARN</div>
      <div className='me-5'><span className='purple-text'>NFT </span> MARKETPLACE</div>
      <div className='me-5'><span className='purple-text'>META</span>VERSE</div>
  </Marquee>
  <Marquee className='brand-marquee nevan marquee-1' speed={200} gradient={false}>
      <div className='me-5'><span className='purple-text'>MOVE </span> TO EARN</div>
      <div className='me-5'><span className='purple-text'>PLAY </span> TO EARN</div>
      <div className='me-5'><span className='purple-text'>NFT </span> MARKETPLACE</div>
      <div className='me-5'><span className='purple-text'>META</span>VERSE</div>
  </Marquee>

    <Marquee className='brand-marquee nevan marquee-2' speed={400} gradient={false}>
      <div className='me-5'><span className='purple-text'>MOVE </span> TO EARN</div>
      <div className='me-5'><span className='purple-text'>PLAY </span> TO EARN</div>
      <div className='me-5'><span className='purple-text'>NFT </span> MARKETPLACE</div>
      <div className='me-5'><span className='purple-text'>META</span>VERSE</div>
    </Marquee>
  </Row>
  </Container>

<Container>

<Row className="game-section py-5 text-center g-5">
    <Col xs={12} md={4}>
    <HyperButton variant="dark" className="dark-btn nevan mb-5" text="TRACK YOUR MOVES"/>
    <div ref={mapContainer} className="map-container rounded-3" />
    </Col>

    <Col xs={12} md={4}>
    <HyperButton variant="dark" className="dark-btn nevan mb-5" text="SCORE & WIN"/>
   

   <CuberunGameContainer/>
    </Col>


    <Col xs={12} md={4}>
    <HyperButton variant="dark" className="dark-btn nevan mb-5" text="LEADERBOARD"/>
        <LeaderBoard/>
    </Col>

</Row>

<Row className="create-avatar-section py-5 align-items-center">
<Col xs={12} md={6}>
<h2 className="nevan section-heading py-2 py-md-3">INTO THE METAVERSE</h2>
<p>HyperMove acts a bridge that connects gamers/users to the vastness of the metaverse virtually via its app.</p>
<p>Users would have the privilege to explore the blockchain's core via the HyperMove app that provides you with several opportunities to earn passive income as you maintain a healthier lifestyle.
.</p>
<div className="row row-cols-2">
<Image src="../assets/images/app-store.png"  className="app-store apple"/>
<Image src="../assets/images/google-play-badge.png"  className="app-store google"/>

</div>

</Col>
<Col  className="text-center mobile-screen p-3">
<video playsinline autoplay="autoplay" muted="muted" loop="loop" className="mobile-video">
  
  <source src="../assets/movs/app2.webm" type="video/webm"/>
  <source src="../assets/movs/app2.mp4" type="video/mp4"/>
  Your browser does not support the video tag.
</video>
<Image src="../assets/images/hero-bg.png" fluid className="hero-bg"/>
</Col>
</Row>


<Row className="create-avatar-section py-5 align-items-center">

<Col  className="text-center mobile-screen">
<Image src="../assets/images/3dTurnAround.png" fluid className="app-scree"/>
<Image src="../assets/images/hero-bg.png" fluid className="hero-bg"/>
</Col>

<Col xs={12} md={6}>
<h2 className="nevan section-heading py-2 py-md-3">Create your avatar with one tap</h2>
<p>HyperMove App is equipped with an hassle-free method to create and own an Avatar. Easy as it sounds, Create mesmerising avatars that best represents you with just a tap.</p>
<HyperButton variant="dark" className="purple-btn nevan mb-5" text="CREATE AVATAR" href="https://hypermove.readyplayer.me/avatar" target="_blank"/>
</Col>
</Row>


<Row className="move-play-section py-5 align-items-center">



<Col xs={12} md={6} className="text-justify">
<h2 className="nevan section-heading py-2 py-md-3">MOVE . PLAY . EARN</h2>
<p>HyperMove is the world's first blockchain M2E & P2E integrated app, that allows users to maintain a healthy & fit lifestyle and earn in a decentralized environment.</p>

<p>HyperMove app provides you a sea of opportunities to convert your daily activities into real world cash as well as earn by playing blockchain powered games.</p>

<p>Users would have the privilege to earn cryptocurrencies by carrying out their daily activities (Walking, running, swimming etc.) and by playing games online.</p>

</Col>

<Col  className="text-center mobile-screen">
<Image src="../assets/images/about.png" fluid className="app-scree w-75"/>
<Image src="../assets/images/hero-bg.png" fluid className="hero-bg"/>
</Col>
</Row>



<Row className="aim-section py-5 align-items-center text-center">
        <h2 className="nevan section-heading py-2 py-md-3">OUR AIM</h2>
        <Col xs={12} md={4}  className="text-center py-3 py-ms-5">
        <IoFitnessOutline size={120} className="purple-text glow-purple"/>
        <h2 className="py-3">Healthy Lifestyle</h2>
        <p>We encourage users to adopt to healthier lifestyle with our app</p>

        </Col>

        <Col xs={12} md={4}  className="text-center py-3 py-ms-5">
        <IoGameControllerOutline size={120} className="purple-text glow-purple"/>
        <h2 className="py-3">True Blockchain Gaming</h2>
        <p>Experience M2E & P2E at its purest form in a decentralized environment</p>

        </Col>

        <Col xs={12} md={4}  className="text-center py-3 py-ms-5">
        <IoLogoBitcoin size={120} className="purple-text glow-purple"/>
        <h2 className="py-3">Passive Rewards        </h2>
        <p>Earn cryptocurrencies as passive rewards from your activities</p>

</Col>

</Row>


<Row className="hyperapp-slider py-5 text-center">
<h2 className="nevan section-heading py-2 py-md-3">HYPERMOVE APP</h2>
<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, Autoplay  ]}
    spaceBetween={250}
    centeredSlides={true}
    slidesPerView={2}
    breakpoints={{
        320: {
        spaceBetween:30,
        slidesPerView: 2
        },
        480:{
            spaceBetween:20,
            slidesPerView: 1 
        },
        640:{
            spaceBetween:210,
            slidesPerView: 3
        },

}}
    speed={400}
    loop={true}
    grabCursor={true}
    touchRatio={1.5}    
    navigation={true}    
    effect={"coverflow"}
    coverflowEffect={{
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }}
    autoplay={
        {
            delay: 1000,
        }
    }
      
    className="hyperSwiper"
  >
  <SwiperSlide><Image src='./assets/images/app-screens/app1.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app2.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app3.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app4.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app5.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app6.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app7.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app8.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app9.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app10.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app11.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app12.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app13.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app14.png' className='img-fluid'/></SwiperSlide>
    <SwiperSlide><Image src='./assets/images/app-screens/app15.png' className='img-fluid'/></SwiperSlide>
    
  </Swiper>
</Row>


<Row className="hypergame-bg">
<div class="slides-wrapper text-center">
<div className="slides-container">
<h2 className="nevan section-heading py-2 py-md-3">HYPER GAMES</h2>
<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay  ]}
    spaceBetween={250}
    centeredSlides={true}
    slidesPerView={2}
    breakpoints={{
        320: {
        spaceBetween:10,
        slidesPerView: 1
        },
        480:{
            spaceBetween:20,
            slidesPerView: 1 
        },
        640:{
            spaceBetween:20,
            slidesPerView: 6
        },

}}
    speed={400}
    loop={true}
    grabCursor={true}
    touchRatio={1.5}    
    navigation={true}    
    
    autoplay={true}
      
    className="hyperSwiper"
  >
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/games/game01.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Candy Match</Card.Title>
        <HyperButton className="like-btn" icon={<FaRegHeart />}/>
        </div>
        <div className="d-flex align-items-center justify-content-between py-2">
        <span>Coming Soon...</span>
        
        </div>
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
  <Card className="p-1 p-md-2 game-card text-white text-start">
      <Card.Img variant="top" src="./assets/images/games/game02.png" />
      <Card.Body className="p-2">
      <div className="d-flex align-items-center justify-content-between">
      <Card.Title className="me-2 game-title">Candy jam</Card.Title>
      <HyperButton className="like-btn" icon={<FaRegHeart />}/>
      </div>
      <div className="d-flex align-items-center justify-content-between py-2">
      <span>Coming Soon...</span>
      </div>
      </Card.Body>
  </Card>  
</SwiperSlide>
<SwiperSlide>
<Card className="p-1 p-md-2 game-card text-white text-start">
    <Card.Img variant="top" src="./assets/images/games/game03.png" />
    <Card.Body className="p-2">
    <div className="d-flex align-items-center justify-content-between">
    <Card.Title className="me-2 game-title">Bubble Invasion</Card.Title>
    <HyperButton className="like-btn" icon={<FaRegHeart />}/>
    </div>
    <div className="d-flex align-items-center justify-content-between py-2">
    <span>Coming Soon...</span>
    </div>
    </Card.Body>
</Card>  
</SwiperSlide>
<SwiperSlide>
<Card className="p-1 p-md-2 game-card text-white text-start">
    <Card.Img variant="top" src="./assets/images/games/game04.png" />
    <Card.Body className="p-2">
    <div className="d-flex align-items-center justify-content-between">
    <Card.Title className="me-2 game-title">9 Ball Pool</Card.Title>
    <HyperButton className="like-btn" icon={<FaRegHeart />}/>
    </div>
    <div className="d-flex align-items-center justify-content-between py-2">
    <span>Coming Soon...</span>
    </div>
    </Card.Body>
</Card>  
</SwiperSlide>
<SwiperSlide>
<Card className="p-1 p-md-2 game-card text-white text-start">
    <Card.Img variant="top" src="./assets/images/games/game05.png" />
    <Card.Body className="p-2">
    <div className="d-flex align-items-center justify-content-between">
    <Card.Title className="me-2 game-title">Fruit Connect</Card.Title>
    <HyperButton className="like-btn" icon={<FaRegHeart />}/>
    </div>
    <div className="d-flex align-items-center justify-content-between py-2">
    <span>Coming Soon...</span>
    </div>
    </Card.Body>
</Card>  
</SwiperSlide>
<SwiperSlide>
<Card className="p-1 p-md-2 game-card text-white text-start">
    <Card.Img variant="top" src="./assets/images/games/game06.png" />
    <Card.Body className="p-2">
    <div className="d-flex align-items-center justify-content-between">
    <Card.Title className="me-2 game-title">Arithmetic Game</Card.Title>
    <HyperButton className="like-btn" icon={<FaRegHeart />}/>
    </div>
    <div className="d-flex align-items-center justify-content-between py-2">
    <span>Coming Soon...</span>
    </div>
    </Card.Body>
</Card>  
</SwiperSlide>
 
    
  </Swiper>
</div>

</div>
</Row>


<Row className="py-5 nft-section text-center align-items-center">
<h2 className="nevan section-heading py-2 py-md-3">SNEAKER NFTs</h2>

<Col xs={12} md={6}>
<div className="row row-cols-1 row-cols-md-2 ">
<div>
<iframe id="shoe01" src="https://app.vectary.com/p/1aElzxjuWZNe1OSFrJDq6J" frameborder="0" width="100%" height="480"></iframe>

</div>
<div>


<iframe id="shoe02" src="https://app.vectary.com/p/33UdpimCRuQZuQQL66B21p" frameborder="0" width="100%" height="480"></iframe>
</div>
<div>


<iframe id="shoe03" src="https://app.vectary.com/p/3wy3jxchbGO4w9CgyBINyS" frameborder="0" width="100%" height="480"></iframe>
</div>
<div>


<iframe id="shoe04" src="https://app.vectary.com/p/2Ms4zNoKquPRSNNyeubI0l" frameborder="0" width="100%" height="480"></iframe>
</div>


</div>
</Col>
<Col xs={12} md={6}>
<iframe id="shoe06" src="https://app.vectary.com/p/18pwIIThM3oVhy69sULlY1" frameborder="0" width="100%" height="480"></iframe>
</Col>
</Row>



</Container>
<Container fluid>
<Row className="latest-nft text-center py-5">

<h2 className="nevan section-heading py-2 py-md-5">LATEST NFTs</h2>
<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards, Autoplay  ]}
    spaceBetween={250}
    centeredSlides={true}
    slidesPerView={2}
    breakpoints={{
        320: {
        spaceBetween:10,
        slidesPerView: 1
        },
        480:{
            spaceBetween:20,
            slidesPerView: 1 
        },
        640:{
            spaceBetween:20,
            slidesPerView: 6
        },

}}
    speed={400}
    loop={true}
    grabCursor={true}
    touchRatio={1.5}    
    navigation={true}    
    
    autoplay={true}
      
    className="hyperSwiper"
  >
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/1.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Walker</Card.Title>
        <HyperButton className="like-btn" text="1-8 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/2.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Walker</Card.Title>
        <HyperButton className="like-btn" text="1-8 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/3.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Jogger</Card.Title>
        <HyperButton className="like-btn" text="8-12 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/4.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Jogger</Card.Title>
        <HyperButton className="like-btn" text="8-12 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/5.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Sprinter</Card.Title>
        <HyperButton className="like-btn" text="12-20 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/6.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Sprinter</Card.Title>
        <HyperButton className="like-btn" text="12-20 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/7.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Trainer</Card.Title>
        <HyperButton className="like-btn" text="1-20 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  <SwiperSlide>
    <Card className="p-1 p-md-2 game-card text-white text-start">
        <Card.Img variant="top" src="./assets/images/rangers/8.png" />
        <Card.Body className="p-2">
        <div className="d-flex align-items-center justify-content-between">
        <Card.Title className="me-2 game-title">Trainer</Card.Title>
        <HyperButton className="like-btn" text="1-20 Km/Hr"/>
        </div>
        
        </Card.Body>
    </Card>  
  </SwiperSlide>
  



 
    
  </Swiper>

</Row>
</Container>



<Container>
<Row className="py-5 team-section text-center align-items-center">
<TeamSection/>

</Row>

</Container>

<div className="py-5 roadmap-section text-center align-items-center overflow-hidden position-relative">
<RoadmapSection/>

</div>
<Container>

<Row className="py-5 partners-section text-center align-items-center">
<PartnersSection/>
</Row>


</Container>
</React.Fragment>
    );
}

export default HomePage;