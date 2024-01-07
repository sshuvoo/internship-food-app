import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.api.technicaltest.quadtheoryltd.com/api",
  }),
  endpoints: ({ query }) => ({
    getFoodItems: query({
      query: () => ({
        url: `/Item?page=1&pageSize=10`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFoodItemsQuery } = api;
export default api;
