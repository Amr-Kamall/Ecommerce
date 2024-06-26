import { getFeaturedProduct } from "../../../lib";
import ProductList from "./ProductList";

async function FeaturedProduct() {
  const data = await getFeaturedProduct();
  const featuredData = data.attributes.products.data;
  console.log(featuredData);
  console.log("amrorooooooooooooooooooooooo");

  return (
    <ProductList productTitle="Featured Products" productData={featuredData} />
  );
}

export default FeaturedProduct;
