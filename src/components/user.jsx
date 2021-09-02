import React from 'react'
import Qualitie from './qualitie'
import Bookmark from './bookmark'

const User = (props) => {
  return (
    <tr>
      <th scope="col">{props.name}</th>
      <th scope="col">
        {props.qualities.map((qualitie) => {
          return <Qualitie key={qualitie._id} {...qualitie} />
        })}
      </th>
      <th scope="col">{props.profession.name}</th>
      <th scope="col">{props.completedMeetings}</th>
      <th scope="col">{props.rate}/10</th>
      <th scope="col">
        <button onClick={() => props.toFavourites(props._id)}>
          <Bookmark status={props.status} />
        </button>
      </th>
      <th scope="col">
        <button
          className="btn btn-danger"
          onClick={() => props.onDelete(props._id)}
        >
          Удалить
        </button>
      </th>
    </tr>
  )
}

export default User
