import React from 'react'
import Style from './Card.module.css'
import Style2 from './Card2.module.css'

export default function Card2({ heading, children, image }) {
  return (
    <div className={`container ${Style.card} ${Style2.card}`}>
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
