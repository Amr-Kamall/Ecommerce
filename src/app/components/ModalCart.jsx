"use client";
import Image from "next/image";
import React from "react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

function CartModal({ cartRef }) {
  const { cart, calculateSumPrice, handleRemoveProduct, quantity } = useCart();
  return (
    <div
      ref={cartRef}
      className=" w-max absolute flex-col gap-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-3 px-4 rounded-md flex top-12 right-0 bg-white z-10"
    >
      <h1 className="text-lg font-semibold">Shopping Cart</h1>
      {/* cart item */}
      {cart.length > 0 ? (
        <div
          className={`max-h-[320px] flex flex-col gap-5 overflow-x-hidden px-2`}
        >
          {cart.map((product) => (
            <div key={product.id} className="flex gap-5 items-center">
              <Link href={`/${product.id}?product=${product.name}`}>
                <Image
                  src={product.image}
                  width={70}
                  height={70}
                  className="w-[100px] h-[80px] rounded-md cover"
                  alt="cartItem"
                  priority
                />
              </Link>
              {/* product content */}
              <div className="flex justify-between flex-col">
                {/* product header */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between  w-[200px] gap-8">
                    <p className="capitalize text-md font-semibold w-full line-clamp-2 leading-5">
                      {product.name}
                    </p>
                    <p className="bg-gray-200 h-4 w-4 py-4 px-8 font-bold flex items-center justify-center">
                      ${product.price}
                    </p>
                  </div>
                  {/* product status */}
                  <div className="font-semibold mt-[-8px] text-lama">
                    avilable
                  </div>
                </div>
                {/* product footer */}
                <div className="flex justify-between">
                  <p className="font-[400]">Qty.{quantity}</p>
                  <button
                    className="text-indigo-600"
                    onClick={() => handleRemoveProduct(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-2xl">Cart Is Empty!</h1>
      )}
      {/* end cart item */}
      {/* total price */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between w-full">
          <h3 className="md:text-lg font-semibold">Subtotal</h3>
          <p className="md:text-lg font-semibold">${calculateSumPrice()}</p>
        </div>
        <p className="text-gray-700 text-sm font-semibold max-w-[300px]">
          Shipping and taxes calculated at checkout
        </p>
        {cart.length > 0 ? (
          <div className="flex justify-between items-center">
            <Link
              href="/cart"
              className="bg-lama text-white py-2 px-4 rounded-md font-semibold  transition-all duration-500"
            >
              View Cart
            </Link>
            <Link
              href={`/checkout?amount=${calculateSumPrice()}`}
              className="bg-indigo-500  text-white py-2 px-4 rounded-md font-semibold "
            >
              Checkout
            </Link>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CartModal;
