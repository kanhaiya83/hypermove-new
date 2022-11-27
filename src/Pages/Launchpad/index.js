import React, { useEffect, useMemo, useState } from "react";
import { successToast, errorToast } from "../../utils/toast";
import PartnersSection from "../Home/PartnersSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useApproval } from "../../hooks/useApproval";
import { useWeb3React } from "@web3-react/core";
import { useMultiCall } from "../../hooks/useMulticall";
import { ZERO_ADDRESS, currencyFormatter, timeConverter } from "../../utils";
import { IDO_INFO } from "../../constants/idoInfo";
import { useTokenBalance } from "../../hooks/useTokenBalance";
import { useBuy } from "../../hooks/useBuy";
import { injected } from "../../connector";
import { useSwitchNetwork } from "../../hooks/useSwitchNetwork";
import { divide, round } from "lodash";
const NFTGameImages = [
  "https://user-images.githubusercontent.com/76777058/203996529-bdd6e284-0303-4aaa-9235-05b88b30223a.png",

  "https://user-images.githubusercontent.com/76777058/203996642-0e5a6094-b774-4d96-8713-23b5c199d687.png",
  "https://user-images.githubusercontent.com/76777058/203996654-e1440887-903e-45af-8d04-29f8eaba7d49.png",
  "https://user-images.githubusercontent.com/76777058/203996668-836044eb-a5b4-41bc-bbbc-5b61d68c6184.png",
  "https://user-images.githubusercontent.com/76777058/203996680-8782520c-315b-4dc1-816d-4e97518d323e.png",
  "https://user-images.githubusercontent.com/76777058/203996688-75cfd930-0091-45c2-84b0-529bbe5ff6a0.png",
  "https://user-images.githubusercontent.com/76777058/203996704-b6676e5a-d558-408a-bbd7-baa11cd21532.png",
  "https://user-images.githubusercontent.com/76777058/203996718-eda243bd-ceaf-4c14-b858-1342ff1baea3.png",
  "https://user-images.githubusercontent.com/76777058/203996723-ebb0fdf0-24da-461b-baa0-99969a213428.png",
  "https://user-images.githubusercontent.com/76777058/203996726-31422676-b1ba-466d-baf4-7832c14b9aaf.png",
  "https://user-images.githubusercontent.com/76777058/203996735-27e3e6d7-c7d6-49cb-9b6a-8c4640a6c064.png",
  "https://user-images.githubusercontent.com/76777058/203996741-0dc9b0a5-e850-47d2-8264-996f15468bfc.png",
  "https://user-images.githubusercontent.com/76777058/203996747-6dc98b95-c78f-496b-94d9-015729cc07ab.png",
  "https://user-images.githubusercontent.com/76777058/203996751-f7a5a1c2-bb5d-4fd7-b32f-dba06a7ce439.png",
];
const metaverseImages = [
  "https://user-images.githubusercontent.com/76777058/203997058-c8f94f93-49d8-4fda-b7c0-8f115e7fd8a9.jpg",
  "https://user-images.githubusercontent.com/76777058/203997065-61e0ab0b-fdaf-4037-ac3d-19595271d4c4.jpg",
  "https://user-images.githubusercontent.com/76777058/203997067-598c3b27-0fef-4124-9704-c9a1eb604b01.jpg",
  "https://user-images.githubusercontent.com/76777058/203997073-2de0342b-d524-46dc-b7e1-d10594a5691d.jpg",
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 784,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        dot: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const LaunchpadProjectPage = () => {
  const [amount, setAmount] = useState(100);
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

  const setHandleAmount = (input) => {
    setAmount(Number(input));
  };

  const { account } = useWeb3React();

  const idoData = useMultiCall(account ? account : ZERO_ADDRESS);

  const balance = useTokenBalance(
    account ? account : ZERO_ADDRESS,
    IDO_INFO.BUSD
  );

  const approval = useApproval(amount, IDO_INFO.contractAddress, IDO_INFO.BUSD);

  const buy = useBuy(IDO_INFO.contractAddress);
  useEffect(() => {
    (async () => {
      const res = await fetch(process.env.REACT_APP_SERVER_URL + "/pool");
      const response = await res.json();
      if (response && response.success) {
        setProject((prev) => {
          return { ...prev, ...response.data };
        });
      }
    })();
  }, []);

  return (
    <>
      <div className="launchpad-page-wrapper">
        <div className="launchpad-container header-top-padding">
          <div className="top-info-wrapper">
            <section>
              <div className="section-header">
                <img src={project.image} alt="" />
                <div className="tags-wrapper">
                  <div className="tags">
                    {idoData?.isSaleStarted && (
                      <span className="tag">LIVE</span>
                    )}
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
                  <h1>{currencyFormatter(idoData.purchaseCap)}</h1>
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
              <div className="address-wrapper">
                {/* <h4>IDO SALE CONTRACT ADDRESS</h4>
                <h1>
                  {String(
                    "0x9988a784bdaea25ae2bFD5e3FC29D243F8D83b04".slice(0, 10) +
                      "..."
                  )}
                </h1> */}
              </div>
              {/* <button className="view-btn">View BSC Scan</button> */}
            </section>
            <section className="shadow-box rounded-corner">
              {idoData?.isSaleStarted && (
                <div className="live-tag-container">
                  <span className="tag">LIVE</span>
                </div>
              )}
              <div className="raised-amount-wrapper">
                <div className="info-stack ">
                  <h4>Min Allocation</h4>
                  <button className="neo-container">
                    {currencyFormatter(idoData?.minAllocation)}
                  </button>
                </div>

                <div className="info-stack ">
                  <h4>Max Allocation</h4>
                  <button className="neo-container">
                    {currencyFormatter(idoData?.maxAllocation)}
                  </button>
                </div>
                <div className="info-stack ">
                  <h4>Value</h4>
                  <button className="neo-container">
                    1 BUSD = {idoData.hyperMovePrice} HMove
                  </button>
                </div>
              </div>
              <div className="info-stack">
                <h4>Total Raised Amount</h4>
                <h1>{currencyFormatter(idoData?.totalRaised)}</h1>
              </div>
              <h4 className="start-info">
                <b>Starts:</b>
                <pre>
                  {new Date(IDO_INFO.startTime * 1000).toLocaleDateString(
                    "en-US"
                  )}
                </pre>
              </h4>
              <div className="progress-bar-wrapper">
                <h4>
                  PROGRESS <span>[{idoData?.raisedPercentage}%]</span>
                </h4>
                <div className="bar">
                  <div
                    className={`completed-bar ${hideBar && "hidden"}`}
                    style={{ width: idoData?.raisedPercentage }}
                  ></div>
                </div>
              </div>
              <InputContainer
                setProject={setProject}
                amount={amount}
                setHandleAmount={setHandleAmount}
                balance={balance}
                purchases={idoData?.userPurchases}
                approval={approval}
                buy={buy}
              />
            </section>
          </div>
          <div className="bottom-info-wrapper">
            <div className="section-heading">Token Information</div>
            <div className="info-cards-wrapper">
              <div className="info-card shadow-box rounded-corner">
                <div className="info-stack">
                  <h4>Start</h4>
                  <h1>{timeConverter(IDO_INFO.startTime)}</h1>
                </div>
              </div>
              <div className="info-card shadow-box rounded-corner">
                <div className="info-stack">
                  <h4>End</h4>
                  <h1>{timeConverter(IDO_INFO.endTime)}</h1>
                </div>
              </div>
              <div className="info-card shadow-box rounded-corner">
                <div className="info-stack">
                  <h4>Distribution</h4>
                  <h1>{IDO_INFO.distribution}%</h1>
                </div>
              </div>
              <div className="info-card shadow-box rounded-corner">
                <div className="info-stack">
                  <h4>Hardcap</h4>
                  <h1>{currencyFormatter(idoData?.purchaseCap)}</h1>
                </div>
              </div>
              <div className="info-card shadow-box rounded-corner">
                <div className="info-stack">
                  <h4>Price</h4>
                  <h1>${round(divide(1, idoData.hyperMovePrice), 3)}</h1>
                </div>
              </div>
              <div className="info-card shadow-box rounded-corner">
                <div className="info-stack">
                  <h4>Contract Address</h4>
                  <h1>{IDO_INFO.contractAddress.slice(0, 10) + "..."}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="launchpad-partner-section-wrapper">
          <PartnersSection hideFilters={true} />
        </div>
        <div className="game-slider-section">
          <h1>Hypermove NFT Game</h1>
          <Slider {...settings}>
            {NFTGameImages.map((source, i) => {
              return (
                <div key={i}>
                  <div className="slide-image-container">
                    <div className="img-wrapper">
                      <img src={source} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="game-slider-section">
          <h1>Metaverse</h1>
          <Slider {...settings}>
            {metaverseImages.map((source, i) => {
               return (
                <div key={i}>
                  <div className="slide-image-container">
                    <div className="img-wrapper">
                      <img src={source} alt="" />
                    </div>
                  </div>
                </div>
             );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};

const InputContainer = ({
  buy,
  approval,
  purchases,
  amount,
  setHandleAmount,
  balance,
}) => {
  const { active, account, chainId, activate } = useWeb3React();
  const switchChain = useSwitchNetwork();


  const tryActivate = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await activate(null);
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = () => {
    if (account && active) {
      handleLogout();
    } else {
      tryActivate();
    }
  };

  if (!active) {
    return (
      <div className="form-container">
        <button className="wallet-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
    );
  }
  if (Number(chainId) !== 97) {
    return (
      <div className="form-container">
        <button
          className="wallet-btn"
          onClick={() => {
            switchChain();
          }}
        >
          Switch Network
        </button>
      </div>
    );
  }
 return (
    <div className="form-container  ">
      <div className="deposit-details">
        <h3>Your Deposited</h3>
        <h1>{purchases}</h1>
      </div>
      <div className="wallet-balance">
        <span>Your wallet balance:</span>
        <span>{balance ? balance : 0}</span>
      </div>
      <input
        className="neo-container"
        type="number"
        value={amount ?? "0"}
        onChange={(e) => setHandleAmount(e.target.value)}
        required={true}
        min={100}
        max={5000}
      />
      <div className="approve-btn">
        <button
        className={!approval.isApprovalRequired && "approved"}
          onClick={() => approval.triggeredApproval()}
          disabled={!approval?.isApprovalRequired}
        >
          {approval.isApprovalRequired
            ? approval.isLoading
              ? "Approving..."
              : "Approve"
            : "Approved"}
        </button>
       {
        !Boolean(approval.isApprovalRequired) &&
        <>
         <button
          onClick={() => buy.buyToken(amount)}
          disabled={approval?.isApprovalRequired}
        >
          {buy.isLoading ? "Buying..." : "buy"}
        </button>
        </>
       }
      </div>
    </div>
  );
};
export default LaunchpadProjectPage;
