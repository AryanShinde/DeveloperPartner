import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
      <div style={{ marginLeft: "-3rem" }}>
        <GetProfiles />
      </div>
    </Layout>
  );
};
export default Profiles;
