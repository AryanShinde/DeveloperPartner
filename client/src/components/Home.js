import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import home from "../images/home.svg";
import { BsCodeSlash } from "react-icons/bs";
import hero1 from "../images/hero1.svg";
import wave1 from "../images/wave1.svg";
import hero2 from "../images/hero2.svg";
import wave2 from "../images/wave2.svg";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Home = () => {
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;
  const loading = authState.isLoading;
  const tag = "<DevPartner/>";

  return (
    <HomeImg>
      <Section1>
        <p className="title">
          Tired of finding a perfect project partner
          <br /> for your next perfect project?
        </p>
        <h2>Want to network and make projects with developers?</h2>
        <h3>
          <span>DevPartner</span> is a Site to go!
        </h3>
        <div className="explore">
          <Link to="profiles">Explore</Link>
          <BsCodeSlash className="code" />
        </div>
      </Section1>
      <Section2>
        <img className="wave1" src={wave1} alt="" />
        <div className="left-1">
          <img src={hero1} alt="" />
        </div>
        <div className="right-1">
          <h2>
            Create, Like, Share and comment on posts. Network with like-minded
            people. Grow with them and certainly, <span>have fun</span>.
          </h2>
        </div>
      </Section2>
      <Section3>
        <img className="wave2" src={wave2} alt="" />
        <div className="left-2">
          <h1>Find-Connect-Create</h1>
          <h2>
            This is what we believe in.
            <br /> "Apes together strong! "
          </h2>
        </div>
        <div className="right-2">
          <img src={hero2} alt="" />
        </div>
      </Section3>
      <Footer>
        <div className="up">
          <h1>{tag}</h1>
        </div>
        <div className="down">
          <h2>
            Made with ❤️ by{" "}
            <a target="_blank" href="https://shindearyan.netlify.app">
              Aryan Shinde
            </a>
          </h2>
          <p>Connect with me here: </p>
          <br />
          <div className="socials">
            <a target="_blank" href="https://twitter.com/aryan_aag">
              <BsTwitter className="icon twitter" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/aryan-shinde-14ab58201/"
            >
              <BsLinkedin className="icon linkedin" />
            </a>
            <a target="_blank" href="https://github.com/AryanShinde">
              <BsGithub className="icon" />
            </a>
          </div>
        </div>
      </Footer>
    </HomeImg>
  );
};

const HomeImg = styled.div``;
const Section1 = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 4rem;

  .title {
    padding-bottom: 2rem;
    font-weight: bolder;
    font-size: 3rem;
    text-align: center;
  }
  h2 {
    padding-bottom: 2rem;
  }
  h3 {
    font-size: 2rem;
    span {
      color: #6470c4;
      border-bottom: 2px solid #6470c4;
    }
  }
  .explore {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6470c4;
    padding: 1rem;
    font-size: 1.4rem;
    border-radius: 1.3rem;
    color: white;
    a {
      text-decoration: none;
      color: white;
      padding-right: 0.4rem;
      transition: 0.4s ease-in-out;
      &:hover {
        padding-right: 1rem;
      }
    }
    .code {
      transition: transform 0.4s ease-in-out;
    }

    &:hover .code {
      transform: translateX(0.5rem);
    }
  }
  @media (max-width: 768px) {
    padding: 1rem;
    .title {
      font-size: 2rem;
    }
  }
`;
const Section2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6470c4;
  color: white;
  height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  .wave1 {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 100%;
    pointer-events: none;
  }
  .left-1 {
    img {
      width: 40rem;
    }
  }
  .right-1 {
    line-height: 3rem;
    padding: 2rem;
    span {
      color: black;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    .left-1 {
      img {
        width: 22rem;
      }
    }
  }
`;
const Section3 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  margin-top: 4rem;
  .wave2 {
    position: absolute;
    width: 100%;
    top: -10rem;
    left: 0rem;
    right: 0rem;
    bottom: 100%;
    padding: 0;
  }
  .right-2 {
    img {
      width: 40rem;
    }
  }
  .left-2 {
    line-height: 3rem;
    padding: 2rem;
    font-size: 1.4rem;

    h1 {
      font-size: 2rem;
      color: #6470c4;
    }
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
    .right-2 {
      img {
        width: 20rem;
      }
    }
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: #6470c4;
  padding: 2rem;
  color: white;
  .up {
    margin-bottom: 8rem;
  }
  .down {
    a {
      color: black;
    }
    .icon {
      color: black;
      font-size: 2rem;
      margin: 1rem;
      cursor: pointer;
      transition: 0.4s ease-in-out;
    }
    h2 {
      margin-bottom: 1rem;
    }
    .twitter:hover {
      color: #00acee;
    }
    .linkedin:hover {
      color: #0e76a8;
    }
  }
`;
export default Home;
