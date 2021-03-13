import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function Menu(){

    return (
        <Fragment>
            <Link className="header-menu-link" to="/"><span>Início</span></Link>
            <Link className="header-menu-link" to="/sobre"><span>Sobre</span></Link>
            <Link className="header-menu-link" to="/Login"><span>Login</span></Link>
        </Fragment>
    )
}
