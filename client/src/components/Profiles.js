import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import ProfileItem from "./ProfileItem";
import Loading from "./Loading";
const GetProfiles = () => {
  let profile = useSelector((store) => store.profiles.profiles);
  const isLoading = useSelector((store) => store.profiles.isLoading);
  const [val, setVal] = useState([]);
  const [search, setSearch] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
    setVal(profile.filter((p) => p.user.name.includes(e.target.value)));
  };
  return (
    <Profiles>
      <h1>Developers</h1>
      <div className="line"></div>
      <input
        placeholder="Browse some of the fine developers 🔎"
        type="text"
        onChange={(e) => onChangeHandler(e)}
      />
      {search && (
        <div className="search">
          <h2>Searched users</h2>
          <div className="profiles">
            {val.map((profile, index) => {
              return <ProfileItem data={profile} key={index} />;
            })}
          </div>
          <hr />
        </div>
      )}

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
  input {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    width: 100%;
    font-size: 1.2rem;
    border: none;
    border-bottom: 2px solid #d3d3d3;
  }
  .search {
    h2 {
      text-align: center;
      margin: 2rem;
    }
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
