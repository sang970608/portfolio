import React from 'react';
import './project.css';
import bgm from './bgm.PNG';
import escape from './escape.png';
import movie from './movie.JPG';

function Project() {
    return(
      <div className="project">
        <div className="projectText">
          <h2>상원이의 흔적들</h2>
        </div>
        <div className="projectImg">
         <div className="firstProject">
           <a href="https://nore.shop" className="bgmtool" target="_blank" >
           <img src={bgm} alt="브금 사이트" className="bgm" title="bgm site" /></a>
           <div className="proText">
             <div className="proInfo">
              <h3>BGM ON (2020.06.08 ~ 2020.06.20)</h3>
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
            <a href="https://sang970608.github.io/movie_app" target="_blank">
            <img src={movie} alt="영화 목록" className="movie" title="영화 목록" /></a>
            <div className="proText">
              <div className="proInfo">
                <h3>영화 리스트 (2020.06.20 ~ 2020.07.08)</h3>
                영화 API를 가져와서 보고싶은걸 찾자 !
              </div>
              <div className="proDev">
                <strong>나의 역할</strong>
                <br />
                퍼블리싱
                <br />
                API사용
              </div>
            </div>
          </div>
          <div className="thirdProject">
            <a href="https://github.com/sang970608/escape" target="_blank">
            <img src={escape} alt="방탈출" className="escape" title="escape site" /></a>
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
          <div className="fullPro" />
        </div>
      </div>
  )
}
  
export default Project;