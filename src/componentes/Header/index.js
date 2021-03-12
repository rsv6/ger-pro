import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import './header.css';

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';

const Header = () => {

    return (
        <Router>

            <nav className="container-main">
                <h1 className="">
                    <a href="/">GerPro</a>
                </h1>
                
                <nav className="">
                    
                    <Link className="" to="/">Início</Link>
                    <Link className="" to="/sobre">Sobre nós</Link>
                    <Link className="" to="/Login">Login</Link>
                </nav>
            </nav>

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


        </Router>

    );
}

export default Header;
