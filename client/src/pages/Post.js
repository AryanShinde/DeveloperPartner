import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch } from "react-redux";
import { GetPost } from "../actions/post";
import PostForm from "../components/PostForm";
import Layout from "../layout";
import styled from "styled-components";
const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPost());
  }, [dispatch]);
  return (
    <Layout>
      <StyledPosts>
        <PostForm />
        <PostList />
      </StyledPosts>
    </Layout>
  );
};

const StyledPosts = styled.div`
  margin-left: 4rem;
  @media screen and (max-width: 768px) {
    margin-left: 0;
  }
`;
export default Post;
