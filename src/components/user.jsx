import React from "react"
import Qualitie from "./qualitie"
import Bookmark from "./bookmark"
import PropTypes from "prop-types"

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
User.propTypes = {
  name: PropTypes.string.isRequired,
  qualities: PropTypes.array.isRequired,
  profession: PropTypes.object.isRequired,
  completedMeetings: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  toFavourites: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  _id: PropTypes.string.isRequired,
  status: PropTypes.bool
}

export default User
