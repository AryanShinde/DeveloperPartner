import React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";

import { Link } from "react-router-dom";

const Nav = () => {
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;
  const loading = authState.isLoading;
  const dispatch = useDispatch();

  const logged = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link onClick={() => dispatch(logout())} to="/">
          Logout
        </Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  );
  const guest = (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Signup</Link>
      </li>
    </ul>
  );

  const tag = "<Dev Partner/>";
  return (
    <NavStyled>
      <div className="left">
        <Link to="/">{tag}</Link>
      </div>
      {!loading && (
        <div className="right">{isAuthenticated ? logged : guest}</div>
      )}
    </NavStyled>
  );
};
const NavStyled = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: baseline;
  background-color: #6470c4;
  padding: 1.5rem;
  position: sticky;
  z-index: 2;
  top: 0;
  border-radius: 0rem 0rem 1rem 1rem;
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    li {
      margin: 0rem 1rem;
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;
export default Nav;
