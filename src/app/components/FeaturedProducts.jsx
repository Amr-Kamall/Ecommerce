"use client";
import { allProducts } from "../data/data";
import ProductList from "./ProductList";

function FeaturedProduct() {
  const features = allProducts.filter(
    (pro) =>
      pro.name === "White T-Shirt" ||
      pro.name === "Lamp" ||
      pro.name === "Chair" ||
      pro.name === "iPhone"
  );
  console.log(features);
  const featuredData = features;
  return (
    <ProductList productTitle="Featured Products" productData={featuredData} />
  );
}

export default FeaturedProduct;
