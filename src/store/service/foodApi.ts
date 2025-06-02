import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  Category,
  CategoryResponse,
  OpenFoodFactsProduct,
  Product,
  SearchResponse,
} from "../../types/product";

export const foodApi = createApi({
  reducerPath: "foodApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://world.openfoodfacts.org",
  }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<Category[], void>({
      query: () => "/categories.json",
      transformResponse: (response: { tags: Category[] }) => response.tags,
    }),
    searchProducts: builder.query<Product[], string>({
      query: (searchTerm) =>
        `/cgi/search.pl?search_terms=${encodeURIComponent(
          searchTerm
        )}&search_simple=1&action=process&json=1&page_size=20`,
      transformResponse: (response: SearchResponse) =>
        response.products?.map((product: OpenFoodFactsProduct) => ({
          id: product.id || product.code || "",
          name:
            product.product_name ||
            product.product_name_en ||
            "Unknown Product",
          brands: product.brands,
          categories: product.categories,
          image_url: product.image_front_url || product.image_url,
          nutrition_grades: product.nutrition_grades,
          ecoscore_grade: product.ecoscore_grade,
          ingredients_text: product.ingredients_text,
        })) || [],
    }),
    getProductsByCategory: builder.query<Product[], string>({
      query: (category) => `/category/${encodeURIComponent(category)}.json`,
      transformResponse: (response: CategoryResponse) =>
        response.products?.map((product: OpenFoodFactsProduct) => ({
          id: product.id || product.code || "",
          name:
            product.product_name ||
            product.product_name_en ||
            "Unknown Product",
          brands: product.brands,
          categories: product.categories,
          image_url: product.image_front_url || product.image_url,
          nutrition_grades: product.nutrition_grades,
          ecoscore_grade: product.ecoscore_grade,
          ingredients_text: product.ingredients_text,
        })) || [],
    }),
  }),
});

export const {
  useGetAllCategoriesQuery,
  useSearchProductsQuery,
  useGetProductsByCategoryQuery,
} = foodApi;
