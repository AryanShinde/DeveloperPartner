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
    case "GET_POST":
      return {
        ...state,
        post: action.payload,
        isLoading: false,
      };
    case "ADD_POST":
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        isLoading: false,
      };
    case "ADD_COMMENT":
      return {
        ...state,
        post: { ...state.post, comments: action.payload },
        isLoading: false,
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        isLoading: false,
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        post: { ...state.post, comments: action.payload },
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
