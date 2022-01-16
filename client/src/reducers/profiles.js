const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  isLoading: true,
  errors: {},
};

const profiles = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
    case "UPDATE_PROFILE":
      return {
        ...state,
        profile: action.payload,
        isLoading: false,
      };
    case "GITHUB_REPO":
      return {
        ...state,
        repos: action.payload,
      };
    case "GITHUB_ERROR":
      return {
        ...state,
        repos: [],
      };
    case "GET_PROFILES":
      return {
        ...state,
        profiles: action.payload,
        isLoading: false,
        repos: [],
        profile: null,
      };
    case "CLEAR_PROFILE":
      return {
        ...state,
        profiles: [],
        profile: null,
        repos: [],
        isLoading: false,
        errors: {},
      };
    case "PROFILE_ERROR":
      return {
        ...state,
        errors: action.payload,
        isLoading: false,
      };
    case "LOGOUT":
      return {
        ...state,
        profile: null,
        profiles: [],
        repos: [],
        isLoading: true,
        errors: {},
      };
    default:
      return state;
  }
};

export default profiles;
