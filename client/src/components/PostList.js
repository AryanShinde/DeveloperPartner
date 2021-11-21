import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostsItem";
import Loading from "./Loading";
const PostList = () => {
  const post = useSelector((store) => store.post);
  const posts = post.posts;
  if (post.isLoading) {
    return <Loading />;
  }
  return posts.map((p) => <PostItem post={p} key={p._id} />);
};
export default PostList;
