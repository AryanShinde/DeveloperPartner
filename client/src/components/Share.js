import React from "react";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import whatsapp from "../images/whatsapp.png";
import styled from "styled-components";
import { GiCancel } from "react-icons/gi";

const Share = (props) => {
  return (
    <ShareStyled className={props.share ? `shareActive` : "shareDeactive"}>
      <div className="card">
        <div className="card-in">
          <GiCancel
            className="cross"
            onClick={(e) => {
              e.stopPropagation();
              props.setShare(false);
            }}
          />
          <div className="share">
            <h2>Share this Post</h2>
            <h4>{window.location.href}</h4>
          </div>
          <div className="icons">
            <a href={`https://api.whatsapp.com/send?text=${window.location}`}>
              <img src={whatsapp} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
          </div>
        </div>
      </div>
    </ShareStyled>
  );
};
const ShareStyled = styled.div`
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin: 0 auto;
    width: 50%;
    padding: 2rem 4rem;
    margin-top: 15%;
    position: relative;
    border-radius: 1rem;

    .cross {
      position: absolute;
      top: 4%;
      cursor: pointer;
      right: 1%;
    }
    .card-in {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  .share {
    text-align: center;
    h4 {
      text-align: center;
      padding: 1rem;
    }
  }
  .icons {
    img {
      width: 3rem;
      height: 3rem;
      padding: 0.4rem;
    }
  }
  .shareActive {
    pointer-events: all;
  }
  .shareDeactive {
    opacity: 0;
    pointer-events: none;
  }
`;
export default Share;
