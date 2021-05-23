import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => {

    return (
        <footer className="container-footer">
          <div className="footer-1">
              <div className="footer-1-cont">
                  <p>Todo o acesso ao consumo da api será
                      registrado em nosso banco de dados e total responsabilidade do servidor
                      de autenticacao do mesmo que provem.
                  </p>
              </div>
              <div className="footer-2-cont">
                  <ul>
                      <li>
                        <Link to="/">Início</Link>
                      </li>
                      <li>
                        <Link to="/Login">Login</Link>
                      </li>
                      <li>
                        <Link to="/sobre">Sobre</Link>
                      </li>
                  </ul>
              </div>
          </div>
          <div className="footer-2">
              <p>&reg; 2021 | All right reserved by <a href="http://rsv6.com"  >@rsv6.</a></p>
          </div>
        </footer>
    )
}

export default Footer;