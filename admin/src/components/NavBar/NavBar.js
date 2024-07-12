import React from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
const NavBar = () => {
  return (
    <div className='navbar'>
        <img className='logo' src={assets.logo}></img>
       <div className='navbar-profile-text'>
            <img className='profile' src={assets.profile_image}></img>
            <p>Admin Panel</p>
       </div>
        
    </div>
  )
}

export default NavBar
