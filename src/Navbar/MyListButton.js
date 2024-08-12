import React from 'react'
import { Link } from 'react-router-dom'

 const MyListButton = () => {
  return (
    <div> 
      <Link to='/mylist'> 
        <button> My List </button>
      </Link>
    </div>
  )
}
export default MyListButton