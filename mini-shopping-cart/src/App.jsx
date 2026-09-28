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
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Keyboard",
      price: 2500,
      image:
        "https://images.unsplash.com/photo-1722445423294-f3bc8317d93b?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Mouse",
      price: 800,
      image:
        "https://images.unsplash.com/photo-1658070429465-848c0796abf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW91c2V8ZW58MHx8MHx8fDA%3D",
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
      </div>
      <div className="flex justify-around m-5">
        {products.map((product, idx) => {
          return (
            <ProductCard
              key={idx}
              name={product.name}
              image={product.image}
              price={product.price}
              quantity={quantities[product.name]}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          );
        })}
      </div>
      <CartSummary totalItems={totalItems} totalPrice={totalPrice} />
    </div>
  );
};

export default App;
