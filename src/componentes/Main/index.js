
import React from 'react';

import { BrowserRouter as Router } from "react-router-dom"; 
import './main.css';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

const Main = () => {
    
    return (
        <Router>
            <div className="container-header-pri">
                <div className="container-header">
                    <h1 className="container-header-logo">
                        <a href="/">GerPro</a>
                    </h1>
                    
                    <Header />
                    
                </div>
            </div>
            <div className="container-body-pri">
                <div className="container-page">
                    <Body />
                </div>
            </div>

            <div className="container-footer-pri">
                <div className="container-footer">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default Main;