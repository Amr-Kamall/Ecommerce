import React, { Suspense } from "react";
import ProductList from "../components/ProductList";
import { getAllProducts } from "../../../lib";
import Banner from "../components/Banner";
import Loading from "../loading";
// import FilterProducts from "../components/FilterProducts";

async function ShopPage() {
  const products = await getAllProducts();

  return (
    <div>
      <div className="w-4/5 m-auto relative pt-24">
        <Banner />
        {/* <FilterProducts /> */}
      </div>
      <ProductList productTitle="All Products" productData={products} />
    </div>
  );
}

export default ShopPage;
