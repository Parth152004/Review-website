import React, { useState } from 'react'
import './Rating.css'

const RatingComponent = () => {
  const [rating, setRating] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')

  const handleRatingChange = (value) => {
    setRating(value)
  }

  const handleStarClick = (clickedValue) => {
    if (clickedValue === rating) {
      setRating(0) // If the clicked star is already selected, deselect it
    } else {
      setRating(clickedValue) // Otherwise, set the rating to the clicked value
    }
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div className="rating-component">
      <h2 className="heading">Rating</h2>
      <div className="rating-bar">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= rating ? 'selected' : ''}`}
            onClick={() => handleStarClick(star)}
          >
            ★
          </span>
        ))}
        <span className="overall-rating">{rating}/5</span>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}

export default RatingComponent
