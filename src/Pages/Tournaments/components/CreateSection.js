import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { toast } from "react-toastify";
const CreateSection = ({ setTournaments }) => {
  const { userData, setUserData, isAuthenticated, isWalletConnected } =
    useAuthContext();
  const [title, setTitle] = useState("");
  const [fetching, setFetching] = useState(false);
  const [entryFee, setEntryFee] = useState({
    gems: 20,
    tickets: 1,
  });
  const [game, setGame] = useState("inorbit");
  const createTournament = async (formData) => {
    const res = await fetch(process.env.REACT_APP_SERVER_URL + "/tournament", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify({ tournamentData: formData }),
    });
    const response =await res.json();
    return response

  };
  const resetForm=()=>{
    setTitle("");
    setEntryFee({gems:20,tickets:1})
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(fetching)return;
    setFetching(true);
    const formData = {
      title,
      entryFee,
      playersCount: 2,
      game,
      prize: entryFee.gems * 2,
    };
    console.log(formData);
    if (entryFee.gems > userData.gems) {
      setFetching(false);

      return toast.warn("Insufficient Gems!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    if (entryFee.tickets > userData.tickets) {
      setFetching(false);

      return toast.warn("Insufficient Tickets!!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    const id = toast.loading("Creating tournament...")

    const response =await  createTournament(formData)
    console.log(response);
    if (response.success) {
      setTournaments((prev) => [...prev, response.savedTournament]);
      setUserData(response.user);
      setFetching(false);
      toast.update(id, { render: "Tournament created successfully!!", type: "success",theme:"dark",autoClose:2000,hideProgressBar:true,progress:undefined,closeButton:true});
resetForm()
      return;
    }
      toast.update(id, { render: "Some error occurred!!", type: "error",theme:"dark",autoClose:2000,hideProgressBar:true,progress:undefined,closeButton:true});

    setFetching(false);

  };
  let linkText = <></>;
  if (!isAuthenticated) {
    linkText = <>Connect Steam to Create</>;
  }
  if (!isWalletConnected) {
    linkText = <>Login to Create</>;
  }
  return (
    <>
      <div className="create-tournament-section">
        <div className="wrapper">
          <header>
            <span>Create Tournament</span>
          </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              id=""
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <label htmlFor="">Entry Fee</label>
            <div className="entry-fee">
              <input
                type="number"
                name=""
                id=""
                placeholder="Gems"
                value={entryFee.gems}
                onChange={(e) => {
                  setEntryFee((prev) => ({ ...prev, gems: e.target.value }));
                }}
              />{" "}
              <input
                type="number"
                name=""
                id=""
                placeholder="Tickets"
                value={entryFee.tickets}
                onChange={(e) => {
                  setEntryFee((prev) => ({ ...prev, tickets: e.target.value }));
                }}
              />
            </div>
            <label htmlFor="">Game</label>
            <select name="" id="" value={game}>
              <option value="" selected>
                In orbit
              </option>
            </select>
            {isAuthenticated ? (
              <button className="submit-btn">
                {fetching ? "Creating.." : "Create"}
              </button>
            ) : (
              <Link to="/play-to-earn" state={{ from: "/tournaments/create" }}>
                {linkText}
              </Link>
            )}
          </form>
        </div>
      </div>
    </>
  );
};
export default CreateSection;
