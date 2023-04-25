import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Loader, Error, SongCard } from "../components";
import { useGetSongByCountryQuery } from "../redux/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongByCountryQuery(country);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country?apiKey=${
          import.meta.env.VITE_GEOAPILFY_API_KEY
        }`
      );
      setCountry(response?.data?.location?.country);
      setLoading(false)
    };
    fetchApi();
  }, [country]);

  if (isFetching && loading) return <Loader title="Loading Songs Around You" />;

  if (error && country) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around You in <span>{country}</span>
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default AroundYou;
