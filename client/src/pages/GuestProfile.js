import React, { Fragment, useEffect } from "react";
import { guestProfile } from "../actions/profile";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import ProfileExperience from "../components/ProfileExperience";
import ProfileEducation from "../components/ProfileEducation";

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
        <Profile>
          <div className="act-button">
            {console.log(profiles)}

            <Link className="back" to="/profiles">
              Go back to Browsing
            </Link>
            {user.user._id === profiles.profile.user._id && (
              <Link className="edit" to="/edit-profile">
                Edit your Profile
              </Link>
            )}
          </div>
          <Main>
            <Top>
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
                    {curr.experience.length > 0 ? (
                      <p>
                        {" "}
                        {curr.experience[0].title} at{" "}
                        {curr.experience[0].company}
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="location">
                    <p>{curr.location}</p>
                  </div>
                  {curr.social && (
                    <div className="socials">
                      {curr.social.linkedin && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={curr.linkedin}
                        >
                          <BsLinkedin className="icons" />
                        </a>
                      )}
                      {
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={curr.facebook}
                        >
                          <BsFacebook className="icons" />
                        </a>
                      }
                      {
                        <a target="_blank" rel="noreferrer" href={curr.twitter}>
                          <BsTwitter className="icons" />
                        </a>
                      }
                      {
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={curr.instagram}
                        >
                          <BsInstagram className="icons" />
                        </a>
                      }
                      {
                        <a target="_blank" rel="noreferrer" href={curr.youtube}>
                          <BsYoutube className="icons youtube" />
                        </a>
                      }
                    </div>
                  )}
                </div>
                <div className="right">
                  <h4>My Skills: </h4>
                  <div className="skills">
                    {curr.skills.map((skill) => (
                      <p>{skill}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Top>

            <div className="experience">
              <h1>Experience</h1>
              {curr.experience.length > 0 ? (
                <Fragment>
                  {curr.experience.map((exp) => (
                    <ProfileExperience key={exp._id} experience={exp} />
                  ))}
                </Fragment>
              ) : (
                <h4>No experience Credentials</h4>
              )}
            </div>

            <div className="education">
              <h1>Education</h1>
              {curr.education.length > 0 ? (
                <Fragment>
                  {curr.education.map((edu) => (
                    <ProfileEducation key={edu._id} education={edu} />
                  ))}
                </Fragment>
              ) : (
                <h4>No Education Credentials</h4>
              )}
            </div>
          </Main>
        </Profile>
      )}
    </>
  );
};

const Profile = styled.div`
  .act-button {
    margin: 2rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    .back {
      background-color: #eeeff7;
      border-radius: 0.5rem;
      padding: 0.8rem;
      text-decoration: none;
      color: #6470c4;
    }
    .edit {
      background-color: #6470c4;
      border-radius: 0.5rem;
      padding: 0.8rem;
      text-decoration: none;
      color: white;
    }
  }
`;
const Main = styled.div`
  background-color: #eeeff7;
  width: 70%;
  height: auto;
  border-radius: 1rem;
  .experience,
  .education {
    h1 {
      color: #6470c4;
    }
    padding: 1rem 2rem;
  }
`;

const Top = styled.div`
  background-color: #eeeff7;
  margin-right: 4rem;
  width: 100%;
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
    height: auto;
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
    .right {
      margin-right: 4rem;
      margin-top: 2rem;

      * {
        margin: 0.4rem;
      }
    }
  }
  .icons {
    font-size: 32px;
    transition: 0.2s ease-in-out;
  }
  .youtube:hover {
    color: red;
  }
`;
export default GuestProfile;
