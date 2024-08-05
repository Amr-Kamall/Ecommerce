"use client";
import { useEffect, useState } from "react";
import ImagesSwap from "../components/ImagesSwap";
import Add from "../components/Add";
import SkeltonText from "../components/SkeltonText";
import { allProducts } from "../data/data";

function ProductDetails({ params }) {
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const selectedId = Number(params.selectedProductSlug);
    const product = allProducts.find((pro) => pro.id === selectedId);

    // Simulate a delay to fetch data
    setTimeout(() => {
      setSelectedProduct(product);
      setLoading(false);
    }, 1000); // Adjust the delay as needed
  }, [params.selectedProductSlug]);

  const { name, description, price, image } = selectedProduct || {};
  const productDetails = {
    id: selectedProduct?.id,
    name: selectedProduct?.name,
    price: selectedProduct?.price,
    quantity: 1,
    image: selectedProduct?.image[0],
    description: selectedProduct?.description,
  };

  return (
    <div className="pt-28 grid grid-cols-1 navScreen:grid-cols-2 w-4/5 mx-auto gap-7">
      <ImagesSwap loading={loading} swappedImages={image} />

      {!loading ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 border-b-2 border-gray-200 pb-5">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500 leading-5 w-[98%]">{description}</p>
          </div>
          <div className="flex items-center gap-2 border-b-2 border-gray-200 pb-5">
            <p className="text-gray-400 font-semibold text-lg line-through">
              ${price + price * 0.2}
            </p>
            <p className="text-xl font-bold">${price}</p>
          </div>
          <Add product={productDetails} />
          <div>
            <h3 className="mb-3 font-semibold">Title</h3>
            <p className="text-gray-500 leading-5 w-[98%]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
              cum magnam error officiis amet, hic dolores impedit doloremque
              ratione autem.magnam error officiis amet, hic dolores impedit
              doloremque ratione autem.
            </p>
          </div>
        </div>
      ) : (
        <SkeltonText />
      )}
    </div>
  );
}

export default ProductDetails;
