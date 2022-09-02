import { useState, useEffect } from 'react'

import cubeRunLogo from '../../textures/cuberun-logo.png'

import '../../styles/gameMenu.css'

import { resetMutation, useStore } from '../../state/useStore'
import { useScoresContext } from '../../../../../context/leaderBoard'
import { useAlertContext } from '../../../../../context/alert'
const GameOverScreen = ({setShowGame}) => {
  const previousScores = localStorage.getItem('highscores') ? JSON.parse(localStorage.getItem('highscores')) : [...Array(3).fill(0)]
  const [shown, setShown] = useState(false)
  const [opaque, setOpaque] = useState(false)
  const [highScores, setHighscores] = useState(previousScores)
const [showLoader,setShowLoader]=useState(false)
const [isSubmitted,setIsSubmitted]=useState(false)
  const gameOver = useStore(s => s.gameOver)
  const score = useStore(s => s.score)
  const {set}= useStore()

  const {setAlert}=useAlertContext()
const {setScores}=useScoresContext()
  useEffect(() => {
    let t
    if (gameOver !== opaque) t = setTimeout(() => setOpaque(gameOver), 500)
    return () => clearTimeout(t)
  }, [gameOver, opaque])

  useEffect(() => {
    if (gameOver) {
      setShown(true)
    } else {
      setShown(false)
    }
  }, [gameOver])

  useEffect(() => {
    if (gameOver) {
      if (highScores.some(previousScore => score > previousScore)) {
        const sortedScores = highScores.sort((a, b) => a - b)
        sortedScores[0] = score.toFixed(0)
        const resortedScores = sortedScores.sort((a, b) => b - a)

        setHighscores(resortedScores)
        localStorage.setItem('highscores', JSON.stringify(resortedScores))
      }
    }
  }, [gameOver, highScores, score])

  const handleRestart = () => { 
    setShowGame(false)
    set(prev=>{
      return { ...prev,score:0,level:0,gameOver:false,gameStarted:false, isSpeedingUp: false,hasInteracted: false}
    })
    resetMutation()
    
  }
  const showAlert=(msg)=>{
    setAlert({show:true,message:msg})
  }
const handleSubmit=async (e)=>{
  e.preventDefault()
  if(showLoader || isSubmitted)return;
  setShowLoader(true)
  const formData={}
  formData.name=e.target["game-name"].value.trim().length >0 ? e.target["game-name"].value.trim() : "Unknown"
  formData.walletAddress=e.target["game-wallet-address"].value.trim().length >0 ? e.target["game-wallet-address"].value.trim() : "Unknown"
  formData.score=parseInt(score);

 try{ const res=await fetch(process.env.REACT_APP_SERVER_URL+"/score",{
    method:"POST",
    body:JSON.stringify(formData),
    headers:{
      "Content-Type":"application/json"
    }

  })
  if(!res || !res.ok){
    setShowLoader(false)
    showAlert("Some error occurred!")
  }
  const response=await res.json()
  console.log(response)
  if(response.success){
    setScores(prev=>{
      let temp=[...prev,response.score]

      const sortedScores=temp.sort((a,b)=>{
        return ( parseInt(b.score) - parseInt(a.score))
      })
      return sortedScores
    })
    setIsSubmitted(true)
    setShowLoader(false)
    return;
  }
  else if(response.success == false){
    if(response.message){
    showAlert(response.message)
    setShowLoader(false)
    
  }
  else{
    showAlert("Some error occurred!")

    setShowLoader(false)
  }
}}
catch(e){
  showAlert("Some error occurred!")
  setShowLoader(false)
}
}
  return shown ? (
    <div className="game__container" style={{ opacity: shown ? 1 : 0, background: opaque ? '#141622FF' : '#141622CC' }}>
      <div className="game__menu">
        <h1 className="game__score-gameover">GAME OVER</h1>
        <div className="game__scorecontainer">
          <div className="game__score-left">
            <h1 className="game__score-title">SCORE</h1>
            <h1 className="game__score">{parseInt(score)}</h1>
          </div>
         
        </div>
      {isSubmitted ?
      <>
        <h3 className="submit-info">Successfully Submitted</h3>
        <button className="game__menu-button" onClick={handleRestart}>Restart</button></>
      :  <div className="cuberun-from-container">
          <h1>Fill to Participate:</h1>
          <form onSubmit={handleSubmit}>
            <div className="game-form-control">
              
            <label htmlFor="game-name">Name</label>
            <input type="text" name="game-name"/>
            </div>
            <div className="game-form-control">
              
            <label htmlFor="game-wallet-address">Wallet Address</label>
            <input type="text" name="game-wallet-address" minLength="16" maxLength="42"/>
            </div>
            <button role="submit">{showLoader?"Loading..":"Submit"}</button>
          </form>
        </div>}
        {/* <button onClick={handleRestart} className="game__menu-button">RESTART</button> */}
      </div>
    </div>
  ) : null
}

export default GameOverScreen