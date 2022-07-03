import { Link } from "react-router-dom";

const UserItem = ({ user: {login, avatar_url} }) => {
  return (
    <div className="flex items-center space-x-3">
    <div className="avatar">
      <div className="mask mask-squircle w-12 h-12">
        <img src={avatar_url} alt="Avatar" />
      </div>
    </div>
    <div>
      <div className="font-bold">{login}</div>
      <Link className="text-sm text-primary" to={`/user/${login}`}>Visit profile</Link>
    </div>
  </div>
  );
};

export default UserItem;
