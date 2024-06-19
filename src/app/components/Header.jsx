"use client";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Icons from "./Icons";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const pathname = usePathname();
  // console.log(pathname);
  const { cart } = useCart();

  useEffect(() => {
    if (isOpenMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpenMenu]);
  if (pathname === "/sign-up" || pathname === "/sign-in") return;
  return (
    <div className="shadow-md h-16 py-6 mx-auto top-0 left-0 fixed z-[1000000] bg-white navScreen:w-[100%] navScreen:px-2 flex md:justify-center w-full px-8 justify-between items-center">
      {/* left side */}
      <div className="left-side flex items-center w-1/2 gap-10  ">
        <Link href="/">
          <div className="logo flex gap-2 items-center">
            <Image src="/logo.png" alt="img" width={20} height={20} />
            <span className="text-xl xl:text-2xl font-semibold cursor-pointer tracking-wider uppercase">
              commerce
            </span>
          </div>
        </Link>
        {/* links */}
        <div className="links md:hidden navScreen:block z-10">
          <ul
            className={`${
              isOpenMenu ? "returnBack" : ""
            } translate-x-[-100%] md:translate-x-0 flex md:flex-row justify-center md:justify-normal items-center md:items-start gap-10 md:gap-5 text-2xl md:text-[16px] flex-col fixed z-10 md:relative inset-0 md:inset-[none] w-full mycalc bg-black text-white md:bg-white md:text-black`}
          >
            <NavLink setIsOpenMenu={setIsOpenMenu} href="/">
              homePage
            </NavLink>

            <NavLink setIsOpenMenu={setIsOpenMenu} href="shop">
              shop
            </NavLink>

            <NavLink setIsOpenMenu={setIsOpenMenu} href="deals">
              deals
            </NavLink>

            <NavLink setIsOpenMenu={setIsOpenMenu} href="about">
              about
            </NavLink>

            <NavLink setIsOpenMenu={setIsOpenMenu} href="contact">
              contact
            </NavLink>

            {isOpenMenu ? (
              <>
                <NavLink setIsOpenMenu={setIsOpenMenu} href="cart">
                  cart ({cart.length})
                </NavLink>
              </>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      {/* right side */}
      <div className="right-side hidden md:flex items-center  gap-5">
        <SearchInput />
        <UserButton />
        <Icons />
      </div>
      <div
        onClick={() => setIsOpenMenu((is) => !is)}
        className="block md:hidden cursor-pointer fixed right-10 top-5  text-white z-50  py-4 px-1 "
      >
        <div className={`bar ${isOpenMenu ? "openBar" : ""} `}></div>
      </div>
    </div>
  );
}

export default Header;
