import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { getProfiles } from "../actions/profile";
import GetProfiles from "../components/Profiles";
import Layout from "../layout";

const Profiles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);
  return (
    <Layout>
      <StyledProfiles>
        <GetProfiles />
      </StyledProfiles>
    </Layout>
  );
};
const StyledProfiles = styled.div`
  margin-left: -3rem;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;

export default Profiles;
