import React, { useState } from 'react'
import Navbar from '../Component/Navbar'

const Addmovie = () => {
  const [movieData, setMovieData] = useState({
    image: '',
    name: '',
    description: '',
  })

  const handleChange = (event) => {
    setMovieData({
      ...movieData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Implement form submission logic here
    // e.g., send data to your backend API for storing the movie information
    console.log('Movie data:', movieData) // For now, just log the data

    // Clear the form after submission (optional)
    setMovieData({
      image: '',
      name: '',
      description: '',
    })
  }

  return (
    <div className="add-movie-container">
      <Navbar />
      <h1>Add Movie</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Movie Image URL:</label>
          <input
            type="text"
            name="image"
            id="image"
            value={movieData.image}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Movie Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={movieData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Movie Description:</label>
          <textarea
            name="description"
            id="description"
            rows="5"
            value={movieData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

export default Addmovie
