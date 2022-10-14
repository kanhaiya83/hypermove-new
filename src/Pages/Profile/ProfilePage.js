import { useAuthContext } from "../../context/AuthContext"

const ReferralPage=()=>{
    const {userData} = useAuthContext()
return <div className="container">
    <div className="header-top-padding profile-page-2">
    <div className="profile-img">
        <img src={`https://avatars.dicebear.com/api/bottts/randomm.svg`} alt="" />
    </div>
    <div className="user-name">John Doe</div>
    <div className="page-cards d-flex justify-content-between align-items-stretch">
        <div className="d-flex flex-column align-items-center page-card">
        <div className="d-flex align-items-center mb-4"><img src="./assets/images/rank.svg" alt="" /><h5>Rank</h5></div>
            
            <h2>Bronze</h2>
        </div>
        <div className="border-div"></div>
        <div className="d-flex flex-column align-items-center page-card">
            <div className="d-flex align-items-center mb-4"><img src="./assets/images/gem.svg" alt="" /><h5>Gems</h5></div>
            <h2>{userData.gems}</h2>
        </div>
        <div className="border-div"></div>

        <div className="d-flex flex-column align-items-center page-card">
        <div className="d-flex align-items-center mb-4"><img src="./assets/images/ticket.svg" alt="" /><h5>Tickets</h5></div>
            
            <h2>{userData.tickets}</h2>
        </div>
    </div>
</div>
</div>
}

export default ReferralPage