import React from 'react'
import './Popular.css'
import item from '../Assets/data'
import Item from '../Item/Item'

const Popular = () => {
  const data = item.map((items,i) => {
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