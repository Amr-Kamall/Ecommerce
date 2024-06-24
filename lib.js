import axios from "axios";

// Set the API base URL and token
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const apiToken = process.env.NEXT_PUBLIC_API_TOKEN;

// Create an axios instance with the default configuration
const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${apiToken}`,
    "Content-Type": "application/json",
  },
});

export async function getFeaturedProduct() {
  const endpoint =
    "/categories/5?fields=name&populate[products][populate]=image";
  const res = await axiosInstance.get(endpoint);
  return res.data.data;
}

export async function getCategories() {
  const endpoint = "/categories?fields=name&populate=image";
  const res = await axiosInstance.get(endpoint);
  return res.data.data;
}

export async function getAllProducts() {
  const endpoint =
    "/categories/1?fields=name&populate[products][populate]=image";
  const res = await axiosInstance.get(endpoint);
  return res.data.data.attributes.products.data;
}

export async function getNewsProduct() {
  const endpoint =
    "/categories/6?fields=name&populate[products][populate]=image";
  const res = await axiosInstance.get(endpoint);
  return res.data.data;
}

export async function getCategoryProduct(id) {
  const endpoint = `/categories/${id}?fields=name&populate[products][populate]=image`;
  const res = await axiosInstance.get(endpoint);
  return res.data.data;
}

export async function getDeals() {
  const endpoint = "/deals?populate=image";
  const res = await axiosInstance.get(endpoint);
  return res.data.data;
}
