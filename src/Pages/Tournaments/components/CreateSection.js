import { useState } from "react";
const CreateSection = () => {
  const [title, setTitle] = useState("");
  const [entryFee, setEntryFee] = useState({
    gems: 20,
    tickets: 1,
  });
  const [game, setGame] = useState("inorbit");

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {
        title,
        entryFee,
        playersCount:2,
        game,
        prize:entryFee.gems*2
    }
    console.log(formData)
const res = await fetch(process.env.REACT_APP_SERVER_URL+"/tournament",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({tournamentData:formData})
})
const response = await res.json()
console.log(response);
  }
  return (
    <>
      <div className="create-tournament-section">
        <div className="wrapper">
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
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateSection;
