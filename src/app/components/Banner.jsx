import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
      <div className="w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
          Grab up to 50% off on
          <br /> Selected Products
        </h1>
        <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
          Buy Now
        </button>
      </div>
      <div className="relative w-1/3">
        <Image src="/man.png" alt="" fill className="object-contain" priority />
      </div>
    </div>
  );
}

export default Banner;
