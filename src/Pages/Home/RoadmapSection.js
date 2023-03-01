import { Container } from "react-bootstrap";
import "./RoadmapSection.scss";
const data = [
  {
    heading: "Q3 2022",
    content: `Research on Web3 gaming
    Idea and conceptualisation
    Core team building
    Launch social handles
    Releasing tokenomics
    Pre seed round complete
    `,
    borderColor:"#EA1D69"
  },
  {
    heading: "Q4 2022",
    content: `AAA game designing
  Growing users on social media
  WebGL version launch 
  On-boarding advisors`,
  borderColor:"#7A2BBB"
  },
  {
    heading: "Q1 2023",
    content: `Release alpha version of game
  Gain live users on the game
  Custom character and skins building
  Arranging tournaments
  Private round complete`,
  borderColor:"#7A2BBB"
  },
  {
    heading: "Q2 2023",
    content: `
  Mobile version beta testing
  Launching three hyper casual games
  Game testing rewards and airdrops
  Token generation event`,
  borderColor:"#2B228A"
  },
  {
    heading: "Q3 2023",
    content: `NFT launch and INO
  Renting portal pass
  NFT marketplace launch
  Mobile version final launch
  Move to earn beta testing`,
  borderColor:"#7A2BBB"
  },
  {
    heading: "Q4 2023",
    content: `Move to earn launch
  New roadmap launch`,
  borderColor:"#2B228A"
  },
];
const RoadmapSection = () => {
  return (
    <>
     
      <Container fluid={true} style={{paddingRight:0,paddingLeft:0}}>
        <div class="rm-section">
        <div className="waves-image-wrapper">
        <img src="./assets/images/waves.svg" alt="" />
      </div>
          <h1 class="rm-section-heading">ROADMAP</h1>
          <div class="rm-steps-wrapper">
            {data.map((d, i) => {
              return <Step key={i} data={d} index={i} />;
            })}
          </div>
        </div>
      </Container>
    </>
  );
};
const Step = ({ data, index }) => {
  return (
    <div class={`rm-step rm-step-${(index + 1) % 2 ? "odd" : "even"}`}>
      <div class="rm-step-wrapper">
        <h1 style={{borderColor:data.borderColor}}>
          {data.heading}
          <span></span>
          <span></span>
        </h1>
        <div class="line"></div>
        <p>{data.content}</p>
      </div>
    </div>
  );
};
export default RoadmapSection;
