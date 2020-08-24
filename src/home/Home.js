import React from 'react';
import './home.css';
import picture from './employ.jpg';
import git from './github.jpg';
import insta from './insta.jpg';

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
        <div className="iconGroup">
          <div className="icon">
            <a href="https://github.com/sang970608" className="gitIcon" target="_blank"><img src={git} className="gitIcons" alt="github" title="github" /></a>
            <div className="homeText"><a href="https://github.com/sang970608" className="gitText" target="_blank">github</a></div>
          </div>
          <div className="icon">
            <a href="https://www.instagram.com/sang970608" className="instaIcon" target="_blank"><img src={insta} className="instaIcons" alt="Instagram" title="Instagram" /></a>
            <div className="homeText"><a href="https://www.instagram.com/sang970608" className="instaText" target="_blank">Instagram</a></div>
          </div>
        </div>
      </div>
    )
}

export default Home;