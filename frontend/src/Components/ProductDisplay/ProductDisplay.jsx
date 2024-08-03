import React, { useContext } from 'react'
import './ProductDisplay.css'
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
          <img src={product.image} alt='' />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <MdOutlineStarPurple500 size={20} />
          <MdOutlineStarPurple500 size={20} />
          <MdOutlineStarPurple500 size={20} />
          <MdOutlineStarPurple500 size={20} />
          <MdOutlineStarOutline size={20} />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price_old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Limited Stock!
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <div className="productdisplay-right-category">
          <span>Category :</span>{product.category}, T-Shirt, sports
        </div>
        <div className="productdisplay-right-category">
          <span>Tags :</span>Modern, Latest, Jersey
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
