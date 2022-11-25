import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { successToast } from "../../../utils/toast";
import parseTournaments, {
  getScore,
  hasPlayed,
} from "../../../utils/tournamentParser";

const calculateDisplayMessage=(array,filter)=>{
  if(array === undefined || !array){
    return "Loading..."
  }
  if (filter === "myTournament" && array.length ===0) {
    return <span>No tournament created by you.</span>;
  }
  if (filter === "nonParticipatedTournaments" && array.length ===0) {
    return <>
    <span>No tournaments available.</span>
    </>;
  }
  if (filter === "completedTournaments"&& array.length ===0) {
    return <span>You haven't completed any tournaments</span>;
  }
  if (filter === "joinedTournaments"&& array.length ===0) {
    return <span>You haven't joined any tournament.</span>;
  }
  else{
    return <span>No tournaments available.</span>

  }
}
const TournamentsSection = ({ tournaments, setTournaments }) => {
  const { isAuthenticated, isWalletConnected, setIsAuthenticated, userData } =
    useAuthContext();
  const [filter, setFilter] = useState("joinedTournaments");
  const result = parseTournaments(tournaments, userData._id);
  const handleJoin = async (tournamentId) => {
    const res = await fetch(
      process.env.REACT_APP_SERVER_URL +
        "/tournament/join?tournamentId=" +
        tournamentId,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    const response = await res.json();
    if (response && response.success) {
      successToast("Tournament joined successfully!!");
      setTournaments((prev) =>
        prev.map((t) => {
          if (t._id === response.tournament._id) {
            return response.tournament;
          }
          return t;
        })
      );
    }
  };
  
  const currentTournamentArray = result[filter];
const displayMessage = calculateDisplayMessage(currentTournamentArray,filter)
  return (
    <>
      <div className="main-content">
        <div className="wrapper">
          <header className="main-content-header">
            <h1
              onClick={() => {
                setIsAuthenticated(false);
              }}
            >
              Tournaments
            </h1>
            <div className="filter-wrapper">
              <label htmlFor="">Filter By</label>
              <select
              name=""
              id=""
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              value={filter}
            >
              <option value="myTournaments">Created By You</option>
              <option value="nonParticipatedTournaments">
                Non participated
              </option>
              <option value="completedTournaments">
                Completed Tournaments
              </option>
              <option value="joinedTournaments">Joined Tournaments</option>
            </select>
            </div>
          </header>
          <div>
            {(Array.isArray(currentTournamentArray) && currentTournamentArray.length > 0) ? (
              <div className="tournaments-list-container">
                { currentTournamentArray.map((t, i) => {
                    return (
                      <TournamentCard
                        data={t}
                        key={t._id}
                        isAuthenticated={isAuthenticated}
                        isWalletConnected={isWalletConnected}
                        setTournaments={setTournaments}
                        filter={filter}
                        handleJoin={handleJoin}
                        userId={userData._id}
                      />
                    );
                  })}
              </div>
            ) : (
              <div className="display-message-container">{displayMessage}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const TournamentCard = ({
  data,
  isAuthenticated,
  isWalletConnected,
  filter,
  handleJoin,
  userId,
}) => {
  const title = data?.title;
  const prize = data?.prize;
  const player = data.joinedPlayers.find((p) => p.userId === userId);

  let btnContent =<span>Unavailable</span>;
  let btnAction = () => {};
  if (filter === "joinedTournaments") {

    if (player?.hasPlayed) {
      btnContent = (
        <span>Your score: {getScore(data.joinedPlayers, userId)}</span>
      );
    } else {
      btnAction = () => {
        window.open(
          window.location.origin + "/games/inorbit?code=" + player?.code,
          "_blank"
        );
      };

      btnContent = <span>Play</span>;
    }
  }
  if (filter === "nonParticipatedTournaments") {
    btnContent = <span>Join</span>
    btnAction = ()=>{handleJoin(data._id)};
  }
  if(filter === "myTournaments"){
    if(player?.hasPlayed && data?.isCompleted){
      btnContent =<span>{userId===data.winner ?  "You won!!":"You lost!!"}</span>
    }
    else if(player?.hasPlayed && !(data?.isCompleted)){
      btnContent =<span>{`Your score: ${player?.score || "unavailable"}`}</span>
    }
    else if(!player?.hasPlayed){
      btnContent = <span>Play to Score</span>
      btnAction = () => {
        window.open(
          window.location.origin + "/games/inorbit?code=" + player?.code,
          "_blank"
        );
      };
    }
  }
  if(filter === "completedTournaments"){
    
      btnContent =<span>{ userId===data.winner?  "You won!!":"You lost!!"}</span>

  }

  return (
    <div className="tournament-card">
      <div className="img-container"></div>
      <div className="card-info-container">
        <div className="card-info-wrapper">
          <h1 className="card-title">{title}</h1>
          <h4 className="card-prize">
            <span>Prize Pool:{prize}</span>
            <img className="icon" src="/assets/images/gem-purple.svg" alt="" />
          </h4>
        </div>
        <div className="card-info-wrapper">
          <button onClick={btnAction || (() => {})}>{btnContent}</button>
        </div>
      </div>
    </div>
  );
};
export default TournamentsSection;
