import React, { useEffect, useState } from "react";

const LaunchpadProjectPage = () => {
  const [project, setProject] = useState({
    title: "Hypermove",
    logo: "https://user-images.githubusercontent.com/76777058/203909737-d9916486-3f6c-4e12-a558-112ba3b3c15d.png",
    image:
      "https://user-images.githubusercontent.com/76777058/203909737-d9916486-3f6c-4e12-a558-112ba3b3c15d.png",
    description:
      "HyperMove is a metaverse ecosystem & a decentralized gaming platform built with the combination of P2E & M2E within the metaverse. HyperMove’s Metaverse seamlessly connects people from all parts of the globe across generations to build, grow and enjoy in a decentralized virtual world.",
    raised: 0,
    totalRaise: 100000,
  });
  const [hideBar, setHideBar] = useState(true);
  useEffect(() => {
    if (hideBar) {
      setHideBar(false);
    }
  }, []);
  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL);
      const response = await res.json();
      if (response && response.success) {
        setProject((prev) => {
          return { ...prev, ...response.data };
        });
      }
    })();
  }, []);
  const progress = ((project.raised / project.totalRaise) * 100).toFixed(2);
  return (
    <div className="launchpad-container header-top-padding">
      <div className="top-info-wrapper">
        <section>
          <div className="section-header">
            <img src={project.image} alt="" />
            <div className="tags-wrapper">
              <div className="tags">
                <span className="tag">LIVE</span>
                <span className="tag">BSC</span>
                <span className="tag">BUSD</span>
              </div>
              <h1>{project.title}</h1>
            </div>
          </div>
          <h5 className="project-description">{project.description}</h5>
          <div className="social-media-btns">
            <a
              className="social-btn"
              href="https://twitter.com"
              target="_blank"
            >
              <img
                src="https://user-images.githubusercontent.com/76777058/203913992-146fe30a-a80a-4a5f-887d-c0c54b898427.svg"
                alt=""
              />
            </a>
            <a
              className="social-btn"
              href="https://twitter.com"
              target="_blank"
            >
              <img
                src="https://user-images.githubusercontent.com/76777058/203914896-b7fda108-336e-4cb9-ad64-eac05c9813c7.svg"
                alt=""
              />
            </a>
            <a
              className="social-btn"
              href="https://twitter.com"
              target="_blank"
            >
              <img
                src="https://user-images.githubusercontent.com/76777058/203914900-7c96ade9-9014-4323-aa4e-eb7ebe5efd85.svg"
                alt=""
              />
            </a>
            <a
              className="social-btn"
              href="https://twitter.com"
              target="_blank"
            >
              <img
                src="https://user-images.githubusercontent.com/76777058/203914910-7747f0a8-7514-43cf-b7d1-40859f86ddbc.svg"
                alt=""
              />
            </a>
          </div>
          <div className="io-info">
            <div className="info-stack">
              <h4>TOTAL RAISE</h4>
              <h1>$100,000</h1>
            </div>

            <div className="info-stack">
              <h4>NETWORK</h4>
              <h1>BSC</h1>
            </div>

            <div className="info-stack">
              <h4>ACCESS</h4>
              <h1>Private</h1>
            </div>
          </div>
          {/* <div className="address-wrapper">
            <h4>IDO SALE CONTRACT ADDRESS</h4>
            <h1>0xdAe3aBcf151F3da99c9738DDf13a2e33E6eA0B37</h1>
          </div> */}
          {/* <button className="view-btn">View BSC Scan</button> */}
        </section>
        <section className="shadow-box rounded-corner">
          <div className="live-tag-container">
            <span className="tag">LIVE</span>
          </div>
          <div className="raised-amount-wrapper">
            <div className="info-stack ">
              <h4>Min Allocation</h4>
              <button className="neo-container">$100</button>
            </div>

            <div className="info-stack ">
              <h4>Max Allocation</h4>
              <button className="neo-container">$3,000</button>
            </div>
            <div className="info-stack ">
              <h4>Value</h4>
              <button className="neo-container">I BUSD = 200 GEMS</button>
            </div>
          </div>
          <h4 className="start-info">
            <b>Starts:</b>
            <pre> 01/01/2023</pre>
          </h4>
          <div className="progress-bar-wrapper">
            <h4>
              PROGRESS <span>[{progress}%]</span>
            </h4>
            <div className="bar">
              <div
                className={`completed-bar ${hideBar && "hidden"}`}
                style={{ width: progress + "%" }}
              ></div>
            </div>
          </div>
          <InputContainer setProject={setProject} />
        </section>
      </div>
      <div className="bottom-info-wrapper">
        <div className="section-heading">Token Information</div>
        <div className="info-cards-wrapper">
          <div className="info-card shadow-box rounded-corner">
            <div className="info-stack">
              <h4>Start</h4>
              <h1>Nov 28th</h1>
            </div>
          </div>
          <div className="info-card ">
            <div className="info-stack">
              <h4>End</h4>
              <h1>Dec 1th</h1>
            </div>
          </div>
          <div className="info-card ">
            <div className="info-stack">
              <h4>Distribution</h4>
              <h1>15%</h1>
            </div>
          </div>
          <div className="info-card ">
            <div className="info-stack">
              <h4>Hardcap</h4>
              <h1>$100,000</h1>
            </div>
          </div>
          <div className="info-card ">
            <div className="info-stack">
              <h4>Price</h4>
              <h1>$0.012</h1>
            </div>
          </div>
          <div className="info-card shadow-box rounded-corner">
            <div className="info-stack">
              <h4>Contract Address</h4>
              <h1>0xdAe3aBcf1...</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const InputContainer = ({ projectId, setProject }) => {
  const [value, setValue] = useState(100);
  const [fetching, setFetching] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const authToken = localStorage.getItem("auth-token");
    if (!authToken || fetching) return;
    setFetching(true)
    const res = await fetch(process.env.REACT_APP_SERVER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": authToken,
      },
      body: JSON.stringify({ amount: value }),
    });
    const response = await res.json();

    console.log(response);
    if (response && response.success) {
      setProject((prev) => ({ ...prev, ...response.updatedProject }));
    }
    setFetching(false)
  };
  return (
    <div className="form-container  ">
      <div className="deposit-details">
        <h3>Your Deposited</h3>
        <h1>0.00</h1>
      </div>
      <div className="wallet-balance">
        <span>Your wallet balance:</span>
        <span>0.00</span>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="neo-container"
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={true}
          min={100}
          max={3000}
        />
        <div className="approve-btn">
          <button>{fetching?"Approving" : "Approve" }</button>
        </div>
      </form>
    </div>
  );
};
export default LaunchpadProjectPage;
