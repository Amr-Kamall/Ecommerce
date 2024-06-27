"use client";
import { useEffect, useState } from "react";
import ImagesSwap from "../components/ImagesSwap";
import Add from "../components/Add";
import SkeltonText from "../components/SkeltonText";
import { useCart } from "../context/CartContext";
import { notFound } from "next/navigation";

function ProductDetails({ params }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const api = `http://localhost:1337/api/products/${params.selectedProductSlug}?populate=image`;

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is mounted

    async function fetchProduct() {
      try {
        const res = await fetch(api);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        if (isMounted) {
          setSelectedProduct(data.data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      isMounted = false; // Cleanup function to set the flag to false when the component unmounts
    };
  }, [api]);

  if (error) {
    return notFound();
  }

  if (params.selectedProductSlug === "favicon.ico") {
    return null;
  }

  const { name, description, price, image } = selectedProduct?.attributes || {};

  const productDetails = {
    id: selectedProduct?.id,
    name: selectedProduct?.attributes.name,
    price: selectedProduct?.attributes.price,
    quantity: 1,
    image: selectedProduct?.attributes.image.data[0].attributes.url,
    description: selectedProduct?.attributes.description[0].children[0].text,
  };

  return (
    <div className="pt-28 grid grid-cols-1 navScreen:grid-cols-2 w-4/5 mx-auto gap-7">
      <ImagesSwap loading={loading} swappedImages={image} />

      {!loading ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5 border-b-2 border-gray-200 pb-5">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <p className="text-gray-500 leading-5 w-[98%]">
              {description?.[0].children[0].text}
            </p>
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
