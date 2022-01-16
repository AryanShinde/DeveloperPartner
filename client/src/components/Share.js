import React from "react";
import facebook from "../images/facebook.png";
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
            <h4>
              {window.location.href}/{props.id}
            </h4>
          </div>
          <div className="icons">
            <a
              rel="noreferrer"
              href={`https://api.whatsapp.com/send?text=${window.location}/${props.id}`}
              target="_blank"
            >
              <img src={whatsapp} alt="" />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.facebook.com/sharer/sharer.php?u=${window.location}/${props.id}`}
            >
              <img src={facebook} alt="" />
            </a>
            <a
              rel="noreferrer"
              href={`https://twitter.com/intent/tweet?url=${window.location}/${props.id}&text=Check this post on devpartner: `}
              data-lang="en"
              data-show-count="false"
              target="_blank"
            >
              <img src={twitter} alt="" />
            </a>

            <a
              rel="noreferrer"
              target="_blank"
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location}/${props.id}`}
            >
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
  @media (max-width: 768px) {
    .card {
      margin-top: 20%;
    }
  }
`;
export default Share;
