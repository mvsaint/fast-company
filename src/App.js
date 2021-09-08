import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import api from "./api"
import Users from "./components/users"
import Pagination from "./components/pagination"
import SearchStatus from "./components/searchStatus"
import { paginate } from "./utils/paginate"

function App() {
  const [users, setUsers] = useState(api.users.fetchAll())

  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (pageIndex) => {
    console.log("page: ", pageIndex)
    setCurrentPage(pageIndex)
  }

  const userCrop = paginate(users, currentPage, pageSize)

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId))
  }

  const handleToFavourites = (userId) => {
    const newUsers = [...users]
    const elementIndex = newUsers.findIndex((user) => user._id === userId)
    if (newUsers[elementIndex].status === true) {
      newUsers[elementIndex].status = false
    } else {
      newUsers[elementIndex].status = true
    }
    setUsers(newUsers)
  }

  return (
    <main>
      <h1>
        <SearchStatus number={count} />
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
            users={userCrop}
          />
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </main>
  )
}

export default App
