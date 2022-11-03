import { Link } from "react-router-dom"
import { useAuthContext } from "../../../context/AuthContext"

const TournamentsSection=({tournaments})=>{
    const {isAuthenticated,isWalletConnected,setIsAuthenticated} = useAuthContext()
    return(
        <>
         <div className="main-content">
                        <div className="wrapper">
                                <header>
                                    <h1 onClick={()=>{setIsAuthenticated(false)}}>Tournaments</h1>
                                </header>
                                <ul className="tournament-list">
                                        {
                                            tournaments.length >0 ?
                                            tournaments.map((t,i)=>{
                                                return <TournamentCard data={t} key={i} isAuthenticated={isAuthenticated} isWalletConnected={isWalletConnected}/>
                                            }):
                                            <>No Tournaments available</>
                                        }
                                </ul>
                        </div>
                    </div>
                <div className="filter-sidebar">
                    <div className="wrapper">
                        <header>
                            <span>Filter By</span>
                        </header>
                        <div className="filter-list">
                            <select name="" id="">
                                <option value="week">This Week</option>
                            </select>
                            <select name="" id="">
                                <option value="week">This Week</option>
                            </select>
                            <select name="" id="">
                                <option value="week">This Week</option>
                            </select>
                            {/* <button>
                                <span>This Week</span>
                                <img src="./assets/images/chevron-down-white.svg" alt="" />
                            </button>
                            <button>
                                <span>Game</span>
                                <img src="./assets/images/chevron-down-white.svg" alt="" />
                            </button>
                            <button>
                                <span>Prize</span>
                                <img src="./assets/images/chevron-down-white.svg" alt="" />
                            </button> */}
                        </div>
                    </div>
                </div></>
    )
}
const TournamentCard=({data,isAuthenticated,isWalletConnected})=>{
    const {title,prize,entryFee,playersCount}=data
    let btnContent =<>
    <span>Join</span>
                    <span>{entryFee.tickets}</span>
                    <img className="icon" src="./assets/images/ticket.svg" alt="" />
                
                    <span>{entryFee.gems}</span>
                    <img className="icon" src="./assets/images/gem.svg" alt="" /></>
if(!isAuthenticated){
    btnContent=<>
    <Link to="/play-to-earn" state={{ from: "/tournaments" }} >
   Connect Steam to Join
    </Link>
    </>
}
if(!isWalletConnected){
    btnContent=<>
    <Link to="/play-to-earn" state={{ from: "/tournaments" }} >


   Login to Join
    </Link></>
    
}
    return (
        <div className="t-card">
            <div className="img-container">
                <img src="./assets/images/game-console.svg" alt="" />
            </div>
            <div className="t-card-info">
                <span className="name">{title}</span>
                <div className="prize">
                    <span>{`Prize Pool: ${prize}`}</span>
                    <img className="icon" src="./assets/images/gem-purple.svg" alt="" />
                </div>
            </div>
            <div className="join-btn-container">
                <button>
                    {btnContent}
                </button>
                <div className="players-count">
                    <img src="./assets/images/player-gray.svg" alt="" />
                    <span>{playersCount}</span>
                </div>
            </div>
        </div>
    )
}
export default TournamentsSection