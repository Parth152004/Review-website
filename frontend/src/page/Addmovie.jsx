import React, { useState } from 'react'
import Navbar from '../Component/Navbar'
import './Addmovie.css'

const Addmovie = () => {
  const [movieData, setMovieData] = useState({
    image: '',
    name: '',
    dispcription: '',
  })

  const handleChange = (event) => {
    console.log(localStorage.getItem('userId'))
    setMovieData({
      ...movieData,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await fetch(
        `http://localhost:8080/api/User/${localStorage.getItem('userId')}/Movie`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(movieData),
        },
      )

      if (response.ok) {
        const responseData = await response.json()
        console.log('Success: Save movie', responseData)
        // Update userId state only if the response contains a valid id
      } else {
        const errorData = await response.json()
        console.error('Error:', errorData.error)
      }
    } catch (error) {
      console.error('Error:', error.message)
    }
    setMovieData({
      image: '',
      name: '',
      dispcription: '',
    })
  }

  return (
    <>
      <Navbar />
      <div className="add-movie-container">
        <div className="from-cont">
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
              <label htmlFor="dispcription">Movie Description:</label>
              <textarea
                name="dispcription"
                id="dispcription"
                rows="5"
                value={movieData.dispcription}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Add Movie</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Addmovie
