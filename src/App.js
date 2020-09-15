import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import Home from './home/Home.js';
import About from './about/About.js';
import Project from './project/Project.js';
import Contact from './contact/Contact.js';
import Footer from './Footer.js';
import cat from './cat.gif';

function Loading () {
  return(
    <div className="Loading">
      <img src={cat} alt="Now Loading" title="Loading" className="LoadingImg" />
      <div className="LoadingText">
        <p>박상원의 포트폴리오</p>
        <p>Now Loading</p>
      </div>
    </div>
  )
} 

function Body () {
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

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    setTimeout(()=> {
      this.setState({isLoading: false});
    }, 3000);
  }
  render(){
    const {isLoading} = this.state;
    return (
      <div className="App">
        {isLoading ? <Loading /> : <Body />}
      </div>
    );
  }
}

export default App;
