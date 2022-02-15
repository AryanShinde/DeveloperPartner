import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch } from "react-redux";
import { GetPost } from "../actions/post";
import PostForm from "../components/PostForm";
import Layout from "../layout";
const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPost());
  }, [dispatch]);
  return (
    <Layout>
      <div style={{ marginLeft: "4rem" }} className="post">
        <PostForm />
        <PostList />
      </div>
    </Layout>
  );
};
export default Post;
