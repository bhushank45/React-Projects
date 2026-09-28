import React from 'react'

const CartSummary = (props) => {
  return (
    <div>
      <h2>Cart Summary</h2>
      <div>
        <p>Total Items</p>
        <span>{props.totalItems}</span>
      </div>
      <div>
        <p>Total Price</p>
        <span>₹ {props.totalPrice}</span>
      </div>
    </div>
  );
}

export default CartSummary