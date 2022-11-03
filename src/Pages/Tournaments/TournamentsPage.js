import SideNavBar from "../../Components/Sidebar"
import { Routes,Route, Navigate } from "react-router-dom";
import TournamentsSection from "./components/TournamentSection";
import CreateSection from "./components/CreateSection";
import LeaderBoardCard from "../../Components/LeaderBoard";
import LeaderboardSection from "./components/LeaderboardSection";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
const navLinks = [
  {
    text: "Tournaments",
    image: "",
    href: "/tournaments",
  },
  {
    text: "Create",
    image: "",
    href: "/tournaments/create",
  },
  {
    text: "Leaderboard",
    image: "",
    href: "/tournaments/leaderboard",
  }
];
const TournamentPage =()=>{
  const {isAuthenticated,isWalletConnected} = useAuthContext()
  const [tournaments,setTournaments]=useState([]) 
    useEffect(()=>{
      (async()=>{
        const res= await fetch(process.env.REACT_APP_SERVER_URL+"/tournament")
        const response = await res.json()
        if(response && response.success){
          setTournaments(response.tournamentsList)
        }
      })()
    },[])
    return(
        <>
        <div className="header-top-padding">
            <div className="tournament-page-wrapper">
                <SideNavBar isOpen={true} links={navLinks}/>
                <div className="content-wrapper">
                   <Routes>

                    <Route index element={<TournamentsSection tournaments={tournaments}/>}/>
                    <Route path="create" element={<CreateSection setTournaments={setTournaments}/>}/>
                    <Route  path="leaderboard" element={<LeaderboardSection/>}/>
                   </Routes>
                </div>
            </div>
        </div>
        </>
    )
}

export default TournamentPage