import React from 'react'
import Style from './Hero.module.css'

export default function Hero(props) {
  return (
    <>
      <div className={`${Style.space}`}>
        <div className={`container ${Style.content}`}>
          <h1 className={Style.heading}>{props.heading}</h1>
          <h2 className={Style.subheading}>{props.subheading}</h2>
        </div>
      </div>
    </>
  )
}
