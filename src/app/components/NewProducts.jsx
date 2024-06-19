import { getNewsProduct } from "../../../lib";
import ProductList from "./ProductList";

async function NewList() {
  const data = await getNewsProduct();
  // console.log(data.attributes.products);
  const NewsData = data.attributes.products.data;
  return <ProductList productTitle="New Products" productData={NewsData} />;
}

export default NewList;
