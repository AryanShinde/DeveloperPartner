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
    console.log(error);
    dispatch({
      type: "POSTS_ERROR",
      payload: error,
    });
  }
};

export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axios.put(`api/posts/likes/${postId}`);
    console.log(res);
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
    const res = await axios.delete(`api/posts/${postId}`);
    console.log(res);
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
