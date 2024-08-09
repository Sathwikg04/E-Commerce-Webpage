import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import { RxCross1 } from "react-icons/rx";

const CartItems = () => {
    const {getTotalCartAmount, all_products, cartItems, removeFromCart } = useContext(ShopContext);

    const cartTotal = all_products.map((e,i) => {
        if (cartItems[Number(e.id)] > 0) {
            return <div className="cartitems-format cartitems-format-main" key={i}>
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <RxCross1 className='cartitems-remove-icon'size={20} onClick={() => { removeFromCart(e.id) }}/>
            </div>
        }
        return null;
    })

    return (
        <div className='cartitems'>
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quality</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {cartTotal}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a promo code, Enter it here!</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Promo code'/>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CartItems
