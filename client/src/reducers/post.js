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
