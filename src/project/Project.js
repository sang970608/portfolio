import React from 'react';
import './project.css';
import bgm from './bgm.PNG';
import escape from './escape.png';

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
              <h3>BGM ON (2020.06.20 ~ 2020.07.04)</h3>
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
                <h3>학교 탈출 ! (2020.08.08 ~ 진행 중)</h3>
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
  
export default Project;