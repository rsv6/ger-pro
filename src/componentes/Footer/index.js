import React from 'react';

import './footer.css';

const Footer = () => {

    return (
        <footer className="container-footer">
            <div className="footer">
                <div className="footer-1">
                    <div className="footer-1-cont">
                        <p>Todo o acesso ao consumo da api será
                            registrado no nosso banco de dados
                            com; usuário, data, horário. 
                        </p>
                    </div>
                    <div className="footer-2-cont">
                        <p>Link:</p>
                        <ul>
                            <li>Home</li>
                            <li>Sobre</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-2">
                    <p>&reg; Todos os direitos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;