export async function getFeaturedProduct() {
  const api =
    "http://localhost:1337/api/categories/5?fields=name&populate[products][populate]=image";
  const res = await fetch(api);
  const data = await res.json();
  return data.data;
}

// {
//   next: { revalidate: 5 },
// }

export async function getCategories() {
  const api = "http://localhost:1337/api/categories?fields=name&populate=image";
  const res = await fetch(api);
  const data = await res.json();
  return data.data;
}

export async function getAllProducts() {
  const api =
    "http://localhost:1337/api/categories/1?fields=name&populate[products][populate]=image";
  const res = await fetch(api);
  const data = await res.json();
  return data.data.attributes.products.data;
}
export async function getNewsProduct() {
  const api =
    "http://localhost:1337/api/categories/6?fields=name&populate[products][populate]=image";
  const res = await fetch(api);
  const data = await res.json();
  return data.data;
}

export async function getCategoryProduct(id) {
  const api = `http://localhost:1337/api/categories/${id}?fields=name&populate[products][populate]=image`;
  const res = await fetch(api);
  const data = await res.json();
  return data.data;
}

export async function getDeals() {
  const api = "http://localhost:1337/api/deals?populate=image";
  const res = await fetch(api);
  const data = await res.json();
  return data.data;
}
