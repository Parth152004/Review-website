import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import Card from '../Component/Card'
import RatingComponent from '../Component/Rating'
import './Rivewpage.css'
import '../Component/Rating.css'
import CommentComponent from '../Component/Coment'
import { Link } from 'react-router-dom'

export default function Riviewpage() {
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
    <div>
      <Navbar />
      <Card
        heading="Movies"
        children="plan next movie you want to see in theaters"
        image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
      />
      <div className="container ">
        <Link to="/Riviewfrom">
          <div className="review">
            <p className="header">Write Review</p>
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
            </div>
          </div>
        </Link>
        <div className="m-3">
          <RatingComponent />
        </div>
        <div className="container">
          <CommentComponent
            userName="John Doe"
            rating={4}
            review="This movie was fantastic! Highly recommended."
          />
        </div>
      </div>
    </div>
  )
}
