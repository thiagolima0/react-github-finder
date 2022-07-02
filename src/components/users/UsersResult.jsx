import { useEffect, useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import UserItem from "./UserItem";

const UsersResult = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await (
      await fetch(`${import.meta.env.VITE_REACT_APP_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
        },
      })
    ).json();

    setUsers(response);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem
            key={user.id}
            user={user}
          />
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
