import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Style from './Movie.module.css'
import Card2 from '../Component/Card2'
import Rating from '../Component/Rating'
import { Link, useLocation } from 'react-router-dom'

export default function Movie() {
  const [movies, setMovies] = useState([])

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

  return (
    <>
      <Navbar />
      <Hero heading="Best in Movies " />
      <div className={`container ${Style.contain}`}>
        <div className={`${Style.left}`}>
          <Rating />
        </div>
        <div className={`${Style.right}`}>
          {movies.map((movie) => (
            <Link key={movie.id} className={`${Style.dec}`} to="/Riviewpage">
              <Card2
                heading={movie.name}
                children={movie.dispcription}
                image={movie.image}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
