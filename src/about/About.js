import React from 'react';
import './about.css';
import Html from './html.png';
import Css from './css.png';
import Js from './js.jpg';
import reacts from './react.png';

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
          <div className="skillFirst">
            <div className="skill">
              <img src={Html} alt="HTML" className="skillImg" title="expert"/>
              <p className="skillText">HTML</p>
            </div>
            <div className="skill">
              <img src={Css} alt="CSS" className="skillImg" title="expert" />
              <p className="skillText">CSS</p>
            </div>
          </div>
          <div className="skillSecond">
            <div className="skill">
              <img src={Js} alt="JavaScript" className="skillImg" title="intermediate" />
              <p className="skillText">JavaScript</p>
            </div>
            <div className="skill">
              <img src={reacts} alt="React" className="skillImg" title="intermediate" />
              <p className="skillText">React</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default About;