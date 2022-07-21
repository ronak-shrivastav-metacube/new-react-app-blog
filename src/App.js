import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Load CSS From Public
import './assets/css/style.css';


// Basic Layout of Site
import HeaderMenu from './partiulars/navbar';

import Home from './page/home'; 
import About from './page/about'; 
import Contact from './page/contact'; 



function App() {
  return (
    <>
      <Router>
      <HeaderMenu />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
