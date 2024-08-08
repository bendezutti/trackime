import React from 'react'
import './AnimeCard.css'
import testImage from '../../TestImage/JJK.png'
const AnimeCard = () => {
  return (
    <div className='card'>
      <div className='animeImage'>
       <img src ={testImage}/>
      </div>

    </div>
  )
}

export default AnimeCard