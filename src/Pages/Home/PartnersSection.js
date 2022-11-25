import React, { useEffect, useState } from 'react';
import FlipMove from 'react-flip-move';

const PartnersLogosContainer=({filter})=>{
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