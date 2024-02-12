import React from 'react'
import './Cart.css'

const Cart = () => {
  return (
    <div>
        <div id="cart" className="cart">
          <div className="cart-contents"></div>
        
          <div className="cart-total">
            <h5>total</h5>
            <h5> &#8358; <strong className="cart-total-price">0</strong> </h5>
          </div>
       
          <div className="cart-buttons">
            <a  id="clear-cart" className="clear-cart">clear cart</a>
            <a  className="checkout">checkout</a>
          </div>
          
        </div>
    </div>
  )
}

export default Cart
