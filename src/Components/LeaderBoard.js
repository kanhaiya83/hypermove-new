import React, { useEffect, useState } from "react";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useScoresContext } from "../context/leaderBoard";
const formatName=(name)=>{
  if(name.split(" ")[0].length > 8){
    return name.split(" ")[0].substring(0, 8) + ".."
  }
  return name.split(" ")[0]

}
const LeaderBoardCard = (props) => {
  const context = useScoresContext();
  const { scores, setScores } = context;
  const podiumContainerContent=<>
      {
        scores.length > 3?
        <>
        <div className="podium-wrapper">
          <div className="third-place-podium">
            <span  className="podium-name" >{formatName(scores[2].name)}</span>
            <span  className="podium-score" > {scores[2].score}</span>
            <div className="podium"><span>3</span></div>
          </div>
          <div className="first-place-podium">
            <span  className="podium-name" >{formatName(scores[0].name)}</span>
            <span  className="podium-score" > {scores[0].score}</span>
            <div className="podium"><span>1</span></div>
          </div>
          <div className="second-place-podium">
            <span  className="podium-name" >{formatName(scores[1].name)}</span>
            <span  className="podium-score" > {scores[1].score}</span>
            <div className="podium"><span>2</span></div>
          </div>
        </div>
        </>
        :
        <></>
      }
  </>
  const scoresToList=scores.length > 3 ? scores.slice(3,scores.length) : scores.slice(0,scores.length) 
  console.warn({scores,scoresToList})
  const scoresList =
    scores.length > 0 ? (
      <>
      <div className="podium-container">
{podiumContainerContent}
      </div>
      <SimpleBar className="scores-list" style={{maxHeight:"250px"}}>
     <table className="table table-dark table-striped table-hover table-sm table-responsive">
        <thead>
          <tr className="score-row bold">
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
            <th colSpan={2}>Wallet</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {scoresToList.map((sc, i) => {
            return (
              <tr className="score-row">
                <td className="number">{scores.length > 3 ? i+4 : i+1}</td>
                <td className="name">{sc.name.substring(0, 6) + ".."}</td>
                <td>{sc.score}</td>
                <td colSpan={2} className="wallet-address">
                  {sc.walletAddress}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </SimpleBar></>
    ) : (
      <h2>No scores available</h2>
    );
  // console.log({scoresList});
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(process.env.REACT_APP_SERVER_URL + "/score");
        const resData = await res.json();
        if (resData.success) {
          const sortedScores = resData.scores.sort((a, b) => {
            return parseInt(b.score) - parseInt(a.score);
          });
          console.log(sortedScores);
          setScores(sortedScores);
        }
      } catch (e) {}
    })();
  }, []);

  return (
    <>
      <div className="leaderboard-container rounded-3">{scoresList}</div>
    </>
  );
};

export default LeaderBoardCard;
