const RepoItem = ({repository}) => {
  return (
    <div className="card my-2  bg-base-100 shadow-2xl">
    <div className="card-body">
      <h2 className="card-title">
        {repository.name}
        {repository.language && (
          <div className="badge badge-primary">{repository.language}</div>
        )}
      </h2>
      <p>{repository.description}</p>
      <div className="card-actions justify-end">
        <a className="btn btn-outline btn-sm">Visit Repo</a>
      </div>
    </div>
  </div>
  )
}

export default RepoItem