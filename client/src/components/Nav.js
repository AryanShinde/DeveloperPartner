import React, { useState } from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/auth";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const authState = useSelector((state) => state.auth);
  const isAuthenticated = authState.isAuthenticated;
  const loading = authState.isLoading;
  const [open, setOpen] = useState(false);
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
      <div className="res-nav">
        <GiHamburgerMenu onClick={() => setOpen(!open)} className="hamburger" />
        <div className={`${open ? "open" : "closed"}`}>
          {!loading && (
            <div className="right-res">{isAuthenticated ? logged : guest}</div>
          )}
        </div>
      </div>
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
  .res-nav {
    display: none;
    pointer-events: none;
  }
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
  @media (max-width: 768px) {
    font-size: 0.8rem;
    height: 5rem;
    position: relative;
    width: 100%;
    max-width: 100%;
    .left,
    .right {
      display: none;
    }
    .res-nav {
      display: block;
      transition: 0.3s ease-in-out;
      width: 100%;
      .hamburger {
        font-size: 2rem;
        cursor: pointer;
        pointer-events: all;
      }
      .open {
        transform: translateY(0rem);
        transition: 1s ease-in-out;
        opacity: 1;
        width: 100%;
        pointer-events: all;
      }
      .closed {
        transform: translateY(-28rem);
        transition: 1s ease-in-out;
        opacity: 0;
        width: 100%;
      }
      .right-res {
        width: 100%;

        ul {
          margin: 0;
          flex-direction: column;
          li {
            margin: 1rem;
            /* padding: 1rem; */
          }
          background-color: #6470c4;
          height: auto;
          border-radius: 1rem;
          padding: 1rem;
        }
      }
    }
    ul {
      li {
        margin: 0rem 0.5rem;
      }
    }
  }
`;
export default Nav;
