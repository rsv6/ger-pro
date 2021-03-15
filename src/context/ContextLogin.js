import React, { createContext, useState } from 'react';

export const ContextToken = createContext();

export default function ContextLogin({ children }){

    const [ loginToken, setLoginToken ] = useState([
        {
            login: "",
            senha: "",
            token: false
        }
    ]);

    return (
        <ContextToken.Provider value={{
            loginToken, setLoginToken
        }}>
            { children }
        </ContextToken.Provider>
    )
}
