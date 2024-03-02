import React from 'react'
import './Coment.css'

const CommentComponent = ({ userName, rating, review }) => {
  return (
    <div className="comment">
      <h3 className="user-name">{userName}</h3>
      <hr />
      <div className="rating">
        {[...Array(rating)].map((_, index) => (
          <span key={index} className="star">
            ★
          </span>
        ))}
      </div>
      <p className="review">{review}</p>
    </div>
  )
}

export default CommentComponent
