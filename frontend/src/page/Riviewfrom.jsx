import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Style from './Login.module.css'
import '../Component/Rating.css'

export default function Riviewfrom() {
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
    <>
      <Navbar />
      <div className={`container ${Style.contain}`}>
        <h1 className="m-3">Read reviews. Write reviews.</h1>
        <div className={`${Style.loginconainer}`}>
          <form className={`${Style.loginfix}`}>
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
            <div class="form-outline mb-4">
              <input type="text" id="form2Example2" class="form-control" />
              <label class="form-label" for="form2Example2">
                Discription
              </label>
            </div>

            <button type="button" class="btn btn-dark btn-block mb-4">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}