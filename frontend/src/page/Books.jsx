import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Style from './Movie.module.css'
import Rating from '../Component/Rating'
import Card2 from '../Component/Card2'
import { Link, useLocation } from 'react-router-dom'

export default function Books() {
  return (
    <>
      <Navbar />
      <Hero heading="Best in Books " />
      <div className={`container ${Style.contain}`}>
        <div className={`${Style.left}`}>
          <Rating />
        </div>
        <div className={`${Style.right}`}>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Books"
              children="get reviewed before investing money in books"
              image="https://www.escapistmagazine.com/wp-content/uploads/2023/09/Best-October-Fantasy.png?resize=800%2C400"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Books"
              children="get reviewed before investing money in books"
              image="https://www.escapistmagazine.com/wp-content/uploads/2023/09/Best-October-Fantasy.png?resize=800%2C400"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Books"
              children="get reviewed before investing money in books"
              image="https://www.escapistmagazine.com/wp-content/uploads/2023/09/Best-October-Fantasy.png?resize=800%2C400"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Books"
              children="get reviewed before investing money in books"
              image="https://www.escapistmagazine.com/wp-content/uploads/2023/09/Best-October-Fantasy.png?resize=800%2C400"
            />
          </Link>
          <Link className={`${Style.dec}`} to="/Riviewpage">
            <Card2
              heading="Books"
              children="get reviewed before investing money in books"
              image="https://www.escapistmagazine.com/wp-content/uploads/2023/09/Best-October-Fantasy.png?resize=800%2C400"
            />
          </Link>
        </div>
      </div>
    </>
  )
}
