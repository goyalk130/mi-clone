import React from 'react'
import "../styles/HotItemCard.css"

export default function HotItemCard({image,index,name,price}) {
  return (
    <div className='HotItemCard' >
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}
