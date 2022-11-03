
const TournamentsSection=({tournaments})=>{
    return(
        <>
         <div className="main-content">
                        <div className="wrapper">
                                <header>
                                    <h1>Tournaments</h1>
                                </header>
                                <ul className="tournament-list">
                                        {
                                            tournaments.map((t,i)=>{
                                                return <TournamentCard data={t} key={i}/>
                                            })
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
                            <button>
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
                            </button>
                        </div>
                    </div>
                </div></>
    )
}
const TournamentCard=({data})=>{
    const {title,prize,entryFee,playersCount}=data
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
                    <span>Join</span>
                    <span>{entryFee.tickets}</span>
                    <img className="icon" src="./assets/images/ticket.svg" alt="" />
                
                    <span>{entryFee.gems}</span>
                    <img className="icon" src="./assets/images/gem.svg" alt="" />
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