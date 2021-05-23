import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

import MyContext from "./context/MyContext"
import Header from "./componentes/Header"
import Body from "./componentes/Body"
import Footer from "./componentes/Footer"
// import Main from './componentes/Main';

function App() {

  return (
    <div className="app-content">
      <MyContext>
        <Router>
          <div className="app-header">
            <Header />
          </div>
          <Body />
          <div className="app-footer">
            <Footer />
          </div>
        </Router>
      </MyContext>
    </div>
  );
}

export default App;
