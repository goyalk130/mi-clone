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
            <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
        </div>
    </div>
  )
}
