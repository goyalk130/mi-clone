import React from 'react'
import Offer from "../components/Offer.jsx"
import "../styles/Offers.css"

export default function Offers({offer}) {
  return (
    <div className='offersSection'>
        {offer.map((item,index)=>(
          <Offer key={item.index} index={index} src={item.image} link={item.url}/>  
        ))}
    </div>
  )
}
