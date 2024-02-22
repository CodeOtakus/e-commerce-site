import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    currentUser:[],
    SetCurrentUser:()=>{},
    userToken:null,
    SetUserToken:()=>{}
})


export const ContextProvider =({children})=>{

    const[currentUser, SetCurrentUser] = useState([])
    const [userToken, SetUserToken] = useState('1234')



    return (
        <StateContext.Provider value={{
            currentUser,
            SetCurrentUser,
            userToken,
            SetUserToken
        }}>
            {children}
        </StateContext.Provider>
    )
}


export const userStateContext =() =>useContext(StateContext)