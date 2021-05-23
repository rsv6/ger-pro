
import React from 'react';

import { BrowserRouter as Router } from "react-router-dom"; 
import './main.css';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

const Main = () => {
    
    return (
        <Router>
          <Header />
          <Body /> 
          <Footer />
        </Router>
    );
}

export default Main;