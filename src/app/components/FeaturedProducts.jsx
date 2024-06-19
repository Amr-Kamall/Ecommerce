import { getFeaturedProduct } from "../../../lib";
import ProductList from "./ProductList";

async function FeaturedProduct() {
  const data = await getFeaturedProduct();
  const featuredData = data.attributes.products.data;
  // console.log(
  //   featuredData[0].attributes.image.data[0].attributes.formats.small.url
  // );
  return (
    <ProductList productTitle="Featured Products" productData={featuredData} />
  );
}

export default FeaturedProduct;
