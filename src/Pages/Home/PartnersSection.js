import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';

const PartnersLogosContainer=({filter})=>{
    // useEffect(()=>{
    //     (async()=>{
    //         const res= await fetch(process.env.REACT_APP_SERVER_URL+"/admin/partners")
    //         const response =await  res.json()
    //     console.log({response});
    //         if(response && response.success){
    //             const temp = response.partnersList.map(p=>{
    //                 return {...p,tags:p.tags.split(",")}
    //             })
    //             console.log({temp});
    //             setPartnersLogos(temp)
    //         }
    //     })()
    // },[])
    
      
    const [partnersLogos,setPartnersLogos]=useState( [
        {
          _id: "6331ef19705391cdf8792ebd",
          name: "Hidden gem",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664216856/27405.png",
          tags: "all, infrastructure, venture, gaming metaverse,",
          __v: 0,
          twitter: "https://twitter.com/HiddenGemss_",
          website: "https://www.hiddengemscapitals.com/"
        },
        {
          _id: "6331f56c705391cdf8792f15",
          name: "GameSpace",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664218476/11263.png",
          tags: "all,infrastructure,gaming metaverse,defi,nft",
          __v: 0,
          twitter: "https://twitter.com/Gamespace_NFTs",
          website: "https://game.space/en-us"
        },
        {
          _id: "6331f5c3705391cdf8792f1a",
          name: "Ab ventures",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664218563/27629.png",
          tags: "all,venture,incubator",
          __v: 0,
          twitter: "https://twitter.com/1ABVentures",
          website: "https://abventures.net/"
        },
        {
          _id: "6331f627705391cdf8792f26",
          name: "Abeats game",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664218663/22190.png",
          tags: "all,gaming metaverse,nft",
          __v: 0,
          twitter: "https://twitter.com/AbeatsGame",
          website: "https://www.abeats.com/home"
        },
        {
          _id: "6331f698705391cdf8792f2b",
          name: "Bitkeep",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664218775/45736.png",
          tags: "all,gaming metaverse,nft,nft marketplace,wallet,defi,launchpad",
          __v: 0,
          twitter: "https://twitter.com/BitKeepOS",
          website: "https://bitkeep.com/"
        },
        {
          _id: "6331f762705391cdf8792f32",
          name: "safu crypto",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664218977/71931.png",
          tags: "all,defi,venture",
          __v: 0,
          twitter: "https://twitter.com/Safuu__crypto",
          website: "https://safuucrypto.com/"
        },
        {
          _id: "6331f8fc705391cdf8792f3e",
          name: "Nftrade",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664219387/75451.png",
          tags: "all,defi,nft,nft marketplace",
          __v: 0,
          twitter: "https://twitter.com/NFTradeOfficial",
          website: "https://nftrade.com/"
        },
        {
          _id: "6331f9a6705391cdf8792f48",
          name: "Assure",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664219557/83281.png",
          tags: "all,infrastructure,defi,wallet",
          __v: 0,
          twitter: "https://twitter.com/Assure_pro",
          website: "https://www.assure.pro/#/"
        },
        {
          _id: "6331f9fa705391cdf8792f4d",
          name: "diviner protocol",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664219641/53278.png",
          tags: "all,nft,launchpad",
          __v: 0,
          twitter: "https://twitter.com/DivinerProtocol",
          website: "https://app.diviner.finance/"
        },
        {
          _id: "6331fac0705391cdf8792f52",
          name: "propel",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664219840/70577.png",
          tags: "all,nft,defi,gaming metaverse",
          __v: 0,
          twitter: "https://twitter.com/propelxyz",
          website: "https://propel.xyz/"
        },
        {
          _id: "6331fb15705391cdf8792f57",
          name: "erax",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664219925/76773.png",
          tags: "all,nft,defi,launchpad",
          __v: 0,
          twitter: "https://twitter.com/ERAXNFT",
          website: "https://www.erax.io/#/"
        },
        {
          _id: "6331fbfb705391cdf8792f6a",
          name: "anypad",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664220155/55592.png",
          tags: "all,nft,defi,launchpad",
          __v: 0,
          twitter: "https://twitter.com/AnyPadio",
          website: "https://www.anypad.io/"
        },
        {
          _id: "6331fcf0705391cdf8792f76",
          name: "Galaxy Arena",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664220400/76659.png",
          tags: "all,infrastructure,gaming metaverse,nft",
          __v: 0,
          twitter: "https://twitter.com/galaxyarena_io",
          website: "https://galaxyarena.io/"
        },
        {
          _id: "63320198705391cdf8792f82",
          name: "passion games guild",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664221592/96143.png",
          tags: "all,infrastructure,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/PassionGuild_io",
          website: "https://coinpassion.io/"
        },
        {
          _id: "63320228705391cdf8792f89",
          name: "palmare",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664221735/65068.png",
          tags: "all,defi",
          __v: 0,
          twitter: "https://twitter.com/PalmareOfficial",
          website: "https://palmare.io/"
        },
        {
          _id: "6332029d705391cdf8792f8e",
          name: "uniti capital",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664221853/81731.png",
          tags: "all,venture",
          __v: 0,
          twitter: "https://twitter.com/Unitycapital_Vc",
          website: "https://twitter.com/Unitycapital_Vc"
        },
        {
          _id: "63320440705391cdf8792fa4",
          name: "donut capital",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664222271/33047.png",
          tags: "all,infrastructure,venture",
          __v: 0,
          twitter: "https://twitter.com/donuts_capital",
          website: "http://www.donutscapital.com/"
        },
        {
          _id: "633204b5705391cdf8792fa9",
          name: "Acy finance",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664222389/35153.png",
          tags: "all,launchpads",
          __v: 0
        },
        {
          _id: "6332057f705391cdf8792fae",
          name: "fomo",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664222591/44076.png",
          tags: "all,defi",
          __v: 0,
          twitter: "https://twitter.com/Fomo__in",
          website: "https://fomoin.finance/#/"
        },
        {
          _id: "633205f4705391cdf8792fb3",
          name: "metania games",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664222708/77889.png",
          tags: "all,defi,gaming metaverse",
          __v: 0,
          twitter: "https://twitter.com/MetaniaGames",
          website: "https://www.metania.games/"
        },
        {
          _id: "633206c8705391cdf8792fbd",
          name: "kenzo venture",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664222919/96796.png",
          tags: "all,venture",
          __v: 0,
          twitter: "https://twitter.com/Kenzo_Ventures",
          website: "https://twitter.com/Kenzo_Ventures"
        },
        {
          _id: "63322075705391cdf8792fd6",
          name: "ready player me",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664229492/12244.png",
          tags: "all,infrastructure,gaming metaverse",
          __v: 0,
          twitter: "https://twitter.com/readyplayerme",
          website: "https://readyplayer.me/"
        },
        {
          _id: "63385315af0273088eec8579",
          name: "GetSetPlay",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664635669/32399.png",
          tags: "all,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/getsetplay_io",
          website: "https://www.getsetplay.io/"
        },
        {
          _id: "63385346af0273088eec857e",
          name: "primal",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664635718/67387.png",
          tags: "all,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/enterprimal",
          website: "https://www.getprimal.com/"
        },
        {
          _id: "633c714696164251757fbea2",
          name: "Comearth",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664905542/83319.png",
          tags: "all,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/ComearthHQ",
          website: "https://www.comearth.world/"
        },
        {
          _id: "633c726596164251757fbea8",
          name: "fabwelt",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664905829/89313.png",
          tags: "all,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/FabweltToken",
          website: "https://www.fabwelt.com/"
        },
        {
          _id: "633d847f518bab14cb3fd488",
          name: "zoagames",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1664975998/73775.png",
          tags: "all,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/zoagame_",
          website: "https://zoa.game/"
        },
        {
          _id: "6342f1c112191652f3520f64",
          name: "Playzap",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1665331648/38070.png",
          tags: "all,gaming metaverse,defi",
          __v: 0,
          twitter: "https://twitter.com/PlayZapGames",
          website: "https://www.playzap.games/"
        },
        {
          _id: "6357c7fc803c44866d08fae6",
          name: "DareNFt",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1666697212/35363.png",
          tags: "all,gaming metaverse,defi,marketplace",
          twitter: "https://twitter.com/darenft",
          website: "https://dareplay.io/",
          __v: 0
        },
        {
          _id: "6358336922ddd4a542877db1",
          name: "Binstarter",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1666724713/66306.png",
          tags: "all,gaming metaverse,defi,launchpad",
          twitter: "https://twitter.com/BinStarterio",
          website: "https://binstarter.io/",
          __v: 0
        },
        {
          _id: "6359878d909c4cbd2ce480d9",
          name: "Farcana",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1666811788/13640.png",
          tags: "all,gaming metaverse,defi",
          twitter: "https://twitter.com/FarcanaOfficial",
          website: "https://farcana.com/",
          __v: 0
        },
        {
          _id: "635ab2e644c36fdd16426617",
          name: "Despace",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1666888422/22740.webp",
          tags: "all,gaming metaverse,defi",
          twitter: "https://twitter.com/DeSpaceDefi",
          website: "https://despace.io/",
          __v: 0
        },
        {
          _id: "635ab49544c36fdd1642662c",
          name: "Bot Planet",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1666888852/57235.png",
          tags: "all,gaming metaverse,defi,wallet",
          twitter: "https://twitter.com/BotPlanet_",
          website: "https://www.botpla.net/",
          __v: 0
        },
        {
          _id: "636240b4718b80788a169984",
          name: "8 finance",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1667383476/3683.png",
          tags: "all,gaming metaverse,defi",
          twitter: "https://twitter.com/the8finance",
          website: "https://8.finance/",
          __v: 0
        },
        {
          _id: "636241ca718b80788a16998a",
          name: "leagueofhamster",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1667383754/29882.png",
          tags: "all,gaming metaverse,defi",
          twitter: "https://twitter.com/leagueofhamster",
          website: "https://leagueofhamsters.games/",
          __v: 0
        },
        {
          _id: "6362431f718b80788a169990",
          name: "Cheelee",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1667384095/89165.png",
          tags: "all,gaming metaverse,defi,marketplace",
          twitter: "https://twitter.com/Cheelee_Tweet",
          website: "https://cheelee.io/",
          __v: 0
        },
        {
          _id: "6369054d89aacee986765bc9",
          name: "Chainplay",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1667827021/60056.png",
          tags: "all,gaming metaverse,defi,marketplace,infrastruture",
          twitter: "https://twitter.com/Chainplaygg",
          website: "https://chainplay.gg/",
          __v: 0
        },
        {
          _id: "636cc00f294e766350193b94",
          name: "Fam central",
          image: "http://res.cloudinary.com/dbgfrdoan/image/upload/v1668071439/5156.png",
          tags: "all,gaming metaverse,defi,marketplace",
          twitter: "https://twitter.com/fam_central",
          website: "https://famcentral.finance/",
          __v: 0
        }
      ]
    )
    const filteredLogos=partnersLogos.filter(logo=>{
        return logo.tags.includes(filter.toLowerCase())
    })
    return(
        <FlipMove  className="row row-cols-2 row-cols-md-4 g-2 px-4 align-items-center" enterAnimation="fade" leaveAnimation="fade">
            {filteredLogos.map((logo,i)=>{
                return<>
                <div key={i} className="partner-logo-container">
        <div className="partner-logo-img">
        <img src={logo.image} className="img-fluid"/>
        </div>
        <div className="links-wrapper">
        <a href={logo.website || "#"} target="_blank">
                    <img src="./assets/images/arrow-top-right.svg" alt="" />
                </a>
                <a href={logo.twitter || "#"}  target="_blank">
                    <img src="./assets/images/twitter.svg" alt="" />
                </a>
        </div>
    </div>
                </>
            })}
        </FlipMove>
    )
}
const PartnersSection= ({hideFilters})=>{

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


    const filtersPanel = Boolean(hideFilters) ? "" :
    <ul className="partners-filter-btns">
        {filterBtns.map((btn,i)=>{
            return <li key={btn.text}><button className="filter-btn" onClick={()=>{setFilter(btn.text)}}> {btn.text}</button></li>
        })}
    </ul>

return(<React.Fragment>
<h2 className="nevan section-heading py-2 py-md-3 text-center w-full" >PARTNERS</h2>
{
    filtersPanel
}
<PartnersLogosContainer filter={filter}/>
</React.Fragment>)
}
export default PartnersSection