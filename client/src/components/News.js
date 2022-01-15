import { set } from "mongoose";
import React from "react";
import styled from "styled-components";
const News = () => {
  return (
    <RightStyled>
      <div className="whatsHappening">
        <h2>Whats Happening</h2>
        <br />
        <div className="story1">
          <div className="head">Look out for new Technologies.</div>
          <h4>Trending #1</h4>
        </div>
        <br />
        <div className="story2">
          <div className="head">Look out for new Technologies.</div>
          <h4>Trending #2</h4>
        </div>
        <br />
        <div className="story3">
          <div className="head">Look out for new Technologies.</div>
          <h4>Trending #3</h4>
        </div>
        <br />
        <div className="story4">
          <div className="head">Look out for new Technologies.</div>
          <h4>Trending #4</h4>
        </div>
      </div>
      <div className="CheckBlogs">
        <h2>Check some Blogs</h2>
        <div className="name-1">
          <h4>Blog-1</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit....</p>
        </div>
        <div className="name-2">
          <h4>Blog-2</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit....</p>
        </div>
      </div>
    </RightStyled>
  );
};
const RightStyled = styled.div`
  .whatsHappening,
  .CheckBlogs {
    background-color: #eeeff7;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem;
    border-radius: 2rem;
  }
`;
export default News;
