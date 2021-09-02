import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import api from './api'
import Users from './components/users'
import SearchStatus from './components/searchStatus'

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToFavourites = (userId) => {
    const newUsers = [...users]
    const elementIndex = newUsers.findIndex((user) => user._id === userId)
    if (newUsers[elementIndex].status === 'yes') {
      newUsers[elementIndex].status = 'no'
    } else {
      newUsers[elementIndex].status = 'yes'
    }
    setUsers(newUsers)
  }

  return (
    <main>
      <h1>
        <SearchStatus number={users.length} />
      </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
            <th scope="col">Избранное</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <Users
            onDelete={handleDelete}
            toFavourites={handleToFavourites}
            users={users}
          />
        </tbody>
      </table>
    </main>
  )
}

export default App
