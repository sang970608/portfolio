import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import picture from './picture.jpg';
import git from './github.jpg';
import insta from './insta.jpg';

function Home(){
  return(
    <div className="home">
      <div className="space">
      </div>
      <div className="picture">
        <img src={picture} alt="사진" className="pictureMe" />
      </div>
      <div className="intro">
        <h1>좋아하는 것에 푹 빠지는 박상원입니다 !</h1>
        <h4>웹개발자 WebDeveloper</h4>
        <p>좋아하는 것에 초콜릿같이 푹 빠지며 열심히 개발합니다</p>
        <p>현재 제가 좋아하는 것은 코딩, 게임전략짜기, 사람만나기 입니다.</p>
      </div>
      <div className="icon">
        <a href="https://github.com/sang970608" className="gitIcon" target="_blank"><img src={git} className="gitIcons" alt="github" /></a>
        <a href="https://github.com/sang970608" className="gitText" target="_blank">github</a>
      </div>
      <div className="icon">
        <a href="https://www.instagram.com/sang970608" className="instaIcon" target="_blank"><img src={insta} className="instaIcons" alt="Instagram" /></a>
        <a href="https://www.instagram.com/sang970608" className="instaText" target="_blank">Instagram</a>
      </div>
    </div>
  )
}

function About() {
  return(
    <div className="about">
      <div className="firstText">
        안녕하세요. 코딩, 전략짜기, 사람 만나기에 푹 빠져 있는 박상원입니다.
         
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="left">
        <ul>
          <li><h3><NavLink className="list" exact to="/">Home</NavLink></h3></li>
          <li><h3><NavLink className="list" to="/About">About</NavLink></h3></li>
          <li><h3><NavLink className="list" to="/Project">Project</NavLink></h3></li>
          <li><h3><NavLink className="list" to="/Contact">Contact</NavLink></h3></li>
        </ul>
      </div>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/About"><About /></Route>
        <Route path="/Project">프로젝트</Route>
        <Route path="/Contact">연락처</Route>
        <Route path="/">잘못 들어오셨습니다.</Route>
      </Switch>
    </div>
  );
}

export default App;
