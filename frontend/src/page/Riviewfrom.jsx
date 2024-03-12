import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Style from './Login.module.css'
import '../Component/Rating.css'
import { useLocation, useNavigate } from 'react-router-dom'

export default function ReviewForm() {
  const location = useLocation() // Get location object
  const { movie } = location.state || {}
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const navigate = useNavigate()

  console.log('movie:', movie.id)

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

  const handleCommentChange = (e) => {
    setComment(e.target.value)
  }

  const handleSubmit = async () => {
    try {
      const reviewData = {
        rating: rating,
        comment: comment,
      }

      const response = await fetch(
        `http://localhost:8080/api/User/${movie['user']['id']}/Movie/${movie['id']}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(reviewData),
        },
      )

      if (response.ok) {
        const responseData = await response.json()
        console.log('Success: Review submitted.', responseData)
        navigate('/Riviewpage', { state: { movie } })
        // Handle success
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData.error)
        // Handle error
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
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
            <div className="form-outline mb-4">
              <input
                type="text"
                id="form2Example2"
                className="form-control"
                value={comment}
                onChange={handleCommentChange}
              />
              <label className="form-label" htmlFor="form2Example2">
                Description
              </label>
            </div>

            <button
              onClick={handleSubmit}
              type="button"
              className="btn btn-dark btn-block mb-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
