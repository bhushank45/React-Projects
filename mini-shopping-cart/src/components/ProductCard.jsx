import React from "react";

const ProductCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>₹ {props.price}</p>
      <button onClick={() => props.decreaseQuantity(props.name)}>-</button>
      <span>{props.quantity}</span>
      <button onClick={() => props.increaseQuantity(props.name)}>+</button>
    </div>
  );
};

export default ProductCard;
