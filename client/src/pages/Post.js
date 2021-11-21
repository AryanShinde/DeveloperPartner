import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch } from "react-redux";
import { GetPost } from "../actions/post";
const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPost());
  }, [dispatch]);
  return <PostList />;
};
export default Post;
