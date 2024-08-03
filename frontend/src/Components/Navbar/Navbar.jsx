import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";

const navbar = () => {
  const [menu, setMenu] = useState("shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' width={200}></img>
        <p>Footy</p>
      </div>
      <IoIosArrowDropdown className='nav-dropdown'onClick={dropdown_toggle} size={40}/>
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={() => { setMenu("shop") }}>
          <Link style={{textDecoration:'none'}} to='/'>Home</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("mens") }}>
          <Link style={{textDecoration:'none'}} to='/mens'>Mens</Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("womens") }}>
          <Link style={{textDecoration:'none'}} to='/womens'>Womens</Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("kids") }}>
          <Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
        :<Link to='/login'><button onClick={() => { setMenu("login") }}>Login</button></Link>}
        <Link to='/cart'><FaShoppingCart size = {40} onClick={() => { setMenu("cart") }}/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default navbar
