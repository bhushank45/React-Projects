import { useState } from "react";
import ProductCard from "./components/ProductCard";
import CartHeader from "./components/CartHeader";
import CartSummary from "./components/CartSummary";

const App = () => {
  const products = [
    {
      name: "Headphones",
      price: 18000,
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lJTIwcG5nfGVufDB8fDB8fHww",
    },
    {
      name: "Keyboard",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1632079003110-d694908500da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtleWJvYXJkfGVufDB8fDB8fHww",
    },
    {
      name: "Mouse",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1755373255602-c030aac3bc69?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vdXNlJTIwZ2FtaW5nfGVufDB8fDB8fHww",
    },
  ];

  const [quantities, setQuantities] = useState({
    Headphones: 0,
    Keyboard: 0,
    Mouse: 0,
  });

  const totalItems = Object.values(quantities).reduce((total, quantity) => {
    return total + quantity;
  }, 0);

  const totalPrice = products.reduce((total, product) => {
    return total + product.price * quantities[product.name];
  }, 0);

  const increaseQuantity = (product) => {
    setQuantities({ ...quantities, [product]: quantities[product] + 1 });
  };

  const decreaseQuantity = (product) => {
    setQuantities({
      ...quantities,
      [product]: Math.max(0, quantities[product] - 1),
    });
  };
  return (
    <div>
      <div>
        <CartHeader totalItems={totalItems} />
        <h2>{totalPrice}</h2>
      </div>
      {products.map((product, idx) => {
        return (
          <ProductCard
            key={idx}
            name={product.name}
            price={product.price}
            quantity={quantities[product.name]}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        );
      })}
      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
};

export default App;
