import React from "react"
import PropTypes from "prop-types"

const Bookmark = ({ status }) => {
  const className = status === true ? "bi-bookmark-fill" : "bi-bookmark"
  return <i className={className}></i>
}
Bookmark.propTypes = {
  status: PropTypes.bool
}

export default Bookmark
