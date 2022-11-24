const LaunchpadPage = () => {
    return (
      <div className="launchpad-container header-top-padding">
        <div className="top-info-wrapper shadow-box rounded-corner">
          <section>
              <div className="raised-amount-wrapper">
                <div>
                  <h4>TOTAL RAISE</h4>
                  <button>30,000 BUSD</button>
                </div>
  
                <div>
                  <h4>TOTAL RAISED</h4>
                  <button>20,100 BUSD</button>
                </div>
                <div className="invest-btn-wrapper">
                  <h4>Value</h4>
                  <button>I BUSD = 200 GEMS</button>
                </div>
              </div>
            <div className="progress-bar-wrapper">
              <h4>PROGRESS</h4>
              <div className="bar">
                <div className="completed-bar"></div>
                <span>67%</span>
              </div>
            </div>
           <button className="invest-btn">INVEST NOW</button>
          </section>
          <section>
            <div className="img-wrapper">
              <img src="https://user-images.githubusercontent.com/76777058/203840611-f91bd1a7-f2b8-438a-81c8-e4480bfa0d23.png" alt="" />
            </div>
            <h5>
              GEMS is an Esports 3.0 aggregator platform within an O2O ecosystem.
              It propels Esports into 3.0 by integrating Gamefi, Metaverse and
              Socialfi elements, and leverages on its founding partners' chain of
              Esports hotels.
            </h5>
           
            <div className="io-info">
              <div className="io-info-wrapper">
                <h4>TOTAL RAISE</h4>
                <h1>$30,000</h1>
              </div>
  
              <div className="io-info-wrapper">
                <h4>NETWORK</h4>
                <h1>BSC</h1>
              </div>
  
              <div className="io-info-wrapper">
                <h4>ACCESS</h4>
                <h1>Public</h1>
              </div>
            </div>
            <div className="address-wrapper mt-4">
              <h4>IDO SALE CONTRACT ADDRESS</h4>
              <h1 className="ido-address">0xdAe3aBcf151F3da99c9738DDf13a2e33E6eA0B37</h1>
            </div>
            <button className="view-btn">View BSC Scan</button>
          </section>
        </div>
        <div className="bottom-info-wrapper">
        <section>
            <h3 className="section-heading">Pool Information</h3>
            <div className="shadow-box rounded-corner">
              <div className="info">
                <h4>Token Distribution</h4>
                <h1>TBA</h1>
              </div>
              <div className="info">
                <h4>Min Allocation</h4>
                <h1>100 BUSD</h1>
              </div>
              <div className="info">
                <h4>Allocation size</h4>
                <h1>$30,000</h1>
              </div>
              <div className="info">
                <h4>Listing Price</h4>
                <h1>0.005$</ h1>
              </div>
            </div>
          </section> <section>
            <h3 className="section-heading">Token Information</h3>
            <div className="shadow-box rounded-corner">
              <div className="info">
                <h4>Name</h4>
                <h1>GEMS</h1>
              </div>
              <div className="info">
                <h4>Symbol</h4>
                <h1>GEMS</h1>
              </div>
              <div className="info">
                <h4>Decimals</h4>
                <h1>18</h1>
              </div>
              <div className="info">
                <h4>Total Supply</h4>
                <h1>$10,000,000,000</h1>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  };
  
  export default LaunchpadPage;
  