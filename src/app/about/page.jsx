import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div className="sm:flex items-center mx-auto pt-28 w-4/5">
      <div className="sm:w-1/2 px-10">
        <div className="image object-center text-center">
          <Image
            src="https://i.imgur.com/WbQnbas.png"
            alt=""
            width={1000}
            height={1000}
            priority
          />
        </div>
      </div>
      <div className="sm:w-1/2 p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-lama uppercase">
            About us
          </span>
          <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            About <span className="text-lama">Our TrendMart</span>
          </h2>
          <p className="text-gray-700">
            we are more than just a shopping destination. We are a community of
            passionate individuals who share a love for great products and
            excellent service. Follow us on social media to stay updated on the
            latest arrivals, special offers, and exclusive promotions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
