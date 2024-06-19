import Image from "next/image";
import React from "react";
import { getDeals } from "../../../lib";
import Link from "next/link";

async function DealsPage() {
  const deals = await getDeals();
  return (
    <section>
      <div className="mx-auto w-4/5 pt-24 px-4">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p className="mx-auto mt-4 max-w-md text-gray-500">
            the right place to be if you are a shopping lover. You will find
            here everything related to men&apos;s and women&apos;s fashion.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {deals.map((deal) => (
            <li
              key={deal.id}
              className={
                deal.attributes.name === "White T-Shirt"
                  ? "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1"
                  : ""
              }
            >
              <Link
                href={`/${
                  deal.attributes.name === "White T-Shirt"
                    ? 23
                    : deal.attributes.name === "Tote Bag"
                    ? 16
                    : 9
                }?product=${deal.attributes.name}`}
                className="group relative block"
              >
                <Image
                  src={deal.attributes.image.data.attributes.url}
                  alt="img"
                  width={1000}
                  height={1000}
                  className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
                />

                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                  <h3
                    className="text-xl font-medium text-white"
                    style={{ textShadow: "#000  1px 0 10px" }}
                  >
                    {deal.attributes.name}
                  </h3>

                  <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                    Shop Now
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DealsPage;
