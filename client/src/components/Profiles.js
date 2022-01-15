import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import ProfileItem from "./ProfileItem";
import Loading from "./Loading";
import { FcSearch } from "react-icons/fc";
const GetProfiles = () => {
  const profile = useSelector((store) => store.profiles.profiles);
  const isLoading = useSelector((store) => store.profiles.isLoading);
  return (
    <Profiles>
      <h1>Developers</h1>
      <div className="line"></div>
      <h3>
        <FcSearch className="icons" />
        Browse some of the fine Developers
      </h3>
      <div className="profiles">
        {isLoading ? (
          <Loading />
        ) : (
          profile.map((profile, index) => {
            return <ProfileItem data={profile} key={index} />;
          })
        )}
      </div>
    </Profiles>
  );
};

const Profiles = styled.div`
  width: 80%;
  h1 {
    margin: 2rem 0rem 1rem 0rem;
    color: #4c4c78;
  }

  .icons {
    font-size: 30px;
  }
  .line {
    margin-bottom: 0.4rem;
    background-color: #4c4c78;
    width: 100%;
    height: 0.4rem;
    border-radius: 0rem 0rem 1rem 1rem;
  }
  .profiles {
    margin-left: 2rem;
    @media (max-width: 700px) {
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%auto;
    max-width: 100%;
  }
`;
export default GetProfiles;
