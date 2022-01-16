import React from "react";
import styled from "styled-components";
import { AiOutlineGithub } from "react-icons/ai";
const GithubProfile = ({ data }) => {
  return (
    <StyledRepo className="main">
      <div className="left">
        <h4>
          <AiOutlineGithub className="icon" />
          <a rel="noreferrer" target="_blank" href={data.html_url}>
            Check project
          </a>
        </h4>
      </div>
      <div className="right">
        <h5 className="name">{data.name}</h5>
      </div>
    </StyledRepo>
  );
};
const StyledRepo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d3d3;
  margin: 1.2rem;
  padding: 0.8rem;
  border-radius: 1rem;
  transition: 0.4s ease-in-out;
  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icon {
    margin: 0.2rem;
    font-size: 1.4rem;
  }
  a {
    color: black;
    text-decoration: none;
  }
  &:hover {
    box-shadow: 4px 5px 10px silver;
  }
`;
export default GithubProfile;
