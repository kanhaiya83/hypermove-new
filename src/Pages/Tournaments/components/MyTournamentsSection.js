import { useEffect, useState } from "react"
import { useAuthContext } from "../../../context/AuthContext"

const TournamentCard=({data,userId})=>{
    const {title,prize,entryFee,playersCount,joinedPlayers}=data
    const joinedPlayer = joinedPlayers.find(j=>j.userId===userId)
    if(!joinedPlayer)return <></>
    let btnContent =<a href={window.location.origin + "/games/inorbit?code="+joinedPlayer.code} target="_blank">
        Play
    </a>
    if(joinedPlayer.hasCompleted){
        btnContent =<button>
            {joinedPlayer.score}
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
                <div className="players-count">
                    <img src="/assets/images/player-gray.svg" alt="" />
                    <span>{playersCount}</span>
                </div>
            </div>
        </div>
    )
}
const MyTournamentSection =()=>{
    const [myTournaments,setMyTournaments] = useState([])
    const {userData} = useAuthContext()
    useEffect(()=>{
        (async()=>{
            const res= await fetch(process.env.REACT_APP_SERVER_URL+"/tournament/joined",{
                headers:{
                    "auth-token":localStorage.getItem("auth-token")
                }
            })
            const response = await res.json()
            if(response && response.success){
              setMyTournaments(response.tournamentsList)
            }
        })()
    },[])
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