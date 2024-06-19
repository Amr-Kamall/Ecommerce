import { getCategoryProduct } from "../../../../lib";
import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import FilterProducts from "../../components/FilterProducts";

async function Category({ params }) {
  const selectedId = params?.category;
  if (!selectedId) return;
  const categoryProduct = await getCategoryProduct(selectedId);
  //   console.log(categoryProduct.attributes.products.data);
  const productData = categoryProduct.attributes.products.data;
  const productTitle = categoryProduct.attributes.name;
  return (
    <div>
      <div className="w-4/5 m-auto relative pt-28">
        <Banner />
        {/* filter */}
        {/* <FilterProducts /> */}
      </div>
      <ProductList productTitle={productTitle} productData={productData} />
    </div>
  );
}

export default Category;
