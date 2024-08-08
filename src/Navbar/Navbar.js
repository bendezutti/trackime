import React from 'react'
import RegisterButton from './RegisterButton'
import LoginButton from './LoginButton'
import LogoutButton from './LogoutButton'
import HomeButton from './HomeButton'
import MyListButton from './MyListButton'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <HomeButton/>
      <MyListButton/>
      <RegisterButton/>
      <LoginButton/>
      <LogoutButton/>
    </div>
  )
}

export default Navbar