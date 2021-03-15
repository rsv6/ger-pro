import react, { useContext } from 'react';

import { Route, Redirect } from 'react-router-dom';
import './erro.css';

export default function Erro(){


    const renderIndex = () => {
    
        alert("Acesso negado, login obrigatório!!!");

        return  <Route>
                    <Redirect to="/" /> 
                </Route>    
    }

    const logged = false;

    return (
        <>       
            {!logged && renderIndex()}
        </>
    )
}