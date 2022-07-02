import React from 'react'
import UserSearch from '../components/users/UserSearch'
import UsersResult from '../components/users/UsersResult'

const Home = () => {
  return (
    <div>
      {/* SEARCH COMPONET */}
      <UserSearch />
      <UsersResult />
    </div>
  )
}

export default Home