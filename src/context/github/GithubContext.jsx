import { createContext, useReducer } from "react";
import  githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {
    setLoading()
    const response = await (
      await fetch(`${GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
    ).json();

    dispatch({
      type: "GET_USERS",
      payload: response
    })
  };

  const setLoading = () => {
    dispatch({tpye: "SET_LOADING"})
  }

  return (
    <GithubContext.Provider value={{ users: state.users, loading: state.loading, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
