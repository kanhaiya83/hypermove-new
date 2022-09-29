import { NavLink } from "react-router-dom"

const MarketPlace = ()=>{
    return(
        <div className="marketplace-section">
            <div className="top-nav">
                <NavLink to="/play-to-earn/marketplace" className={({isActive})=>{return isActive && "active"}}>Marketplace</NavLink>
                <NavLink to="/play-to-earn/nft" className={({isActive})=>{return isActive && "active"}}>My NFTs</NavLink>
            </div>
            <div className="top-filters-container">
                <select name="" id="">
                        <option value selected>Rarity</option>
                </select>
                <select name="" id="">
                        <option value selected>Drop</option>
                </select>
                <select name="" id="">
                        <option value selected>Replicas</option>
                </select>
                <select name="" id="">
                        <option value selected>Added</option>
                </select>
                
                <select name="" id="">
                        <option value selected>Sort By</option>
                </select>
            </div>
            <div className="bottom-filters-container">
                <button>Characters</button>
                <button>Weapons</button>
                <button>Costumes</button>
                <button>All NFTs</button>
            </div>
            <div className="marketplace-content">
                <div className="items-list">
                    <div className="item">Coming Soon</div>
                    <div className="item">Coming Soon</div>
                    <div className="item">Coming Soon</div>
                    <div className="item">Coming Soon</div>
                </div>
            </div>
        </div>
    )
}
export default MarketPlace