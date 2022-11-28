import React, { useEffect, useState } from "react";
import { successToast, errorToast } from "../../utils/toast";
import PartnersSection from "../Home/PartnersSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { UnsupportedChainIdError } from "@web3-react/core";

import { useApproval } from "../../hooks/useApproval";
import { useWeb3React } from "@web3-react/core";
import { useMultiCall, useIdoInfo } from "../../hooks/useMulticall";
import { ZERO_ADDRESS, currencyFormatter, timeConverter } from "../../utils";
import { IDO_INFO } from "../../constants/idoInfo";
import { useTokenBalance } from "../../hooks/useTokenBalance";
import { useBuy } from "../../hooks/useBuy";
import { injected } from "../../connector";
import { useSwitchNetwork } from "../../hooks/useSwitchNetwork";
import { divide, round } from "lodash";
import {
  socialMediaHandles,
  NFTGameImages,
  metaverseImages,
} from "../../assets";
import { useClaim } from "../../hooks/useClaim";
import CSSLoader from "../../Components/CSSLoader";

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
  const { claimToken } = useClaim();
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

  const idoData = useIdoInfo();
const isFetching = idoData.isFetching;
  const balance = useTokenBalance(
    account ? account : ZERO_ADDRESS,
    IDO_INFO.BUSD
  );

  const approval = useApproval(amount, IDO_INFO.contractAddress, IDO_INFO.BUSD);
  const tokenValue = idoData?.userPurchases * idoData?.hyperMovePrice || 0;
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
                  href={socialMediaHandles.twitter}
                  rel="noreferer"
                  target="_blank"
                >
                  <img src="/assets/images/icons/twitter.svg" alt="" />
                </a>
                <a
                  className="social-btn"
                  href={socialMediaHandles.discord}
                  target="_blank"
                  rel="noreferer"
                >
                  <img src="/assets/images/icons/discord.svg" alt="" />
                </a>
                <a
                  className="social-btn"
                  href={socialMediaHandles.telegram}
                  target="_blank"
                  rel="noreferer"
                >
                  <img src="/assets/images/icons/telegram.svg" alt="" />
                </a>
                <a
                  className="social-btn"
                  href={socialMediaHandles.medium}
                  target="_blank"
                  rel="noreferer"
                >
                  <img src="/assets/images/icons/medium.svg" alt="" />
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
            <section className="shadow-box rounded-corner right-box">
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
             {!idoData.isSaleEnd && <InputContainer
                setProject={setProject}
                amount={amount}
                setHandleAmount={setHandleAmount}
                balance={balance}
                purchases={idoData?.userPurchases}
                approval={approval}
                buy={buy}
              />}
              <CongratulationWrapper
                claimToken={claimToken}
                isClaimable={idoData?.isClaimable}
                purchases={idoData?.userPurchases}
                tokenValue={tokenValue}
              />
              <div className={`loader-wrapper ${isFetching && "show"}`}>
                <div className="loader-container">

               <CSSLoader/>
              </div>
          
              </div>
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
                <div className="info-stack small">
                  <h4>Distribution</h4>
                  <h1>
                  10% at TGE then 1 Month Cliff then  9 linear Month Vesting
                  </h1>
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

const CongratulationWrapper = ({ tokenValue, isClaimable, claimToken , purchases }) => {
  if(!purchases || purchases === 0){
    return <></>;
  }
  return (
    <>
      <div className="congratulations-wrapper">
        <span>You have successfully invested </span>
        <span className="val">{purchases || 0} BUSD</span>
        <span> equivalent to </span>
        <span className="val">{tokenValue || 0} HMOVE</span>
        {isClaimable && (
          <>
            <div className="claim-btn-wrapper">
              <span>
                 Claim your HMOVE here
              </span>
              <button className="claim-btn" onClick={() => claimToken()} disabled={!isClaimable}>
                Claim
              </button>
            </div>
          </>
        )}
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
  const { active, account, chainId, activate, error } = useWeb3React();
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

  if (!active && !account && !(error instanceof UnsupportedChainIdError)) {
    return (
      <div className="form-container">
        <button className="wallet-btn" onClick={connectWallet}>
          Connect Wallet
        </button>
      </div>
    );
  }
  if (error instanceof UnsupportedChainIdError) {
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
        {!Boolean(approval.isApprovalRequired) && (
          <>
            <button
              onClick={() => buy.buyToken(amount)}
              disabled={approval?.isApprovalRequired}
            >
              {buy.isLoading ? "Buying..." : "buy"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
export default LaunchpadProjectPage;
