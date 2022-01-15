import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostsItem";
import Loading from "./Loading";

const PostList = () => {
  const post = useSelector((store) => store.post);
  const auth = useSelector((store) => store.auth);
  const authUser = auth.user ? auth.user._id : "";

  const posts = post?.posts;
  if (post.isLoading || auth.isLoading) {
    return <Loading />;
  }
  return posts?.map((p) => (
    <PostItem post={p} authUser={authUser} key={p._id} />
  ));
};
export default PostList;
