import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getDefaultMiddleware, MiddlewareArray } from "@reduxjs/toolkit";


export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", 'c29d06e458msh8f5289956bfc6cbp181a7ajsn5bdbe241721e');

      return headers;
    },
  }),
  endpoints: (buider) => ({
    getTopCharts: buider.query({ query: () => "v1/charts/world" }),
    getSongDetails: buider.query({
      query: (songid) => `v1/tracks/details?track_id=${songid}`,
    }),
    getSongRelated: buider.query({
      query: (songid) => `v1/tracks/related?track_id=${songid}`,
    }),
    getArtistDetails: buider.query({
      query: (artistId) => `v2/artists/details?artist_id=${artistId}`,
    }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
  useGetArtistDetailsQuery,
} = shazamCoreApi;
