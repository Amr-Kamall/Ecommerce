import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="bg-pink-50 px-4 flex mySm:justify-center justify-between h-64 mySm:text-center  ">
      <div className="mySm:w-2/3   w-full flex mySm:justify-center flex-col items-center justify-center gap-8">
        <h1 className="text-md mySm:text-2xl md:text-4xl font-semibold text-center mySm:leading-[48px] text-gray-700">
          Grab up to 50% off on
          <br /> Selected Products
        </h1>
        <button className="rounded-3xl bg-lama text-white w-max py-3 px-5 text-sm">
          Buy Now
        </button>
      </div>
      <div className="hidden mySm:block relative w-1/3">
        <Image src="/man.png" alt="" fill className="object-contain" priority />
      </div>
    </div>
  );
}

export default Banner;
