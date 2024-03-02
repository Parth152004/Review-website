import React from 'react'
import Style from './Card.module.css'

export default function Card({ heading, children, image }) {
  return (
    <div className={`container ${Style.card}`}>
      <div className={`${Style.left}`}>
        <h2>{heading}</h2>
        <div className={`${Style.content}`}>{children}</div>
      </div>
      <div className={`${Style.right}`}>
        <img src={image} alt={heading} className={`${Style.image}`} />
      </div>
    </div>
  )
}
