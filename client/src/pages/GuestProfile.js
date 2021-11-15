import React, { useEffect } from "react";
import { guestProfile } from "../actions/profile";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import {
  BsFacebook,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";
import styled from "styled-components";

const GuestProfile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const profiles = useSelector((store) => store.profiles);
  const user = useSelector((store) => store.auth);
  const curr = profiles.profile;
  const history = useHistory();

  useEffect(() => {
    dispatch(guestProfile(path));
  }, [dispatch, path]);
  if (!user.isAuthenticated) {
    history.push("/signup");
  }

  return (
    <>
      {profiles.isLoading ||
      user.isAuthenticated === false ||
      user.isLoading ||
      profiles.profile === null ? (
        <Loading />
      ) : (
        <>
          {console.log(profiles)}

          <Link to="/profiles">Go back to Browsing</Link>
          {user.user._id === profiles.profile.user._id && (
            <Link to="/edit-profile">Edit your Profile</Link>
          )}
          <Main>
            <div className="banner"></div>
            <div className="profile-up">
              <div className="left">
                <div className="profile-img">
                  <img src={curr.user.avatar} alt={curr.user.name} />
                </div>
                <div className="name">
                  <h1>{curr.user.name}</h1>
                </div>
                <div className="tag">
                  <p>{curr.status}</p>
                </div>
                <div className="location">
                  <p>{curr.location}</p>
                </div>
                {curr.social && (
                  <div className="socials">
                    {curr.social.linkedin && (
                      <a target="_blank" rel="noreferrer" href={curr.linkedin}>
                        <BsLinkedin className="icons" />
                      </a>
                    )}
                    {
                      <a target="_blank" rel="noreferrer" href={curr.facebook}>
                        <BsFacebook className="icons" />
                      </a>
                    }
                    {
                      <a target="_blank" rel="noreferrer" href={curr.twitter}>
                        <BsTwitter className="icons" />
                      </a>
                    }
                    {
                      <a target="_blank" rel="noreferrer" href={curr.instagram}>
                        <BsInstagram className="icons" />
                      </a>
                    }
                    {
                      <a target="_blank" rel="noreferrer" href={curr.youtube}>
                        <BsYoutube className="icons" />
                      </a>
                    }
                  </div>
                )}
              </div>
              <div className="right">
                <div className="skills">
                  {curr.skills.map((skill) => (
                    <h6>{skill}</h6>
                  ))}
                </div>
              </div>
            </div>
          </Main>
        </>
      )}
    </>
  );
};

const Main = styled.div`
  background-color: #eeeff7;
  margin-right: 4rem;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 1rem;
  .banner {
    background-color: wheat;
    width: 100%;
    height: 20vh;
    border-radius: 1rem 1rem 0rem 0rem;
  }
  .profile-up {
    margin-top: -6rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      padding-left: 1.4rem;
      * {
        padding: 0.2rem;
      }
      .socials {
        * {
          padding: 0.1;
        }
      }
      img {
        border-radius: 50%;
        padding: 0.6rem;
        width: 80%;
        height: 80%;
      }
    }
  }
  .icons {
    font-size: 32px;
  }
`;
export default GuestProfile;
