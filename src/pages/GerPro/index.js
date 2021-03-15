import React from 'react';

import ContextLogin from '../../context/ContextLogin';
import VerificaToken from '../../middle/verifyToken';

import './gerpro.css';

export default function GerPro(){

    return (
        <ContextLogin>
            <VerificaToken />
        </ContextLogin>
    )
}