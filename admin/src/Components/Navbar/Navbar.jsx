import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/main.jpg'
import navProfile from '../../assets/main.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-logo' width={80}/>
        <img src={navProfile} className='nav-profile' alt='' width={80}/>
    </div>
  )
}

export default Navbar
