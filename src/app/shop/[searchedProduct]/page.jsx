import React from "react";
import { getAllProducts } from "../../../../lib";
import Link from "next/link";
import Image from "next/image";
import AddToCart from "../../components/AddToCart";

async function SearchedProductPage({ params }) {
  const searchedProduct = params.searchedProduct;
  const products = await getAllProducts();
  console.log(products);
  console.log("merroooooo");

  const filteredProducts = products.filter((pro) =>
    pro.attributes.name.toLowerCase().includes(searchedProduct.toLowerCase())
  );
  if (filteredProducts.length === 0) {
    return (
      <h1 className="pt-40 text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-lama">
        product not found!
      </h1>
    );
  }
  return (
    <div className="w-4/5 mx-auto pt-32">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 w-full navScreen:grid-cols-4 gap-7">
        {filteredProducts.map((product) => {
          const productDetails = {
            id: product.id,
            name: product.attributes.name,
            price: product.attributes.price,
            description: product.attributes.description[0].children[0].text,
            quantity: 1,
            image: product.attributes.image.data[0].attributes.url,
          };
          return (
            <div
              key={product.id}
              className="flex flex-col items-start gap-2 w-full"
            >
              <div className="rounded-md w-full bg-blue-300 h-full relative flex justify-center items-center">
                <Link
                  href={`/${product.id}?product=${product.attributes.name}`}
                >
                  <Image
                    className="h-[230px] object-cover md:w-full left-0 right-0 top-0 absolute rounded-md z-20 hover:opacity-0 transition-all duration-500"
                    src={product.attributes.image.data[0].attributes.url}
                    alt="img"
                    width={1000}
                    height={1000}
                  />
                  <Image
                    className="h-[230px] sm:min-w-[200px] min-w-[280px] rounded-md object-cover"
                    src={product.attributes.image.data[1].attributes.url}
                    alt="img"
                    width={1000}
                    height={1000}
                  />
                </Link>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="font-semibold">{product.attributes.name}</p>
                <p className="font-semibold">${product.attributes.price}</p>
              </div>
              <div className="text-sm text-gray-500">perfect organic mean</div>
              <div className="mt-1">
                <AddToCart product={productDetails} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchedProductPage;
