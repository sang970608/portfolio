import React from 'react';
import './App.css';
import {Route, Switch, NavLink} from 'react-router-dom';
import picture from './취업사진.jpg';
import git from './github.jpg';
import insta from './insta.jpg';
import Html from './html.png';
import Css from './css.png';
import Js from './js.jpg';
import reacts from './react.png';
import bgm from './bgm.PNG';
import escape from './escape.png';
import bucheon from './bucheon.jpg'


function Home(){
  return(
    <div className="home">
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
      <div className="aboutText">
        <h1>About Me</h1>
        <strong>밝은 연구자</strong>
        <div className="aboutPre">
          <div className="aboutPre1">
          안녕하세요, 저는 좋은 친화력을 가졌으며 긍적적인 마인드를 잘 유지하는 <strong>밝은</strong> 박상원입니다.
          </div>
          <div className="aboutPre2">
          또한 혼자 연구하고 생각하며 독창적인 생각을 하는 것을 특기로 하는 <strong>연구자</strong>입니다.
          </div>
        </div>
      </div>
      <h2 className="aboutSkillText">My Skills</h2>
      <div className="aboutSkill">
        <div className="skill">
          <img src={Html} alt="HTML" className="skillImg" />
          <p className="skillText">HTML</p>
        </div>
        <div className="skill">
          <img src={Css} alt="CSS" className="skillImg" />
          <p className="skillText">CSS</p>
        </div>
        <div className="skill">
          <img src={Js} alt="JavaScript" className="skillImg" />
          <p className="skillText">JavaScript</p>
        </div>
        <div className="skill">
          <img src={reacts} alt="React" className="skillImg" />
          <p className="skillText">React</p>
        </div>
        
      </div>
    </div>
  )
}

function Project() {
  return(
    <div className="project">
      <div className="projectText">
        <h2>상원이의 흔적들</h2>
      </div>
      <div className="projectImg">
       <div className="firstProject">
         <a href="https://github.com/sang970608/bgm" target="_blank" >
         <img src={bgm} alt="브금 사이트" className="bgm" /></a>
         <div className="proText">
          <div className="proInfo">
            <h3>BGM ON</h3>
            게임 도중에 듣고 싶은 노래를
            바로 듣자!
           </div>
           <div className="proDev">
             <strong>나의 역할</strong>
             <br />
             디자인
             <br />
             퍼블리싱
             <br />
             유튜브 링크 사용
           </div>
         </div>
         
       </div>
        <div className="secondProject">
          <a href="https://github.com/sang970608/escape" target="_blank">
          <img src={escape} alt="방탈출" className="escape" /></a>
          <div className="proText">
            <div className="proInfo">
              <h3>학교 탈출 !</h3>
              학교를 탈출하면서 정보보안 및 정처기 문제를 풀자!
            </div>
            <div className="proDev">
              <strong>나의 역할</strong>
              <br />
              메뉴 및 게임화면 개발
              <br />
              로그인 화면 개발
              <br />
              소셜 로그인 api 사용
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Contact() {
  return(
    <div className="contact">
      <div className="contactSub">
        <h1 className="contactH1">Contact</h1>
      </div>
      <div className="card">
        <div className="cardLeft">
          <strong>박상원 Park Sang Won</strong> | student<br />
          MOBILE : 010-6510-0608<br />
          EMAIL : <a className="contactLink" href="mailto:sang970608@naver.com?Subject=포트폴리오보고 연락드립니다.">
          <strong>sang970608@naver.com</strong></a><br />
          Insta : <a className="contactLink" href="https://www.instagram.com/sang970608/" >
          <strong>@sang970608</strong></a><br />
          <hr /><br />
          통화 가능 시간  <strong>11:00 ~ 23:00</strong>
        </div>
        <div className="cardRight">
          <img src={bucheon} alt="학교아이콘" className="cardImg" />
        </div>
      </div>
      <div className="full"></div>
    </div>
  )
}

function Footer() {
  return(
    <div className="footer">
      <div className="footerFirst">
        designed & build by SangWon Park at 2020
      </div>
      <div className="footerSecond">
        stacks used
      </div>
      <div className="footerStrong">
        <strong>React.js | SPA</strong>
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
        <Route path="/Project"><Project /></Route>
        <Route path="/Contact"><Contact /></Route>
        <Route path="/">잘못 들어오셨습니다.</Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
