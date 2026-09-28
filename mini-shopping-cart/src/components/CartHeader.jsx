import { ShoppingCart } from "lucide-react";

const CartHeader = (props) => {
  return (
    <div className="flex px-10 py-7 justify-between bg-gray-700 text-white">
      <h2 className="flex items-center gap-3 text-3xl font-bold">
        <ShoppingCart size={34} className="btn" /> Mini Shpping Cart
      </h2>
      <div className="relative">
        <span>
          <ShoppingCart size={30}/>
        </span>
        <span className="absolute -top-3 -right-6 h-7 w-7 rounded-full bg-red-500 text-sm font-bold flex items-center justify-center">
          {props.totalItems}
        </span>
      </div>
    </div>
  );
};

export default CartHeader;
