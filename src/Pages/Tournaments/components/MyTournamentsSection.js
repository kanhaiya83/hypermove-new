import { useEffect, useState } from "react"
import { useAuthContext } from "../../../context/AuthContext"

const TournamentCard=({data,userId})=>{
    const {title,prize,entryFee,playersCount,joinedPlayers,winner,isDraw}=data
    const joinedPlayer = joinedPlayers.find(j=>j.userId===userId)
    if(!joinedPlayer)return <></>
    let btnContent =<a href={window.location.origin + "/games/inorbit?code="+joinedPlayer.code} target="_blank">
        Play
    </a>
    if(joinedPlayer.hasCompleted){
        btnContent =<button>
           Your score:{joinedPlayer.score}
        </button>
    }
    if(winner && winner.length>0){
        btnContent =<button>
           {winner === userId ? "You won": "You Lost"}
        </button>
    }
    
    if(isDraw ){
        btnContent =<button>
           Draw
        </button>
    }
    
    return (
        <div className="t-card">
            <div className="img-container">
                <img src="/assets/images/game-console.svg" alt="" />
            </div>
            <div className="t-card-info">
                <span className="name">{title}</span>
                <div className="prize">
                    <span>{`Prize Pool: ${prize}`}</span>
                    <img className="icon" src="/assets/images/gem-purple.svg" alt="" />
                </div>
            </div>
            <div className="join-btn-container">
               {btnContent}
                
            </div>
        </div>
    )
}
const MyTournamentSection =({myTournaments})=>{
    const {userData} = useAuthContext()
  
    return(
        <>
          <div className="my-tournaments-section">
                        <div className="wrapper">
                                <header>
                                    <h1>My Tournaments</h1>
                                </header>
                                <ul className="tournament-list">
                                        {
                                            myTournaments.length >0 ?
                                            myTournaments.map((t,i)=>{
                                                return <TournamentCard data={t} key={i} userId={userData?._id}/>
                                            }):
                                            <>No Tournaments available</>
                                        }
                                </ul>
                        </div>
                    </div>
        </>
    )
}

export default MyTournamentSection