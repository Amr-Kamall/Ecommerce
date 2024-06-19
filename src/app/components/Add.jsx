"use client";
import AddToCart from "./AddToCart";
import { useCart } from "../context/CartContext";

function Add({ product }) {
  const { handleQuantityIncrement, handleQuantityDecrement, quantity } =
    useCart();

  return (
    <div className="w-full border-b-2 border-gray-200 pb-5">
      <div className="w-full flex justify-between xxs:flex-row flex-col gap-5 ">
        {/* left side */}
        <div className="flex items-center gap-4  text-gray-500  font-semibold">
          available
        </div>
        {/* right side */}
        <div>
          <AddToCart product={product} />
        </div>
      </div>
    </div>
  );
}

export default Add;
