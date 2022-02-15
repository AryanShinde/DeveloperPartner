import React, { useEffect } from "react";
import Loading from "./Loading";
import { useSelector } from "react-redux";
import PostItem from "./PostsItem";
import { useDispatch } from "react-redux";
import { getSinglePost } from "../actions/post";
import { useLocation } from "react-router";
import CommentForm from "./CommentForm";
import CommentItem from "./CommentItem";
import styled from "styled-components";
import Layout from "../layout";
const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    dispatch(getSinglePost(path));
  }, [dispatch, path]);

  const postReducer = useSelector((store) => store.post);
  const auth = useSelector((store) => store.auth);
  const authUser = auth.user ? auth.user._id : "";

  const post = postReducer.post;
  if (postReducer.isLoading || auth.isLoading || post === null) {
    return <Loading />;
  }
  return (
    <Layout>
      <SinglePostStyled>
        <PostItem post={post} view={true} authUser={authUser} key={post._id} />
        <CommentForm id={post._id} />
        {post?.comments?.length > 0 ? (
          post?.comments.map((comment) => (
            <CommentItem
              key={comment._id}
              authUser={authUser}
              comment={comment}
              postId={post._id}
            />
          ))
        ) : (
          <></>
        )}
      </SinglePostStyled>
    </Layout>
  );
};

const SinglePostStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export default SinglePost;
