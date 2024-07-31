import React from 'react'
import './Hero.css'
import { FaRegHandPeace } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import hero_icon from '../Assets/hero.png'

const Hero = () => {
  return (
    <div className='hero'> 
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY!</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <FaRegHandPeace size={100}/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <FaArrowRight/>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_icon} width={500} alt=''/>
      </div>
    </div>
  )
}

export default Hero
