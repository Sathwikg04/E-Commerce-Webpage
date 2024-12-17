import React, { useContext, useState } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [text, setText] = useState("");
  const [limit, setLimit] = useState(10);

  const searchedProducts = all_products.filter(item => item.name.toLowerCase().includes(text.toLowerCase()));

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt='' />
      <div className="shopcategory-indexSort">
        <div className='shopcategory-container'>
          <input placeholder='Search for Products' onChange={(e) => setText(e.target.value)} className="shopcategory-input"></input>
          <p>
            <span>Showing 1-{limit}</span> out of 30 products
            <div className="shopcategory-sort">
              <label htmlFor="list">Number of items:</label>
              <select defaultValue="10" name="list" id="list" onChange={(e) => setLimit(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
            </div>
          </p>
        </div>
        <div className="shopcategory-products">
          {searchedProducts.map((items, i) => {
            if (props.category === items.category) {
              return <Item
                key={i}
                id={items.id}
                name={items.name}
                image={items.image}
                new_price={items.new_price}
                old_price={items.old_price}
              />
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
