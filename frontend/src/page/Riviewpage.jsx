import React, { useEffect, useState } from 'react'
import './Rivewpage.css' // Assuming CSS file is in the same directory
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../Component/Navbar'
import Card from '../Component/Card'
import RatingComponent from '../Component/Rating'
import '../Component/Rating.css'
import CommentComponent from '../Component/Coment'

export default function Riviewpage() {
  const location = useLocation() // Get location object
  const { movie } = location.state || {} // Access movie data from state (handle missing state)
  const [rating, setRating] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [reviews, setReviews] = useState([])
  const navigate = useNavigate()

  if (!movie) {
    return <div>Movie data not found. Please select a movie.</div>
  }
  console.log(movie.id)
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/movies/${movie.id}/reviews`,
        )
        const data = await response.json()
        setReviews(data)
      } catch (error) {
        console.error('Error fetching reviews:', error)
      }
    }

    fetchReviews()
  }, [movie.id])

  console.log(reviews)
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

  function handleClick(movie) {
    navigate('/Riviewfrom', { state: { movie } })
  }

  return (
    <>
      <Navbar />
      <Card
        heading={movie.name}
        children={movie.dispcription}
        image={movie.image}
      />
      <div className="container ">
        <div className="review" onClick={() => handleClick(movie)}>
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
        <div className="m-3">
          <RatingComponent />
        </div>
        <div className="container mt-4">
          <h2>Reviews</h2>
          {reviews.map((review) => (
            <CommentComponent
              key={review.id}
              userName={review['user']['name']}
              rating={review.rating}
              review={review.comment}
            />
          ))}
        </div>
      </div>
    </>
  )
}
