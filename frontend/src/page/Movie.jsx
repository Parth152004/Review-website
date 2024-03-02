import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Style from './Movie.module.css'
import Card2 from '../Component/Card2'
import Rating from '../Component/Rating'
import { Link, useLocation } from 'react-router-dom'

export default function Movie() {
  return (
    <>
      <Navbar />
      <Hero heading="Best in Movies " />
      <div className={`container ${Style.contain}`}>
        <div className={`${Style.left}`}>
          <Rating />
        </div>
        <div className={`${Style.right}`}>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Movies"
              children="plan next movie you want to see in theaters"
              image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Movies"
              children="plan next movie you want to see in theaters"
              image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Movies"
              children="plan next movie you want to see in theaters"
              image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Movies"
              children="plan next movie you want to see in theaters"
              image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Movies"
              children="plan next movie you want to see in theaters"
              image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Movies"
              children="plan next movie you want to see in theaters"
              image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
            />
          </Link>
        </div>
      </div>
    </>
  )
}
