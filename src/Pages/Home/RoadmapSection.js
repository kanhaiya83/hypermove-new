import { Container } from "react-bootstrap";

const RoadmapSection=()=>{
    return(<>
    
<div className="waves-image-wrapper">
    <img src="./assets/images/waves.svg" alt="" />
</div>
<Container>
    
<img src="./assets/images/overlay-1.png" alt="" className="overlay-1" />
<img src="./assets/images/overlay-2.png" alt="" className="overlay-2" />
<img src="./assets/images/overlay-3.png" alt="" className="overlay-3" />
<img src="./assets/images/overlay-4.png" alt="" className="overlay-4" />
<h2 className="nevan section-heading py-2 py-md-5">ROADMAP</h2>
<div className="roadmap-section-row">
    <div className="item-wrapper">
    <div className="circular-title-wrapper">
    <div className="circular-title">
        <h2>Q2</h2>
        <h4>2022</h4>
    </div>
    </div>
    <ul className="text-list text-start">
            <li>The concept & idea is born</li>
            <li>Research & Study</li>
            <li>Economy in game design</li>
            <li>Move & Earn ideal phase</li>
            <li>List on Coingecko</li>
            <li>List on Coinmarketcap</li>
        </ul></div>
        <div className="item-wrapper">
    <div className="circular-title-wrapper">
    <div className="circular-title">
        <h2>Q3</h2>
        <h4>2022</h4>
    </div>
    </div>
    <ul className="text-list text-start">
            <li>Social Marketing Campaign & Referral Program</li>
            <li>Community building Large Marketing Push</li>
            <li>Marketplace</li>
            <li>Mint & Renting NFTS</li>
            <li>Partnership with shoe Brands</li>
           
        </ul></div>
        <div className="item-wrapper">
    <div className="circular-title-wrapper">
    <div className="circular-title">
        <h2>Q4</h2>
        <h4>2022</h4>
    </div>
    </div>
    <ul className="text-list text-start">
            <li>GameFi: PVP</li>
            <li>SocialFi element & chat features</li>
            <li>Communities Event</li>
            <li>HyperMove V2</li>
            
        </ul></div>
        <div className="item-wrapper">
    <div className="circular-title-wrapper">
    <div className="circular-title">
        <h2>Q1</h2>
        <h4>2023</h4>
    </div>
    </div>
    <ul className="text-list text-start">
            <li>New Roadmap live be published</li>
            
        </ul></div>
</div>
</Container>

</>
    )
}

export default RoadmapSection