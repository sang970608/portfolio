import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './home/Home.js';
import About from './about/About.js';
import Project from './project/Project.js';
import Contact from './contact/Contact.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <div className="left">
        <input type="checkbox" id="menuicon" />
        <label for="menuicon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="menu">
          <li><h3><NavLink className="list" exact to="/">Home</NavLink></h3></li>
          <li><h3><NavLink className="list" to="/About">About</NavLink></h3></li>
          <li><h3><NavLink className="list" to="/Project">Project</NavLink></h3></li>
          <li><h3><NavLink className="list" to="/Contact">Contact</NavLink></h3></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/About"><About /></Route>
        <Route path="/Project"><Project /></Route>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/">잘못 들어오셨습니다.</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
