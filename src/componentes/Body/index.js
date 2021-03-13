import React from 'react';
import { Switch, Route } from 'react-router-dom'; 

import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Sobre from '../../pages/Sobre';

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
        </Switch>
    )
}