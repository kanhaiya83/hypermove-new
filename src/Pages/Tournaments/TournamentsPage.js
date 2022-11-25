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
  },,
  {
    text: "My Tournaments",
    image: "",
    href: "/tournaments/mytournaments",
  }

];
const TournamentPage =()=>{
  const {isAuthenticated,isWalletConnected,userData} = useAuthContext()
  console.log({userData});
  const [tournaments,setTournaments]=useState([]) 
  const [myTournaments,setMyTournaments] = useState([])

    useEffect(()=>{
      (async()=>{
        const res= await fetch(process.env.REACT_APP_SERVER_URL+"/tournament")
        const response = await res.json()
        if(response && response.success){
          
          setTournaments(response.tournamentsList)

        }
      })()
    },[])
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
  },[tournaments.length])
   
    return(
        <>
        <div className="header-top-padding">
            <div className="tournament-page-wrapper">
                <SideNavBar isOpen={true} links={navLinks.filter(l=>{
                  if(l.href==="/tournaments/mytournaments" && !isAuthenticated){
                    return false
                  }
                  return true
                })}/>
                <div className="content-wrapper">
                   <Routes>

                    <Route index element={<TournamentsSection tournaments={tournaments} tournamentss={tournaments.filter(t=>{
                      if(t.createdBy === userData._id){
                        return false;
                      }
                      return true;
                    })} setTournaments={setTournaments}/>} />
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