import axios from "axios";
import SetAlert from "./setAlert";
export const GetPost = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    console.log(res.data);
    dispatch({
      type: "GET_POSTS",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`/api/posts/likes/${postId}`);
    dispatch({
      type: "UPDATE_LIKE",
      payload: { postId, likes: res.data },
    });
  } catch (error) {
    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

//delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    await axios.delete(`/api/posts/${postId}`);
    dispatch({
      type: "DELETE_POST",
      payload: postId,
    });
    dispatch(SetAlert("posts deleted", "success"));
  } catch (error) {
    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

//add post
export const addPost = (formData) => async (dispatch) => {
  const config = {
    header: {
      "Content-type": "application/json",
    },
  };
  console.log(formData);
  try {
    const res = await axios.post(`/api/posts`, formData, config);
    console.log(res);
    dispatch({
      type: "ADD_POST",
      payload: res.data,
    });
    dispatch(SetAlert("posts added", "success"));
  } catch (error) {
    console.log(error.response);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(SetAlert(e.msg, "danger")));
    } else if (error.response.data.error) {
      dispatch(SetAlert(error.response.data.error, "danger"));
    } else if (
      error.response.data.msg &&
      !Array.isArray(error.response.data.msg)
    ) {
      dispatch(SetAlert(error.response.data.msg, "danger"));
    }

    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

//get a single post
export const getSinglePost = (postId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
    console.log(res.data);
    dispatch({
      type: "GET_POST",
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

//add comment
export const addComment = (formData, postId) => async (dispatch) => {
  const config = {
    header: {
      "Content-type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      `/api/posts/comments/${postId}`,
      formData,
      config
    );
    console.log(res);
    dispatch({
      type: "ADD_COMMENT",
      payload: res.data,
    });
    dispatch(SetAlert("comment added", "success"));
  } catch (error) {
    console.log(error.response);
    const errors = error.response.data.errors;
    if (errors) {
      errors.forEach((e) => dispatch(SetAlert(e.msg, "danger")));
    } else if (error.response.data.error) {
      dispatch(SetAlert(error.response.data.error, "danger"));
    } else if (
      error.response.data.msg &&
      !Array.isArray(error.response.data.msg)
    ) {
      dispatch(SetAlert(error.response.data.msg, "danger"));
    }

    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

//delete a comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    const comment = await axios.delete(
      `/api/posts/comments/${postId}/${commentId}`
    );
    console.log(comment);
    dispatch({
      type: "DELETE_COMMENT",
      payload: comment.data,
    });
    dispatch(SetAlert("comment deleted", "success"));
  } catch (error) {
    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};
