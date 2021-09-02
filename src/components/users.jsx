import React from 'react'
import User from './user'

const Users = (props) => {
  return props.users.map((user) => (
    <User
      key={user._id}
      onDelete={props.onDelete}
      toFavourites={props.toFavourites}
      {...user}
    />
  ))
}

export default Users
