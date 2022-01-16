import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostsItem";
import Loading from "./Loading";
import { useDispatch } from "react-redux";
import { GetPost } from "../actions/post";
const PostList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPost());
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);
  const post = useSelector((store) => store.post);
  const auth = useSelector((store) => store.auth);
  const authUser = auth.user ? auth.user._id : "";

  const posts = post.posts;
  if (post.isLoading || auth.isLoading) {
    return <Loading />;
  } else {
    return posts?.map((p) => (
      <PostItem post={p} authUser={authUser} key={p._id} />
    ));
  }
};
export default PostList;
