import { useContext } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

const UsersResult = () => {
  const { users, loading } = useContext(GithubContext)

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <BeatLoader color="#FF7AC6" loading={loading} size={40} />
    </div>
  );
};

export default UsersResult;
