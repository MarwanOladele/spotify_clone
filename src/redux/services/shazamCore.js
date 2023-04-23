import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDefaultMiddleware, MiddlewareArray } from "@reduxjs/toolkit";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "c29d06e458msh8f5289956bfc6cbp181a7ajsn5bdbe241721e"
      );

      return headers;
    },
  }),
  endpoints: (buider) => ({
    getTopCharts: buider.query({ query: () => "charts/world" }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
