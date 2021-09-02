import React from 'react'

const Bookmark = ({ status }) => {
  const className = status === 'yes' ? 'bi-bookmark-fill' : 'bi-bookmark'
  return <i className={className}></i>
}

export default Bookmark
