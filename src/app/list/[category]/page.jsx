"use client";
import { getCategoryProduct } from "../../../../lib";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import FilterProducts from "../../components/FilterProducts";
import { allProducts } from "../../data/data";
import { useSearchParams } from "next/navigation";

function Category() {
  const searchParams = useSearchParams();
  const cat = searchParams?.get("cat");
  console.log(cat); //Accessoires

  let selectedCategoryProducts = allProducts.filter(
    (pro) => pro.category === cat
  );
  if (cat === "all-products") {
    selectedCategoryProducts = allProducts;
    console.log("amr kamal");
  }
  const productData = selectedCategoryProducts;

  const productTitle = cat;

  return (
    <div>
      <div className="w-4/5 m-auto relative pt-28">
        <Banner />
        {/* filter */}
        <FilterProducts />
      </div>
      <ProductList productTitle={productTitle} productData={productData} />
    </div>
  );
}

export default Category;
