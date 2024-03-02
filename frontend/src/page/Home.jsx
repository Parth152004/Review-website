import React from 'react'
import Navbar from '../Component/Navbar'
import Hero from '../Component/Hero'
import Style from './Home.module.css'
import Card from '../Component/Card'
import Footer from '../Component/Footer'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero
        heading="Review is essential to evaluation,"
        subheading="Which is essential to  progress."
      />
      <div className={`${Style.colorback}`}>
        <div className={`container ${Style.maincom}`}>
          <h2>Explore Categories</h2>
        </div>
        <Link to="/Movie" className={`${Style.dec}`}>
          <Card
            heading="Movies"
            children="plan next movie you want to see in theaters"
            image="https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg"
          />
        </Link>
        <Link to="/Books" className={`${Style.dec}`}>
          <Card
            heading="Books"
            children="get reviewed before investing money in books"
            image="https://www.escapistmagazine.com/wp-content/uploads/2023/09/Best-October-Fantasy.png?resize=800%2C400"
          />
        </Link>
      </div>
      <div className={`container`}>
        <div className={`${Style.header}`}>
          <h1>Be Heard</h1>
        </div>
        <div className={`${Style.content}`}>
          <p className={`${Style.paragraph}`}>
            Review is free and open to every consumer .
          </p>
          <p className={`${Style.paragraph}`}>
            Sharing your experiences helps others make better choices.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}
