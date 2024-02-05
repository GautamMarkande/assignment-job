import React from 'react'
import '../card/CurrRateCard.css'
function CurrRateCard({id,rate}) {
  return (
    <div className='cardContainer'>
      <h3 className='cardH3'>{id}</h3>
       <p className='cardInfop'>Rate: {rate}</p>
    </div>
  )
}

export default CurrRateCard
