import React, { Fragment, useEffect } from "react";
import { guestProfile } from "../actions/profile";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";
import ProfileExperience from "../components/ProfileExperience";
import ProfileEducation from "../components/ProfileEducation";
// import { githubAction } from "../actions/githubRepo";
import { BsPatchCheckFill } from "react-icons/bs";

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
  // if (curr) {
  //   dispatch(githubAction(curr.user.name));
  // }

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
                        <Link
                          target="_blank"
                          rel="noreferrer"
                          href={curr.linkedin}
                        >
                          <BsLinkedin className="icons linkedin" />
                        </Link>
                      )}
                      {curr.social.facebook && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={curr.facebook}
                        >
                          <BsFacebook className="icons facebook" />
                        </a>
                      )}
                      {curr.social.twitter && (
                        <Link
                          target="_blank"
                          rel="noreferrer"
                          to={{ pathname: curr.twitter }}
                        >
                          <BsTwitter className="icons twitter" />
                        </Link>
                      )}
                      {curr.social.instagram && (
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={curr.instagram}
                        >
                          <BsInstagram className="icons instagram" />
                        </a>
                      )}
                      {curr.social.youtube && (
                        <a target="_blank" rel="noreferrer" href={curr.youtube}>
                          <BsYoutube className="icons youtube" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
                <div className="right">
                  <div className="skills">
                    {curr.skills.map((skill) => (
                      <div className="partSkill">
                        <BsPatchCheckFill className="check" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <hr />
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
            <div className="githubRepo">
              <h1>Github repo</h1>
              {/* <GithubProfile data={"AryanShinde"} /> */}
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
  box-shadow: 4px 4px 30px #d3d3d3;
  padding: 1rem;

  .experience,
  .education {
    background-color: #c8cef7;
    margin: 2rem;
    border-radius: 1rem;
    box-shadow: 4px 4px 15px 1px #8895e8;
    h1 {
      color: #6470c4;
      margin: 2rem 0rem;
      text-align: center;
    }
    hr {
      width: 80%;
      border: 0;
      border-top: 3px double #8c8c8c;
      margin: 1rem;
    }
    p,
    time {
      margin: 0.6rem;
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
  hr {
    border: 0;
    height: 1px;
    width: 80%;
    margin: 0 auto;
    background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0)
    );
  }
  .banner {
    background-color: #6470c4;
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
      margin-top: 2rem;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      .skills {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        .check {
          padding: 0rem 0.4rem;
          font-size: 28px;
          transition: 0.8s ease-in-out;
        }
        .partSkill {
          background-color: #98fb98;
          padding: 0.4rem;
          border-radius: 0.6rem;
          margin: 0.4rem 0.4rem;
          display: flex;
          justify-content: center;
          cursor: pointer;
          align-items: center;
          transition: 0.3s ease-in-out;
          &:hover {
            transform: scale(1.2);
            .check {
              transform: rotate(360deg);
              transition-delay: 0.1s;
            }
          }
        }
      }
    }
  }
  .icons {
    font-size: 32px;
    transition: 0.2s ease-in-out;
  }
  .youtube {
    color: red;
  }
  .instagram {
    color: #e1306c;
    color: -moz-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    color: -webkit-linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    color: linear-gradient(
      45deg,
      #f09433 0%,
      #e6683c 25%,
      #dc2743 50%,
      #cc2366 75%,
      #bc1888 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  }

  .twitter {
    color: #1a8cd8;
  }
  .facebook {
    color: #3b5998;
  }
  .linkedin {
    color: #0e76a8;
  }
`;
export default GuestProfile;
