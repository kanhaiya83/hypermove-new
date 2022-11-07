import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { successToast } from "../../../utils/toast";

const TournamentsSection = ({ tournaments,setTournaments }) => {
  const { isAuthenticated, isWalletConnected, setIsAuthenticated } =
    useAuthContext();
  return (
    <>
      <div className="main-content">
        <div className="wrapper">
          <header>
            <h1
              onClick={() => {
                setIsAuthenticated(false);
              }}
            >
              Tournaments
            </h1>
          </header>
          <ul className="tournament-list">
            {tournaments.length > 0 ? (
              tournaments.map((t, i) => {
                return (
                  <TournamentCard
                    data={t}
                    key={i}
                    isAuthenticated={isAuthenticated}
                    isWalletConnected={isWalletConnected}
                    setTournaments={setTournaments}
                  />
                );
              })
            ) : (
              <>No Tournaments available</>
            )}
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
              <option value="week">Game</option>
            </select>
            <select name="" id="">
              <option value="week">Prize</option>
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
      </div>
    </>
  );
};
const TournamentCard = ({ data, isAuthenticated, isWalletConnected ,setTournaments}) => {
    const { title, prize, entryFee, playersCount,_id ,joinedPlayers} = data;

  const {userData} = useAuthContext() 
  const handleJoin=async ()=>{
    const res= await fetch(process.env.REACT_APP_SERVER_URL+"/tournament/join?tournamentId="+_id,{
        headers:{
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem("auth-token")
        }
    })
    const response = await res.json()
    if(response && response.success){
      successToast("Tournament joined successfully!!")
      setTournaments(prev=>prev.map(t=>{
        if(t._id === response.tournament._id){
          return response.tournament;
        }
        return t;
      }))
    }
  }
  let userJoined = false;

  joinedPlayers.forEach(p=>{
    console.log(p.userId ,userData._id)
    if(p.userId === userData._id){
        userJoined = true;
    }
  })
  
  let btnContent = (
    <>
    <button onClick={handleJoin}>
      <span>Join</span>
      <span>{entryFee?.tickets}</span>
      <img className="icon" src="./assets/images/ticket.svg" alt="" />

      <span>{entryFee?.gems}</span>

      <img className="icon" src="./assets/images/gem.svg" alt="" />
      </button>
    </>
  );
if(userJoined){
    btnContent = (
        <>
        <button onClick={handleJoin}>
          <span>Joined</span>
          </button>
        </>
      );
}
  if (!isAuthenticated) {
    btnContent = (
      <>
        <button>
            <Link to="/play-to-earn" state={{ from: "/tournaments" }}>
          Connect Steam to Join
        </Link>
      </button>
      </>
    );
  }
  if (!isWalletConnected) {
    btnContent = (
      <>
      <button>
        <Link to="/play-to-earn" state={{ from: "/tournaments" }}>
          Login to Join
        </Link>
        </button>
      </>
    );
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
        {btnContent}
        <div className="players-count">
          <img src="./assets/images/player-gray.svg" alt="" />
          <span>{playersCount}</span>
        </div>
      </div>
    </div>
  );
};
export default TournamentsSection;
