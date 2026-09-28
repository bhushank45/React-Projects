import { useState } from "react";
import ProductCard from "./components/ProductCard";
import CartHeader from "./components/CartHeader";

const App = () => {
  const products = [
    {
      name: "Headphones",
      price: 18000,
    },
    {
      name: "Keyboard",
      price: 2500,
    },
    {
      name: "Mouse",
      price: 800,
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
      {products.map((product, idx) => {
        return (
          <div>
            <CartHeader />
            <ProductCard
              key={idx}
              name={product.name}
              price={product.price}
              quantity={quantities[product.name]}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
