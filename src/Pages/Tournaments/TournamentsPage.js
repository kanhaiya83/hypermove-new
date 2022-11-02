import SideNavBar from "../../Components/Sidebar"
import { Routes,Route } from "react-router-dom";
import TournamentsSection from "./components/TournamentSection";
import CreateSection from "./components/CreateSection";
import LeaderBoardCard from "../../Components/LeaderBoard";
const TournamentPage =()=>{
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
    
    return(
        <>
        <div className="header-top-padding">
            <div className="tournament-page-wrapper">
                <SideNavBar isOpen={true} links={navLinks}/>
                <div className="content-wrapper">
                   <Routes>

                    <Route index element={<TournamentsSection/>}/>
                    <Route path="create" element={<CreateSection/>}/>
                    <Route  path="leaderboard" element={<LeaderBoardCard/>}/>
                   </Routes>
                </div>
            </div>
        </div>
        </>
    )
}

export default TournamentPage