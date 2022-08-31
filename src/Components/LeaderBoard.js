import React, { useEffect, useState } from 'react';
import { useScoresContext } from '../context/leaderBoard';

const LeaderBoardCard = (props) => {

  const context= useScoresContext()
  const {scores,setScores}=context;
  console.warn({scores,setScores})
const scoresList=
scores.length>0 ?
<table><tbody><tr className="score-row bold">
    
  <th>Rank</th>
    <th>Name</th>
    <th>Score</th>
    <th>Wallet</th>
  </tr>{
  
scores.map((sc,i)=>{
 return   <tr className="score-row">
      <td className="number">{i+1}</td>
      <td className="name">{sc.name}</td>
      <td >{sc.score}</td>
      <td className="wallet-address">{sc.walletAddress}</td>
    </tr>
  
})
}</tbody></table> : <h2>No scores available</h2>
console.log({scoresList});
  useEffect(()=>{
    (async ()=>{
      try{
        const res=await fetch(process.env.REACT_APP_SERVER_URL + "/score")
        const resData=await res.json()
        if(resData.success){
          const sortedScores=resData.scores.sort((a,b)=>{
            return ( parseInt(b.score) - parseInt(a.score))
          })
          console.log(sortedScores)
          setScores(sortedScores)
        }
      
      }
      catch(e){}
    })()
  },[])

return(
  <>

<div className="leaderboard-container rounded-3">
  {scoresList}
</div>


</>

    )
}

    export default LeaderBoardCard;