import React from 'react'

const CartSummary = (props) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 mt-8 mx-5 shadow-sm">
      <h2 className="text-2xl font-bold mb-6 bg-gray-200 px-5 py-3 rounded-full">Cart Summary</h2>
      <div className="flex justify-between pb-4 border-b border-gray-200 px-10">
        <p className="text-lg">Total Items</p>
        <span className="text-lg font-semibold">{props.totalItems}</span>
      </div>
      <div className="flex justify-between pt-4 px-10">
        <p className='text-lg'>Total Price</p>
        <span className="text-red-500 font-bold text-lg">₹ {props.totalPrice}</span>
      </div>
    </div>
  );
}

export default CartSummary