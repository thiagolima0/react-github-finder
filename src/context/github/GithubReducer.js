const githubReducer = (state, {payload, type}) => {
  switch (type) {
    case "GET_USERS":
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case "CLEAN_USERS":
      return {
        ...state,
        users: [],
      };
    case "GET_REPOS":
      return {
        ...state,
        repos: payload,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER":
      return {
        ...state,
        user: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default githubReducer;
