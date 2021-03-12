import React from 'react';

import './login.css';

const Login = () => {

    return (
        <form className="container-login">

            <div className="login-titulo">
                <span>Login | GerPro</span>
            </div>

            <div className="login-input">
                <input type="text" placeholder="Digite seu login" />
                <input type="password" placeholder="Digite sua senha" />
            </div>

            <div className="login-botoes">
                <div onClick={() => {alert("Logado!")}} className="btn" id="btnLogar">
                    <span>Logar</span>    
                </div>
                <div onClick={() => {alert("Cancelado!")}} className="btn" id="btnCancelar">
                    <span>Cancelar</span>
                </div>
            </div>
        </form>
    )
}

export default Login;