import React from 'react';
import { Parallax } from 'react-scroll-parallax';


function scrollToPage(pageSelector) {
  const goToPage = document.querySelector(pageSelector);
  const toElement = (element) => {
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  toElement(goToPage);
}
const HeaderParallax = () => (

  <Parallax
    className="parallax-container2"
    offsetYMax={20}
    offsetYMin={-20}
    slowerScrollRate
    tag="figure"
  ><style jsx>{`

    .header-main-content {
      text-shadow: 1px 1px 1px black;
      width: 82vw;
      max-width: 650px;
      background: linear-gradient(217deg,#ff021936,rgba(0, 0, 0, 0.2) 27.71%),linear-gradient(127deg,rgba(50,57,132,0.06),rgba(3, 169, 244, 0.45) 70.71%),linear-gradient(197deg,rgba(125, 30, 156, 0.37),rgba(0, 0, 0, 0.28) 81.71%),linear-gradient(389deg,rgba(0, 149, 236, 0.43),rgba(0,255,0,0) 41.71%);
      box-shadow: 6px 6px 13px 0px #000000ad;
      display: flex;
      flex-direction: column;
      padding: 5%;
      animation: opacity-change-2 1.5s ease-out, box-shadow-glow 1.5s ease-out;
    }
    @keyframes opacity-change-2 {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    @keyframes box-shadow-glow {
      0% {
        box-shadow: 0px 1px 1px 0px #0d0e0e4a;
      }
      50% {
        box-shadow: 0px 1px 1px 0px #0d0e0e4a;
      }
      100% {
        box-shadow: 6px 6px 13px 0px #000000ad;
      }
    }
    .title-text, .tagline {
    }
    .title-text {
      font-family: 'Josefin Sans', sans-serif;
      text-decoration: none;
      text-align: center;
      color: #fff9f0;
      text-shadow: 3px 3px 5px black;
      letter-spacing: 13px;
      font-size: 60px;
    }
    .tagline {
      text-align: center;
      color: black;
      font-weight: bold;
      font-family: 'Work Sans', sans-serif;
      text-shadow: .5px .5px 1px white;
      font-size: 40px;
    }
    .link-line {
      margin-top: 5%;
      display: flex;
      justify-content: space-around;
      position: sticky;
    }
    .nav-links {
      font-family: 'Josefin Sans', sans-serif;
      border: 1px solid #eaeaea;
      color: #fdfdfd;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: inset 1px 1px 1px black;
      padding: 1%;
      width: 30%;
      height: 30px;
      transition: box-shadow .2s;
    }
    .nav-links:hover {
      box-shadow: 2px 2px 2px black;
      text-shadow: 2px 2px 2px black;
      border: 1px solid white;
      cursor: pointer;
      transform: translate(-.5px, -.5px);
    }
    .nav-links:active {
      box-shadow: 3px 3px 5px #fffffe8c;
    }
    h1 {
      margin: 0%;
      margin-bottom: 4%;
    }
    .nav-component {
      z-index: 0;
    }
    @media screen and (max-width: 420px){
      .link-line {
        flex-direction: column;
      }
      .nav-links {
        width: 100%;
        height: 40px;
        font-size: 5vw;
        margin-bottom: 4%;
      }
      .header-main-content {
        width: 87%;
        height: 72vh;
        margin: auto;
        margin-top: -10%;
      }
    }

      `}</style>
    <div className="header-main-content">
      <div>
        <h1 className="title-text">Kevin  &nbsp;Boyle</h1>
        <h2 className="tagline">Web Developer & Designer</h2>
      </div>
      <div className="link-line">
        <div className="nav-links" title="go to about section" onClick={() => scrollToPage('.about-container')}>About</div>
        <div className="nav-links" title="go to gallery section" onClick={() => scrollToPage('.gallery-container')}>Projects</div>
        <div className="nav-links" title="go to contact section" onClick={() => scrollToPage('.contact-container')}>Contact</div>
      </div>
    </div>

  </Parallax>
);

export default HeaderParallax;
