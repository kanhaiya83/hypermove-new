import { NavLink } from "react-router-dom"

const MyNFTs = ()=>{
    return(
        <div className="marketplace-section">
 <div className="top-nav">
                <NavLink to="/play-to-earn/marketplace" className={({isActive})=>{return isActive && "active"}}>Marketplace</NavLink>
                <NavLink to="/play-to-earn/nft" className={({isActive})=>{return isActive && "active"}}>My NFTs</NavLink>
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
export default MyNFTs