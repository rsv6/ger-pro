import React, { createContext, useState } from 'react';

export const ContextAPI = createContext();

export default function MyContext({ children }){

    const [ terafas, setTarefas ] = useState([
        {id: 1, title: "Criar sistema de login", done: false},
        {id: 2, title: "Criat CRUD com servidor de API", done: false},
        {id: 3, title: "Criar responsividade para dispositivos em geral", done: false}
    ]);

    return (
        <ContextAPI.Provider value={{
            terafas, setTarefas
        }}>
            {children}
        </ContextAPI.Provider>
    )
}