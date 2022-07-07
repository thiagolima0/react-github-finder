import RepoItem from "./RepoItem";

const UserRepo = ({ repos }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
      {repos.map((repo, index) => (
        <RepoItem repository={repo} key={index} />
      ))}
    </div>
  );
};

export default UserRepo;
