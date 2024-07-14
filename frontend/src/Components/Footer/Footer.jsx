import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/main.jpg' 
import instageam_icon from '../Assets/main.jpg'
import pinterest_icon from '../Assets/main.jpg'
import whatsapp_icon from '../Assets/main.jpg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='' width={100}/>
        <p>SHOPPER</p>
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
            <img src={instageam_icon} alt='' width={20}/>
        </div>
        <div className="footer-icons-container">
            <img src={pinterest_icon} alt='' width={20}/>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt='' width={20}/>
        </div>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>Copyright @ 2024 - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
