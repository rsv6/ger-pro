import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './header.css';

export default function Menu(){

    return (
        <nav className="header-menu">
            <Link className="header-menu-link" to="/"><span>Início</span></Link>
            <Link className="header-menu-link" to="/sobre"><span>Sobre</span></Link>
            <Link className="header-menu-link" to="/Login"><span>Login</span></Link>
        </nav>
    )
}
