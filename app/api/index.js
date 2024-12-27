import axios from "axios";
const token = Cookies.get("user-token");
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

//login
export const login = async (payload) => {
  const { data } = await api.post(`/auth/login`, payload);
  return data;
};

//google login (not working rn)
export const googleSignupUser = async (id_token) => {
  return await api.post("/auth/google", { id_token });
};

//Register
export const signup = async (payload) => {
  const { data } = await api.post(`/auth/register`, payload);
  return data;
};

//Products
export const getProducts = async (query = "") => {
  const { data } = await api.get(`/products${query}`);
  return data;
};

export const getProductBySlug = async (slug) => {
  const { data } = await api.get(`/products/${slug}`);
  return data;
};

//BestSeller Products
export const getBestSellerProducts = async (query = "") => {
  const { data } = await api.get(`/home/products/best-selling`);
  return data;
};

//Categories
export const getAllCategories = async () => {
  const { data } = await api.get(`/all-categories`);
  return data;
};

// all products from a category
export const getCategoryProducts = async (query = "") => {
  const { data } = await api.get(`/products?category=${query}`);
  return data;
};

//produts from status
export const getStatusProducts = async (query = "") => {
  const { data } = await api.get(`/products?status=${query}`);
  return data;
};

//Users

export const getProfile = async () => {
  const { data } = await api.get(`/users/profile`);
  return data;
};

export const updateProfile = async ({ ...payload }) => {
  const { data } = await api.put(`/users/profile`, payload);
  return data;
};

export const getProfileById = async (userId) => {
  const { data } = await api.get(`/users/${userId}`);
  return data;
};

//cart
export const getCart = async (ids) => {
  const { data } = await apiClient.post(`/cart`, {
    products: ids,
  });
  return data;
};

//wishlist
export const getWishlist = async () => {
  const { data } = await api.get(`/wishlist`);
  return data;
};

export const createWishlist = async (pid) => {
  const { data } = await api.post(`/wishlist`, { pid });
  return data;
};

//Search
export const search = async (query) => {
  const { data } = await api.post(`/search`, { query });
  return data;
};

//Reviews
export const getProductReviews = async (pid) => {
  const { data } = await api.get(`/reviews/${pid}`);
  return data;
};

export const addReview = async (payload) => {
  const { data } = await api.post(`/reviews`, payload);
  return data;
};

//Fetching Countries
export const getCountries = async () => {
  const { data } = await axios.get("https://restcountries.com/v3.1/all");
  return data;
};

//Orders
export const placeOrder = async (payload) => {
  const { data } = await api.post(`/orders`, payload);
  return data;
};

//Not working on rn

export const getCategorySlugs = async () => {
  const { data } = await api.get("/api/categories/slugs");
  return data;
};

export const getCategoriesBySlug = async (query) => {
  const { data } = await api.get(`/category/${query}`);
  return data;
};

export const getFiltersByCategory = async (category) => {
  const { data } = await api.get(`filters/${category}`);
  return data;
};

export default api;
