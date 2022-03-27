import React from 'react'

export default function Offer({src,link,index}) {
  return (<a href={link} > <img src={src} alt={`${index} Offer`} /> </a>
  )
}
