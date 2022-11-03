import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
const CreateSection = ({setTournaments}) => {
  const {userData,setUserData,isAuthenticated,isWalletConnected} = useAuthContext()
  const [title, setTitle] = useState("");
  const [fetching, setFetching] = useState(false);
  const [entryFee, setEntryFee] = useState({
    gems: 20,
    tickets: 1,
  });
  const [game, setGame] = useState("inorbit");

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFetching(true)
    const formData = {
        title,
        entryFee,
        playersCount:2,
        game,
        prize:entryFee.gems*2
    }
    console.log(formData)
    if(entryFee.gems > userData.gems){
      setFetching(false)

      return alert("Insufficient gems!!")

    }
    if(entryFee.tickets > userData.tickets){
      setFetching(false)

      return alert("Insufficient tickets!!")
    }
const res = await fetch(process.env.REACT_APP_SERVER_URL+"/tournament",{
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        "auth-token":localStorage.getItem("auth-token")
    },
    body:JSON.stringify({tournamentData:formData})
})
const response = await res.json()
console.log(response);
if(response.success){
setTournaments(prev=>[...prev,response.savedTournament])
setUserData(response.user)
setFetching(false)

    return alert("Tournament created!")
}
  }
  let linkText=<></>
  if(!isAuthenticated){
     linkText = <>Connect Steam to Create</>
  }
  if(!isWalletConnected){
     linkText = <>Login to Create</>
  }
  return (
    <>
      <div className="create-tournament-section">
        <div className="wrapper">
            <header>
                <span>
                    Create Tournament
                </span>
            </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input type="text" name="" id="" value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
            <label htmlFor="">Entry Fee</label>
            <div className="entry-fee">
              <input type="number" name="" id="" placeholder="Gems"  value={entryFee.gems} onChange={(e)=>{setEntryFee(prev=>({...prev,gems:e.target.value}))}}/>{" "}
              <input type="number" name="" id="" placeholder="Tickets" value={entryFee.tickets} onChange={(e)=>{setEntryFee(prev=>({...prev,tickets:e.target.value}))}}/>
            </div>
            <label htmlFor="">Game</label>
            <select name="" id="" value={game}>
              <option value="" selected>
                In orbit
              </option>
            </select>
            {isAuthenticated ? 
            <button className="submit-btn">{fetching ?"Creating.." :"Create"}</button>:
            <Link to="/play-to-earn" state={{from:"/tournaments/create"}}>{linkText}</Link> }
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateSection;
