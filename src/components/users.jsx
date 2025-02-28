import React, { useState } from 'react'
import api from '../api'

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll())

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const renderPhrase = (number) => {
    const lastOne = Number(number.toString().slice(-1))
    if (number > 4 && number < 15) return 'человек тусанет'
    if ([2, 3, 4].indexOf(lastOne) >= 0) return 'человека тусанут'
    if (lastOne === 1) return 'человек тусанет'
    return 'человек тусанет'
  }

  return (
    <>
      <h2>
        <span
          className={'badge ' + (users.length > 0 ? 'bg-primary' : 'bg-danger')}
        >
          {users.length > 0
            ? `${
                users.length + ' ' + renderPhrase(users.length)
              } с тобой сегодня`
            : 'Никто с тобой не тусанет'}
        </span>
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>Имя</th>
            <th>Качества</th>
            <th>Профессия</th>
            <th>Встретился, раз</th>
            <th>Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>
                {user.qualities.map((quality) => (
                  <span
                    className={`badge bg-${quality.color} me-1`}
                    key={quality._id}
                  >
                    {quality.name}
                  </span>
                ))}
              </td>
              <td>{user.profession.name}</td>
              <td>{user.completedMeetings}</td>
              <td>{user.rate}/5</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Users
