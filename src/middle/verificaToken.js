import React, { useContext } from 'react';

import { ContextToken } from '../context/ContextLogin';

import UserGerPro from '../pages/UserGerPro';
import Erro from '../pages/Erro';

export default function VerificaToken(){

    const { loginToken } = useContext(ContextToken);

    return (
        <div>
            {loginToken
                ? <UserGerPro />
                : <Erro />  
            }
        </div>
    )
}