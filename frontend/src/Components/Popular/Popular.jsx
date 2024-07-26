import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Item/Item'

const Popular = () => {

  const [popularProducts,setPopularProducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen')
    .then((res)=>res.json())
    .then((data)=>setPopularProducts(data));
  },[])

  const data = popularProducts.map((items,i) => {
    return <Item
      key={i}
      id={items.id}
      name={items.name}
      image={items.image}
      new_price={items.new_price}
      old_price={items.old_price}
    />
  })

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data}
      </div>
    </div>
  )
}

export default Popular;