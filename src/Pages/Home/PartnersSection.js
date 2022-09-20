import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';

const PartnersLogosContainer=({filter})=>{
    const _partnersLogos=[
        {
            image:"./assets/images/partners/ACY_FINACE.png",
            tags:["all","launchpads"]
        },
        {
            image:"./assets/images/partners/ANTPAD.png",
            tags:["all","launchpads"]
        },
        {
            image:"./assets/images/partners/ASSURE.png",
            tags:["all","nft","wallet"]
        },
        
        {
            image:"./assets/images/partners/BITKEEP.png",
            tags:["all","nft","wallet"]
        },
        {
            image:"./assets/images/partners/BRIGHTPAD.png",
            tags:["all","launchpads"]
        },
        {
            image:"./assets/images/partners/DIVINER_PROTOCOL.png",
            tags:["all","launchpads","incubator"]
        },
        {
            image:"./assets/images/partners/DONUT_CAPITAL.png",
            tags:["all","infrastructure","Venture"]
        },
        {
            image:"./assets/images/partners/ERAX.png",
            tags:["all","launchpads"]
        },
        {
            image:"./assets/images/partners/FANTOM_LIVE.png",
            tags:["all","incubator","launchpads"]
        },
        {
            image:"./assets/images/partners/GAME_SPACE.png",
            tags:["all","defi","gaming metaverse","nft"]
        },
        {
            image:"./assets/images/partners/MARSPAD.png",
            tags:["all","incubator","launchpads"]
        },
        {
            image:"./assets/images/partners/METANIA_GAME.png",
            tags:["all","gaming metaverse","nft"]
        },
        {
            image:"./assets/images/partners/NFT_TRADE.png",
            tags:["all","nft","nft marketplace"]
        },
        {
            image:"./assets/images/partners/PALMARE.png",
            tags:["all","gaming metaverse"]
        },
        {
            image:"./assets/images/partners/PASLMA.png",
            tags:["all","incubator","infrastructure","Venture"]
        },
        {
            image:"./assets/images/partners/PROPEL.png",
            tags:["all"]
        },
        {
            image:"./assets/images/partners/SAFUU_CRYPTO.png",
            tags:["all","incubator","Venture"]
        },
       
        {
            image:"./assets/images/partners/WARXGAME.png",
            tags:["all","gaming metaverse"]
        },
       
    ]
    useEffect(()=>{
        (async()=>{
            const res= await fetch(process.env.REACT_APP_SERVER_URL+"/admin/partners")
            const response =await  res.json()
        console.log({response});
            if(response && response.success){
                const temp = response.partnersList.map(p=>{
                    return {...p,tags:p.tags.split(",")}
                })
                console.log({temp});
                setPartnersLogos(temp)
            }
        })()
    },[])
    const [partnersLogos,setPartnersLogos]=useState([])
    const filteredLogos=partnersLogos.filter(logo=>{
        return logo.tags.includes(filter.toLowerCase())
    })
console.log({filteredLogos})
    return(
        <FlipMove  className="logos-container" enterAnimation="fade" leaveAnimation="fade">
            {filteredLogos.map((logo,i)=>{
                return <div key={logo.i} className="logo-img"><img src={logo.image}/></div>
            })}
        </FlipMove>
    )
}

const PartnersSection= ()=>{

    const [filter,setFilter]=useState("all")
    const filterBtns=[
        {
            text:"All",
        },
        {
            text:"Infrastructure",
        },
        {
            text:"Incubator",
        },
        {
            text:"Defi",
        },
        {
            text:"Launchpads",
        },
        {
            text:"NFT",
        },
        {
            text:"Venture",
        },
        {
            text:"NFT Marketplace",
        },
        {
            text:"Gaming Metaverse",
        },
        {
            text:"Exchange",
        },
        {
            text:"Wallet",
        },
    ]
return(<React.Fragment>
<h2 className="nevan section-heading py-2 py-md-3">PARTNERS</h2>
<ul className="partners-filter-btns">
    {filterBtns.map((btn,i)=>{
        return <li key={btn.text}><button className="filter-btn" onClick={()=>{setFilter(btn.text)}}> {btn.text}</button></li>
    })}
</ul>
<PartnersLogosContainer filter={filter}/>
</React.Fragment>)
}
export default PartnersSection