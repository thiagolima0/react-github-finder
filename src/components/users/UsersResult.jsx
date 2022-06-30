import { useEffect, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const UsersResult = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await (
      await fetch(`${import.meta.env.VITE_REACT_APP_GITHUB_URL}/users`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_REACT_APP_GITHUB_TOKEN}`,
        },
      })
    ).json()

    setUsers(response)
    setLoading(false)
  }

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex-1 w-64 card card-compact bg-base-100 m-2 shadow-xl"
          >
            <figure>
              <img src={user.avatar_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">@{user.login}</h2>
              {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a href={user.html_url} target="_blank">
                    Visit
                  </a>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  
  return (
    <div className="flex justify-center">
      <BeatLoader color="#FF7AC6" loading={loading} size={40} />
    </div>
  )
}

export default UsersResult
