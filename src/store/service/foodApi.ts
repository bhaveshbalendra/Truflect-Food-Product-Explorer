import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Category, Product } from "../../types/product";

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
  }),
});

export const { useGetAllCategoriesQuery } = foodApi;
