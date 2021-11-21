import React, { useEffect } from "react";
import PostList from "../components/PostList";
import { useDispatch } from "react-redux";
import { GetPost } from "../actions/post";
import PostForm from "../components/PostForm";
const Post = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPost());
  }, [dispatch]);
  return (
    <div className="post">
      <PostForm />
      <PostList />
    </div>
  );
};
export default Post;
