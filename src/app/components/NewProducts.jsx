"use client";
import { allProducts } from "../data/data";
import ProductList from "./ProductList";

function NewList() {
  const news = allProducts.filter((pro) => pro.category === "News");
  const NewsData = news;
  return (
    <>
      <h1>amr kamal</h1>
      <ProductList productTitle="New Products" productData={NewsData} />;
    </>
  );
}

export default NewList;
