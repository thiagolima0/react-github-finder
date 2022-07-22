const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN

export const searchUsers = async (text) => {
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


  return items
}

export const getUser = async (username) => {
  let data = []
  const response = await fetch(`${GITHUB_URL}/users/${username}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  })

  if (response.status === 404) {
    window.location = '/not-found'
  } else {
    data = await response.json()
  }

  return data
}

export const getRepos = async (username) => {
  let data = []
  const response = await fetch(`${GITHUB_URL}/users/${username}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  })

  if (response.status === 404) {
    window.location = '/not-found'
  } else {
    data = await response.json()
  }

  return data
}