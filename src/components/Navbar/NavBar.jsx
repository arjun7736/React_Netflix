import React from 'react'

import './NavBar.css'
import avatar from "../../images/avatar.png"
const NavBar =()=> {
  return (
    <div className='navbar'>
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='Logo'/>
        <ul className='nav-items'>
          <li>Home</li>
          <li></li>
          <li>Login</li>
        </ul>
        <img className='avatar'  src={avatar} alt='Avatar'/>
    </div>
  )
}

export default NavBar;