import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/main.jpg'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME 
      <img src={arrow_icon} alt='' width={20}/> 
      SHOP 
      <img src={arrow_icon} alt=''width={20}/> 
      {product.category}
      <img src={arrow_icon} alt=''width={20}/> 
      {product.name}
    </div>
  )
}

export default Breadcrum
