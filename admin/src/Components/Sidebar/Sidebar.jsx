import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { BsFillCartPlusFill } from "react-icons/bs";
import { IoMdListBox } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className='sidebar'> 
      <Link to={'./addproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
      <BsFillCartPlusFill size={60}/>
        <p>Add Product</p>
      </div>
      </Link>
      <Link to={'/listproduct'} style={{textDecoration:"none"}}>
      <div className="sidebar-item">
      <IoMdListBox size={60}/>
        <p>Product List</p>
      </div>
      </Link>
    </div>
  )
}

export default Sidebar
