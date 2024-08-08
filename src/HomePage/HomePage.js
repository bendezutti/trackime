import React from 'react'
import AnimeCard from './Components/AnimeCard';
import './HomePage.css'
import LikeButton from './Components/LikeButton';
import DislikeButton from './Components/DislikeButton';
import './Components/LikeAndDislikeButton.css'

const HomePage = () => {
  return (
    <div>
    <div className = 'homePage'>
       <AnimeCard/> 
    </div>

    <div className='buttonDisplay'> 
      <LikeButton/> 
      <DislikeButton/>
    </div>

    </div>

  )
}
export default HomePage;
