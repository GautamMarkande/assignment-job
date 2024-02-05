import React from 'react'
import '../card/Card.css'
function Card({id,name}) {
  return (
    <div className='cardContainer'>
      <h3 className='cardH3'>{id}</h3>
       <p className='cardInfop'>{name}</p>
    </div>
  )
}

export default Card
