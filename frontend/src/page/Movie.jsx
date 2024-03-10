import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Style from './Movie.module.css'
import Card2 from '../Component/Card2'
import Rating from '../Component/Rating'
import { Link, useNavigate } from 'react-router-dom'

export default function Movie() {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null) // State to store selected movie
  const navigate = useNavigate() // Corrected the variable name to navigate

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8080/api/User/Movies',
        )
        setMovies(response.data)
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    }

    fetchMovies()
  }, [])

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie)
    console.log('movie:', movie.id)
    navigate('/Riviewpage', { state: { movie } }) // Passing movie as state to the next page
  }

  return (
    <>
      <Navbar />
      <Hero heading="Best in Movies" />
      <div className={`container ${Style.contain}`}>
        <div className={`${Style.left}`}>
          <Rating />
        </div>
        <div className={`${Style.right}`}>
          {movies.map((movie) => (
            <div key={movie.id} className={`${Style.dec}`}>
              <div
                className={`${Style.dec}`}
                onClick={() => handleMovieSelect(movie)} // Using onClick directly here
              >
                <Card2
                  heading={movie.name}
                  subheading={movie.dispcription}
                  image={movie.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
