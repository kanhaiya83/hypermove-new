import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../context/AuthContext"

const ReferralPage=()=>{
    const [copied,setCopied] = useState(false)
    const {userData,isAuthenticated} = useAuthContext()
    const navigate = useNavigate()
    const referralLink=window.location.origin+"?referral_code="+userData.referralCode
    const handleCopy=()=>{

        navigator.clipboard.writeText(referralLink);
        setCopied(true)
        setInterval(() => {
            setCopied(false)
        }, 3000);
    }
    const totalReferrals= userData.referredUsers ? userData.referredUsers.length : 0
    
    useEffect(()=>{
        if(!isAuthenticated){
            navigate("/")
        }
    },[isAuthenticated])
return <div className="container">
    <div className="header-top-padding referral-page">
<div className="d-flex align-items-center justify-content-between page-header">
<h2>Referrals</h2>
<button onClick={handleCopy}>{copied ? "Copied" :"Copy referral link!"}</button>
</div>
<div className="d-flex align-items-center justify-content-between page-cards-container">
    <div className="page-card d-flex flex-column align-items-center">
                <h1>Total Referrals</h1>

                <h3>{totalReferrals}</h3>
    </div>
    <div className="page-card d-flex flex-column align-items-center">
                <div className="d-flex align-items-center"><img  src="./assets/images/gem.svg" alt="" /><h1 className="mb-0" >Gems Earned</h1></div>

                <h3>{totalReferrals * 50}</h3>
    </div>
    <div className="page-card d-flex flex-column align-items-center">
                <div className="d-flex align-items-center"><img  src="./assets/images/ticket.svg" alt="" /><h1 className="mb-0">Tickets Earned</h1></div>
                <h3>{totalReferrals * 10}</h3>
    </div>
</div>
<h2 className="mt-4">Referred Users</h2>
{
    totalReferrals > 0 ? <></>:
    <span className="no-users-warning">
        No referrals available.
    </span>
}
</div>
</div>
}

export default ReferralPage