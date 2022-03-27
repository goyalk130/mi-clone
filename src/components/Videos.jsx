import React from 'react'
import HotItemCard from './HotItemCard'
import VideoCard from './VideoCard'
import "../styles/Videos.css"

export default function Videos({videos}) {
  return (
    <div className='videos' >
        {
            videos.map((item,index)=>(
                <VideoCard index={index} key={item.image}  image={item.image} />
            ))
        }
    </div>
  )
}
