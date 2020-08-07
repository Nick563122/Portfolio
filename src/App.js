import React from 'react';
import {HashRouter, Route} from 'react-router-dom';

import './App.css';
import Home from "./components/Home"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"
import ContactPage from "./components/contact-page";
import Projects from "./components/Projects";
import PacMan from "./components/PacMan";

  function App() {
    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Navbar />
          
          <div className="contnet-section">
            <Route exact path="/" component={Home}/>
            <Route path="/Main" component={Main}/>
            <Route path="/contact-page" component={ContactPage}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/PacMan" component={PacMan}/>
          </div>

            <Footer />
        </div>
      </HashRouter> 
    );
  }

export default App;
