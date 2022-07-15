import { createContext, useReducer } from 'react'
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const searchUsers = async text => {
    setLoading()

    const params = new URLSearchParams({
      q: text,
    })

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (response.status === 401) {
      window.location = '/unauthorized'
      return
    }

    const { items } = await response.json()

    dispatch({
      type: 'GET_USERS',
      payload: items,
    })
  }

  const getUser = async username => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${username}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (response.status === 404) {
      window.location = '/not-found'
    } else {
      const data = await response.json()

      dispatch({
        type: 'GET_USER',
        payload: data,
      })
    }
  }

  const getRepos = async username => {
    setLoading()

    const response = await fetch(`${GITHUB_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    })

    if (response.status === 404) {
      window.location = '/not-found'
    } else {
      const data = await response.json()

      dispatch({
        type: 'GET_REPOS',
        payload: data,
      })
    }
  }

  const setLoading = () => {
    dispatch({ type: 'SET_LOADING' })
  }

  const cleanUsers = () => {
    dispatch({ type: 'CLEAN_USERS' })
  }

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        repos: state.repos,
        getUser,
        getRepos,
        searchUsers,
        cleanUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
