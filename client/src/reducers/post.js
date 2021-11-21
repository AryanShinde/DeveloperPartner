const initialState = {
  post: null,
  posts: [],
  isLoading: true,
  error: {},
};

export default function post(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
      };
    case "UPDATE_LIKE":
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload.postId
            ? { ...post, likes: action.payload.likes }
            : post
        ),
      };
    case "POST_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
