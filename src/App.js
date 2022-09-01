import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Load CSS From Public
import './assets/css/style.css';


// Basic Layout of Site
import HeaderMenu from './partiulars/navbar';
import Sidebar from "./partiulars/sidebar";

import Home from './page/home'; 
import About from './page/about'; 
import Contact from './page/contact'; 
import Timmer from './page/timmer';
import BlogList from './components/BlogList'; 
import Blog from './page/blog';
import Register from './page/register';
import ShowFormAllData from './page/ShowFormAllData';
import Todo from "./page/todo";
import Todolist from "./page/todolist";

import TestingState from "./functional/TestingState";

function App() {
  return (
    <>
      <Router>
      <HeaderMenu />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/timmer" element={<Timmer />} />
            <Route exact path="/blog" element={<Blog blogData={BlogList} />} />
            {/* for learning only */}
            <Route exact path="/checkState" element={<TestingState/>} />
            <Route exact path="/comments" element={<Sidebar />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/formAllData" element={<ShowFormAllData />}/>
            <Route exact path="/todo" element={<Todo />}/>
            <Route excate path="/todolist" element={<Todolist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
