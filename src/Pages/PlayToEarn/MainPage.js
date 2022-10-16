import { useState } from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ReferralModal from "../../Components/ReferralModal";
import { useAuthContext } from "../../context/AuthContext";
import MarketPlace from "./MarketPlace";
import MyNFTs from "./MyNfts";
const HomePage = () => {
  const { userData } = useAuthContext();
  const timecreated = userData.timecreated;
  const [referralModal, setReferralModal] = useState(false);

  let badgeImg = "";
  let badgeName = "";
  if (timecreated > 1640975400) {
    badgeImg =
      "https://user-images.githubusercontent.com/76777058/193011572-cff0a175-231e-4a62-a3d4-fb7088d51dcc.jpg";
    badgeName = "Bronze";
  } else if (timecreated > 1609439400) {
    badgeImg =
      "https://user-images.githubusercontent.com/76777058/193011583-1ea00907-8459-4919-add2-f0cc95269194.jpg";
    badgeName = "Silver";
  } else {
    badgeImg =
      "https://user-images.githubusercontent.com/76777058/193011595-66b19e8e-b09f-44d8-8a9e-bcab5b8afa77.jpg";
    badgeName = "Gold";
  }
  return (
    <>
      <div className="profile-page">
        <div className="page-content">
          <div className="rank-info-container">
            <div className="container-header">
              <h4 className="heading">Achievements Ranking</h4>
              <Link to="/refer">Refer a friend</Link>
            </div>
            <div className="rank-info-wrapper">
              <div className="badge-container">
                <img src={badgeImg} alt="" />
              </div>
              <div className="rank-info">
                <div>
                  <div className="title">
                    <img src="./assets/images/podium.svg" alt="" />
                    <span>Badge</span>
                  </div>
                  <div className="badge-name">
                    <span>{badgeName}</span>
                  </div>
                </div>{" "}
                <div>
                  <div className="title">
                    <img src="./assets/images/ticket.svg" alt="" />
                    <span>Tickets</span>
                  </div>
                  <div className="value">
                    <span>{userData.tickets || 0}</span>
                  </div>
                </div>{" "}
                <div>
                  <div className="title">
                    <img src="./assets/images/crown.svg" alt="" />
                    <span>Gems</span>
                  </div>
                  <div className="value">
                    <span>{userData.gems || 0}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="game-container">
            <h4>Games</h4>
            <div className="games-row">
            <a href="/games/inorbit">
              <div>
                <div className="video-container">
                  <video controls={false} loop autoplay="autoplay" muted>
                    <source src="./assets/movs/inorbit.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="title-container">
                    <h2>In Orbit</h2>
                  </div>
                </div>
              </div>
              </a>
              <div>Coming Soon</div>
              <div>Coming Soon</div>
              <div>Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
      <ReferralModal isOpen={referralModal} setIsOpen={setReferralModal} />
    </>
  );
};
const ComingSoon = () => {
  return (
    <div className="coming-soon-section">
      <h1>Coming Soon...</h1>
    </div>
  );
};
const SideNavBar = ({ isOpen }) => {
  const navLinks = [
    {
      text: "Home",
      image: "",
      href: "/play-to-earn",
    },
    {
      text: "Play Game",
      image: "",
      href: "/play-to-earn/play",
    },
    {
      text: "NFT Farming",
      image: "",
      href: "/play-to-earn/farm",
    },
    {
      text: "MarketPlace",
      image: "",
      href: "/play-to-earn/marketplace",
    },
    {
      text: "My NFTs",
      image: "",
      href: "/play-to-earn/nft",
    },
  ];
  return (
    <div className={`pte-sidebar ${isOpen && "open"}`}>
      <div className="btns-wrapper">
        {navLinks.map((l) => {
          const { text, href } = l;
          return (
            <NavLink
              end={true}
              to={href}
              className={({ isActive }) => {
                return isActive && "active";
              }}
            >
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
const MainPage = () => {
  const [isNavOpen, setNav] = useState(false);
  return (
    <>
      <div
        className="sub-nav-menu-btn"
        onClick={() => {
          setNav((prev) => !prev);
        }}
      >
        <img
          src={
            isNavOpen
              ? "./assets/images/white-cross.svg"
              : "./assets/images/white-menu.svg"
          }
          alt=""
        />
      </div>
      <SideNavBar isOpen={isNavOpen} />
      <div className="pte-mainpage-content">
        <div className="content-wrapper">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="play" element={<ComingSoon />} />
            <Route path="farm" element={<ComingSoon />} />
            <Route path="marketplace" element={<MarketPlace />} />
            <Route path="nft" element={<MyNFTs />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default MainPage;
