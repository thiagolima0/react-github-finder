import { useContext, useEffect } from "react";
import GithubContext from "../context/github/GithubContext";
import { Link, useParams } from "react-router-dom";
import {
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
  FaArrowLeft,
} from "react-icons/fa";
import { BeatLoader } from "react-spinners";
import UserRepo from "../components/users/UserRepo";
import { getUser, getRepos } from "../context/github/GithubActions";

const User = () => {
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const params = useParams();

  const {
    name,
    type,
    login,
    avatar_url,
    location,
    bio,
    blog,
    html_url,
    twitter_username,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  const fetchUserData = async () => {
    dispatch({type: "SET_LOADING"})
    const user = await getUser(params.login);
    const repos = await getRepos(params.login);

    dispatch({ type: "GET_USER", payload: user });
    dispatch({ type: "GET_REPOS", payload: repos });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center">
        <BeatLoader color="#FF7AC6" loading={loading} size={40} />
      </div>
    );
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            <FaArrowLeft className="mr-2 text-2xl" />
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt="Avatar" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0 text-white">{name}</h2>
                <p className="text-white">{login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  className="btn btn-outline"
                  rel="noreferrer"
                >
                  Visit Github Profile
                </a>
              </div>
            </div>
            <div className="w-full rounded-lg shadow-md bg-base-100 stats">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg stat-value">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <a
                    className="text-lg stat-value"
                    href={blog}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {blog}
                  </a>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <a
                    className="text-lg stat-value"
                    href={`https://twitter.com/${twitter_username}`}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {twitter_username}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="stat">
            <div className="stat-title">Followers</div>
            <div className="stat-figure text-primary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-value">{followers}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Following</div>
            <div className="stat-figure text-primary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-value">{following}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Public Repos</div>
            <div className="stat-figure text-primary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-value">{public_repos}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Public Gists</div>
            <div className="stat-figure text-primary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-value">{public_gists}</div>
          </div>
        </div>

        <UserRepo repos={repos} />
      </div>
    </>
  );
};

export default User;
