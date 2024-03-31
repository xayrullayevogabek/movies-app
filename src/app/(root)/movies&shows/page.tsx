"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from "@/components/shared/banner-carousel";
import { getTrendingMovies, getPopularMoviesAndShows } from "@/lib/api";
import { MovieType } from "@/types";
import Subscription from "@/components/shared/subscription";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const [trendingMovies, popularMovies] = await Promise.all([
        getTrendingMovies(),
        getPopularMoviesAndShows("movie"),
      ]);
      setTrendingMovies(trendingMovies);
      setPopularMovies(popularMovies);
    };
    getData();
  }, []);

  console.log("popular", popularMovies);

  return (
    <div className=" container">
      <div>
        <BannerCarousel data={trendingMovies} />
        <Subscription />
      </div>
    </div>
  );
};

export default Movies;
