import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.png'
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-logo' width={80}/>
        <CgProfile size={50} />
    </div>
  )
}

export default Navbar
