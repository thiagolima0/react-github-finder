import Api from "../../api/Api";

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await Api.get(`/search/users?${params}`);

  if (response.status === 401) {
    window.location = "/unauthorized";
    return;
  }

  const { items } = await response.data;

  return items;
};

export const getUser = async (username) => {
  let data = [];
  const response = await Api.get(`/users/${username}`);

  if (response.status === 404) {
    window.location = "/not-found";
  } else {
    data = await response.data;
  }

  return data;
};

export const getRepos = async (username) => {
  let data = [];
  const response = await Api.get(`/users/${username}/repos`);

  if (response.status === 404) {
    window.location = "/not-found";
  } else {
    data = await response.data;
  }

  return data;
};
