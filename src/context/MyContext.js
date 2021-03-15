import React, { createContext, useState } from 'react';

export const ContextAPI = createContext();

export default function MyContext({ children }){

    const [ terafas, setTarefas ] = useState([]);
    const [ msgLogin, setMsgLogin ] = useState("");

    return (
        <ContextAPI.Provider value={{
            terafas, setTarefas,
            msgLogin, setMsgLogin
        }}>
            {children}
        </ContextAPI.Provider>
    )
}