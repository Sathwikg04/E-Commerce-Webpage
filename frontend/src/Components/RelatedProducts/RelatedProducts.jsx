import React from 'react'
import './RelatedProducts.css'
import item from '../Assets/data'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
      {item.map((items, i) => {
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
