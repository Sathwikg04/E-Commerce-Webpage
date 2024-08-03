import React from 'react'
import { useState, useEffect } from 'react'
import './RelatedProducts.css'
import Item from '../Item/Item'

const RelatedProducts = (props) => {
  const [rel, setRel] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/newcollections')
      .then((res) => res.json())
      .then((data) => setRel(data));
  }, [])

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {rel.map((items, i) => {
          return <Item
            key={i}
            id={items.id}
            name={items.name}
            image={items.image}
            new_price={items.new_price}
            old_price={items.old_price}
          />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
