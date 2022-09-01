import { useState } from 'react';
import FlipMove from 'react-flip-move';

const PartnersLogosContainer=({filter})=>{
    const partnersLogos=[
        {
            image:"./assets/images/partners/ACY_FINACE.png",
            tags:["all","nft","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/ANTPAD.png",
            tags:["all","nft","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/ASSURE.png",
            tags:["all","nft","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/BABYSWAP.png",
            tags:["all","nft","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/BITKEEP.png",
            tags:["all","nft","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/BRIGHTPAD.png",
            tags:["all","nft","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/DIVINER_PROTOCOL.png",
            tags:["all","nft","wallet"]
        },
        {
            image:"./assets/images/partners/DONUT_CAPITAL.png",
            tags:["all","infrastructure"]
        },
        {
            image:"./assets/images/partners/ERAX.png",
            tags:["all","infrastructure"]
        },
        {
            image:"./assets/images/partners/FANTOM_LIVE.png",
            tags:["all","incubator"]
        },
        {
            image:"./assets/images/partners/GAME_SPACE.png",
            tags:["all","incubator"]
        },
        {
            image:"./assets/images/partners/MARSPAD.png",
            tags:["all","nft","wallet"]
        },
        {
            image:"./assets/images/partners/METANIA_GAME.png",
            tags:["all","infrastructure"]
        },
        {
            image:"./assets/images/partners/NFT_TRADE.png",
            tags:["all","nft","wallet"]
        },
        {
            image:"./assets/images/partners/PALMARE.png",
            tags:["all","launchpads","infrastructure"]
        },
        {
            image:"./assets/images/partners/PASLMA.png",
            tags:["all","guild","infrastructure"]
        },
        {
            image:"./assets/images/partners/PROPEL.png",
            tags:["all","nft marketplace","infrastructure"]
        },
        {
            image:"./assets/images/partners/SAFUU_CRYPTO.png",
            tags:["all","nft","exchange"]
        },
        {
            image:"./assets/images/partners/VKRO_MEDIA.png",
            tags:["all","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/WARXGAME.png",
            tags:["all","wallet","infrastructure"]
        },
        {
            image:"./assets/images/partners/WINGSTEP.png",
            tags:["all","wallet"]
        },
    ]
    const filteredLogos=partnersLogos.filter(logo=>{
        return logo.tags.includes(filter.toLowerCase())
    })

    return(
        <FlipMove className="logos-container" enterAnimation="fade" leaveAnimation="fade">
            {filteredLogos.map((logo,i)=>{
                return <div className="logo-img"><img src={logo.image}/></div>
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
            text:"Guild",
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
return(<>
<h2 className="nevan section-heading py-2 py-md-3">PARTNERS</h2>
<ul className="partners-filter-btns">
    {filterBtns.map((btn,i)=>{
        return <li><button className="filter-btn" onClick={()=>{setFilter(btn.text)}}> {btn.text}</button></li>
    })}
</ul>
<PartnersLogosContainer filter={filter}/>
</>)
}
export default PartnersSection