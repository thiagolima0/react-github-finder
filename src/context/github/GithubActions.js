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

export const getUserAndRepos = async (username) => {
  const [user, repos] = await Promise.all([
    Api.get(`/users/${username}`),
    Api.get(`/users/${username}/repos`)
  ])

  return [user.data, repos.data]
}