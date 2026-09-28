import React from "react";

const ProductCard = (props) => {
  return (
    <div className="border border-gray-200 rounded-xl p-6 shadow-sm bg-white">
      <img
        src={props.image}
        alt={props.name}
        className="w-full h-48 object-contain"
      />
      <h2 className="text-2xl font-bold text-gray-800">{props.name}</h2>

      <p className="text-xl font-bold text-red-500 mt-2">
        ₹ {props.price.toLocaleString("en-IN")}
      </p>

      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={() => props.decreaseQuantity(props.name)}
          className="h-10 w-10 rounded-lg bg-red-500 text-white text-xl font-bold hover:bg-red-600 transition"
        >
          -
        </button>

        <span className="text-xl font-semibold">{props.quantity}</span>

        <button
          onClick={() => props.increaseQuantity(props.name)}
          className="h-10 w-10 rounded-lg bg-green-500 text-white text-xl font-bold hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
