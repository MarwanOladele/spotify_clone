import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDefaultMiddleware, MiddlewareArray } from "@reduxjs/toolkit";
import { apiKey } from "../../apiKey";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", apiKey);

      return headers;
    },
  }),
  endpoints: (buider) => ({
    getTopCharts: buider.query({ query: () => "/charts/world" }),
    getSongDetails: buider.query({
      query: (songid) => `/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: buider.query({
      query: (songid) => `/tracks/related?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
