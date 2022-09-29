const MintBadgeSection = ({connectMetamask,handleSteamConnect,isWalletConnected})=>{
    return(
        <>
        <div className="mint-badge-container">
            <div className="mint-badge-wrapper">
            <section className="btns-section">
                <h1 className="section-heading">
                    Mint Your Hypermove Badge
                </h1>
                <span>Please connect your wallet.</span>
                <div className="btns-wrapper">
                   <div className="btn-container"> <button  onClick={connectMetamask}><img src="./assets/images/metamask-icon.svg" alt="" /><span>{isWalletConnected ? "CONNECTED":"CONNECT WALLET"}</span></button></div>
                   <div className="btn-container"><button onClick={handleSteamConnect}><img src="./assets/images/steam-icon.svg" alt="" /><span>CONNECT STEAM</span></button></div>
                </div>
            </section>
            <section className="img-section">
                <div className="badge-img-container">
                <img src="./assets/images/platinum badge.png" alt="" />
                </div>
            </section>
            </div>
        </div>
        </>
    )
}
export default MintBadgeSection