"use client";
import { useCart } from "../context/CartContext";

function AddToCart({ product }) {
  const { onAddToCart } = useCart();
  return (
    <button
      onClick={() => onAddToCart(product)}
      className="bg-transparent font-semibold text-sm text-lama ring-lama border-lama rounded-2xl ring-1  py-2 px-4  hover:bg-lama hover:text-white transition-all duration-500"
    >
      Add to cart
    </button>
  );
}

export default AddToCart;
