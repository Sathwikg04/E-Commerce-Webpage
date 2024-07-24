import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product_icon from '../../assets/main.jpg'
import list_product_icon from '../../assets/main.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'> 
      <Link to={'./addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={add_product_icon} alt='' width={60}/>
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
        <img src={list_product_icon} alt='' width={60}/>
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
