"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import CartModal from "./ModalCart";
import { useCart } from "../context/CartContext";
import { useUser } from "@clerk/nextjs";

function Icons() {
  const profileRef = useRef(null);
  const cartRef = useRef(null);
  const profileIconRef = useRef(null);
  const cartIconRef = useRef(null);
  const [isProfileOpened, setIsProfileOpened] = useState(false);
  const [isCartOpened, setIsCartOpened] = useState(false);
  const { user } = useUser();
  const { cart } = useCart();

  function handleProfileOpen(e) {
    setIsProfileOpened((prev) => !prev);
    setIsCartOpened(false);
  }

  function handleCartOpen(e) {
    setIsCartOpened((prev) => !prev);
    setIsProfileOpened(false);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        profileRef.current &&
        !profileRef.current.contains(e.target) &&
        !profileIconRef.current.contains(e.target)
      ) {
        setIsProfileOpened(false);
      }
      if (
        cartRef.current &&
        !cartRef.current.contains(e.target) &&
        !cartIconRef.current.contains(e.target)
      ) {
        setIsCartOpened(false);
      }
    }

    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div>
      <div className="icon flex items-center xl:gap-5 gap-4 relative">
        {!user && (
          <Image
            ref={profileIconRef}
            src="/profile.png"
            className="cursor-pointer relative  min-w-6"
            alt="icon"
            width={20}
            height={20}
            onClick={handleProfileOpen}
          />
        )}
        {isProfileOpened && (
          <div
            ref={profileRef}
            className="flex z-10 flex-col gap-3 justify-center items-center absolute top-12 bg-white right-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] py-4 w-[100px] rounded-md"
          >
            <Link href="/sign-in" className="cursor-pointer flex-grow">
              Sign in
            </Link>
            <Link href="/sign-up" className="cursor-pointer">
              Sign up
            </Link>
          </div>
        )}
        <Image
          src="/notification.png"
          className="cursor-pointer  min-w-6"
          alt="icon"
          width={20}
          height={20}
        />
        <div className="relative">
          <Image
            ref={cartIconRef}
            src="/cart.png"
            className="cursor-pointer min-w-6"
            alt="icon"
            width={20}
            height={20}
            onClick={handleCartOpen}
          />
          {isCartOpened && <CartModal cartRef={cartRef} />}
          {cart.length > 0 && (
            <div className="bg-lama w-6 h-6 flex justify-center items-center rounded-full text-sm absolute bottom-4 left-4 text-white">
              {cart.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Icons;
