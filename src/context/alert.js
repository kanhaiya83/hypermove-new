


import { createContext, useContext, useState } from "react";

const defaultState={show:false,message:""}
const AlertContext=createContext({alert:defaultState,setAlert:()=>{}})
export const useAlertContext=()=>useContext(AlertContext)

const AlertProvider=({children})=>{
    const [alert,setAlert]  =  useState(defaultState)
   return  <AlertContext.Provider value={{alert,setAlert}}>
        {children}
    </AlertContext.Provider>
}
export default AlertProvider