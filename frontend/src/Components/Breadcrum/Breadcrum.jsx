import React from 'react'
import './Breadcrum.css'
import { IoIosArrowForward } from "react-icons/io";

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME 
      <IoIosArrowForward size={20}/> 
      SHOP 
      <IoIosArrowForward size={20}/> 
      {product.category}
      <IoIosArrowForward size={20}/>  
      {product.name}
    </div>
  )
}

export default Breadcrum
