import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';
import GerPro from '../../pages/GerPro';

export default function Body(){

    return (
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
            <Route path="/gerpro">
                <GerPro />
            </Route>
        </Switch>
    )
}