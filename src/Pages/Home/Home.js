/* eslint-disable react/jsx-no-duplicate-props */
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
// import HyperButton from "../../Components/HyperButton";

// import { BsTwitter, BsMedium } from 'react-icons/bs';
// import { FaDiscord, FaTelegramPlane, FaRegHeart } from 'react-icons/fa';
// import { RiFilePaper2Line, RiUserHeartLine } from "react-icons/ri";
// import { IoFitnessOutline, IoGameControllerOutline, IoLogoBitcoin } from "react-icons/io5";
// import { AiOutlineLike } from "react-icons/ai";

// import CubeWorld from "./../../Components/games/cuberun/components/CubeWorld" 
// import LeaderBoard from "../../Components/LeaderBoard";
// import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow, EffectCards, Autoplay   } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useSearchParams } from "react-router-dom";
// import { GlitchedImage } from 'react-image-glitch';


// import NFTSection from "../../Components/NFTSection";

// import Marquee from "react-fast-marquee";
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
// import TeamSection from "./TeamSection";
import PartnersSection from "./PartnersSection";
// import RoadmapSection from "./RoadmapSection";
// import CuberunGameContainer from "../../Components/CuberunGameContainer";



// import 'https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2FqOTY5NSIsImEiOiJjbDZ5ZHU5OTIwb3JqM2lxbWZ2bTVvcjQ4In0.ZzvBsABWcugX1G8jbTT7sA';
mapboxgl.accessToken = 'pk.eyJ1IjoicGFua2FqOTY5NSIsImEiOiJjbDZ5ZHU5OTIwb3JqM2lxbWZ2bTVvcjQ4In0.ZzvBsABWcugX1G8jbTT7sA';

const HomePage = (props) => {

  const [searchParams] = useSearchParams();
const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(-73.94);
const [lat, setLat] = useState(40.72);
const [zoom, setZoom] = useState(15);
const myImageString = '../assets/images/about.png';
const avatarImageString = '../assets/images/3dTurnAround.png';
// useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//     container: mapContainer.current,
//     // style: 'mapbox://styles/mapbox/streets-v11',
//     style: 'mapbox://styles/pankaj9695/cl7bkf91q001i15nsbznuyrz0?optimize=true',
//     center: [lng, lat],
//     zoom: zoom,
//     minzoom: 3,
//     maxzoom: 15,
//     pitch:80,
//     bearing: 80,
//     scrollZoom: false,
//     });
    
    // });
// useEffect(()=>{
//   const referralCode = searchParams.get("referral_code")
//   console.log({receivedReferralCode:referralCode})
//   if(referralCode){
//     localStorage.setItem("referral-code",referralCode)
//   }

// })



    return(
        <React.Fragment>

<Container>

<div className="py-5 partners-section text-center align-items-center">
<PartnersSection/>
</div>


</Container>
</React.Fragment>
    );
}

export default HomePage;