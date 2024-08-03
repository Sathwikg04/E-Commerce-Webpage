import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
      <div className="shopcategory-indexSort">
        <div className='shopcategory-container'>
        <p>
          <span>Showing 1-10</span> out of 30 products
        </p>
        <div className="shopcategory-sort">
          Sort by <IoIosArrowDropdown size={40}/>
        </div>
        </div>
        <div className="shopcategory-products">
          {all_products.map((items, i) => {
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
