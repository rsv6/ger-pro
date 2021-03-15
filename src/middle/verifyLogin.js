import React, { useContext } from 'react';
import { ContextToken } from '../context/ContextLogin';



export default function VerifyLogin(){

    const { loginToken, setLoginToken } = useContext(ContextToken);

    return (
        <div>

        </div>
    )
}