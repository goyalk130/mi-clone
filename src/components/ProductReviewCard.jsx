import React from 'react'
import "../styles/ProductReviewCard.css"

export default function ProductReviewCard({image,price,index,name,review}) {
  return (
    <div className='ProductReviewCard' >
        <img src={image} alt={`${index} review`} />
        <h5>{review}</h5>
        <spna>{name}</spna>
        <b>{price}</b>
    </div>
  )
}
