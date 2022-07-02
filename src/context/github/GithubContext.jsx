import { createContext, useState } from "react";

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const response = await (
      await fetch(`${GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      })
    ).json();

    setUsers(response);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{users, loading, fetchUsers}}>
      {children}
    </GithubContext.Provider>
  )

}

export default GithubContext