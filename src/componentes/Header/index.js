import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import './header.css';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';

const Header = () => {

    return (
        <Router>
            <div className="container-header-pri">
                <nav className="container-header">
                    <h1 className="container-header-logo">
                        <a href="/">GerPro</a>
                    </h1>
                    
                    <nav className="container-header-menu">
                        
                        <Link className="header-menu-link" to="/"><span>Início</span></Link>
                        <Link className="header-menu-link" to="/sobre"><span>Sobre nós</span></Link>
                        <Link className="header-menu-link" to="/Login"><span>Login</span></Link>
                    </nav>
                </nav>
            </div>

                <div className="container-page">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/sobre">
                            <Sobre />
                        </Route>
                    </Switch>
                </div>
        </Router>
    );
}

export default Header;
