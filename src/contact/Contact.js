import React from 'react';
import './contact.css';
import bucheon from './bucheon.jpg'

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

export default Contact;