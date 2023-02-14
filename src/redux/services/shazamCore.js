import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDefaultMiddleware, MiddlewareArray } from "@reduxjs/toolkit";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "20a9cde4eemsh7c87a3681e6fc09p183998jsnf18e65f4c190"
      );

      return headers;
    },
  }),
  endpoints: (buider) => ({
    getTopCharts: buider.query({ query: () => "charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
