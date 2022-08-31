


import { createContext, useContext, useState } from "react";

const defaultState={scores:[],setScores:function(d){console.log("Called the older one",d)}}
const ScoresContext=createContext(defaultState)
export const useScoresContext=()=>useContext(ScoresContext)

const Provider=({children})=>{
    const [scores,setScores]  =  useState([])
   return  <ScoresContext.Provider value={{scores,setScores}}>
        {children}
    </ScoresContext.Provider>
}
export default Provider