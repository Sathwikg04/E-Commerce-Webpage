import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import { FaInstagram } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='' width={200} />
        <p>Footy</p>
      </div>
      <ul>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <FaInstagram size={25} />
        </div>
        <div className="footer-icons-container">
          <FaPinterest size={25} />
        </div>
        <div className="footer-icons-container">
          <FaWhatsapp size={25} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
