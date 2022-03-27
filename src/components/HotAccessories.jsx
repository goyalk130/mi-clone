import React from 'react'
import HotItemCard from './HotItemCard'
import "../styles/HotAccessories.css"

export default function HotAccessories({
    data,dataCover
}) {
  return (
    <div className='HotAccessories' >
        <div>
            <img src={dataCover} alt="Cover" />
        </div>

        <div>
            {data.map((item,index)=>(
                <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />

            ))}
        </div>
    </div>
  )
}
