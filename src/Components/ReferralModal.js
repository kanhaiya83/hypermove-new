import { useState } from "react"
import { useAuthContext } from "../context/AuthContext"
import ModalWrapper from "./ModalWrapper"

const ReferralModal=({isOpen,setIsOpen})=>{
    const [copied,setCopied] = useState(false)
    const {userData} = useAuthContext()
    const referralLink=window.location.origin+"?referral_code="+userData.referralCode
    const handleCopy=()=>{

        navigator.clipboard.writeText(referralLink);
        setCopied(true)
        setInterval(() => {
            setCopied(false)
        }, 3000);
    }
    return(
        <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className="referral-modal-content">
                <h1 className="modal-heading">
                    Refer a Friend
                </h1>
                <h4 className="modal-text">
                    Refer a friends and earn XP to boost your rank faster. 
                </h4>
                <div className="link-container">
                    <span>{referralLink}</span>
                    <button onClick={handleCopy}>{copied?"Copied":"Copy"}</button>
                </div>
            </div>

        </ModalWrapper>
    )
}
export default ReferralModal