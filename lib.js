export async function getFeaturedProduct() {
  const api = "https://api.escuelajs.co/api/v1/products";
  const res = await fetch(api, {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  const first4Objects = data.slice(20, 24);
  return first4Objects;
}

// {
//   next: { revalidate: 5 },
// }

export async function getCategories() {
  const api = "https://api.escuelajs.co/api/v1/categories";
  const res = await fetch(api);
  const data = await res.json();
  const first8Objects = data.slice(1, 5);
  return first8Objects;
}

export async function getAllProducts() {
  const api = "https://api.escuelajs.co/api/v1/products";
  const res = await fetch(api, {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  const first20Objects = data.slice(12, 48);
  return first20Objects;
}
export async function getNewsProduct() {
  const api = "https://api.escuelajs.co/api/v1/products";
  const res = await fetch(api);
  const data = await res.json();
  const first4Objects = data.slice(33, 37);
  return first4Objects;
}

export async function getCategoryProduct(id) {
  const api = `https://strapi-ecommerce-bw8e.onrender.com/api/categories/${id}?fields=name&populate[products][populate]=image`;
  const res = await fetch(api, {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.data;
}

// const api = https://strapi-ecommerce-bw8e.onrender.com/api/products?populate=image;

export async function getDeals() {
  // "https://strapi-ecommerce-bw8e.onrender.com/api/deals?populate=image";
  const api = "https://api.escuelajs.co/api/v1/products";

  const res = await fetch(api, {
    next: { revalidate: 5 },
  });
  const data = await res.json();
  return data.data;
}

// import axios from "axios";

// Set the API base URL and token
// const apiUrl = process.env.NEXT_PUBLIC_API_URL;
// const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

// Create an axios instance with the default configuration
// const axiosInstance = axios.create({
//   baseURL: apiUrl,
//   headers: {
//     Authorization: `Bearer ${apiToken}`,
//     "Content-Type": "application/json",
//   },
// });

// export async function getFeaturedProduct() {
//   const endpoint =
//     "/categories/5?fields=name&populate[products][populate]=image";
//   const res = await axiosInstance.get(endpoint);
//   return res.data.data;
// }

// export async function getCategories() {
//   const endpoint = "/categories?fields=name&populate=image";
//   const res = await axiosInstance.get(endpoint);
//   return res.data.data;
// }

// export async function getAllProducts() {
//   const endpoint =
//     "/categories/1?fields=name&populate[products][populate]=image";
//   const res = await axiosInstance.get(endpoint);
//   return res.data.data.attributes.products.data;
// }

// export async function getNewsProduct() {
//   const endpoint =
//     "/categories/6?fields=name&populate[products][populate]=image";
//   const res = await axiosInstance.get(endpoint);
//   return res.data.data;
// }

// export async function getCategoryProduct(id) {
//   const endpoint = `/categories/${id}?fields=name&populate[products][populate]=image`;
//   const res = await axiosInstance.get(endpoint);
//   return res.data.data;
// }

// export async function getDeals() {
//   const endpoint = "/deals?populate=image";
//   const res = await axiosInstance.get(endpoint);
//   return res.data.data;
// }
