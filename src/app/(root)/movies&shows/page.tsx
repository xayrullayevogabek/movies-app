"use client";
import React, { useEffect, useState } from "react";
import BannerCarousel from "@/components/shared/banner-carousel";
import { getTrendingMoviesAndShows, getPopularMoviesAndShows } from "@/lib/api";
import { MovieType } from "@/types";
import Subscription from "@/components/shared/subscription";
import Common from "@/components/shared/common";

const Movies = () => {
  const [trendingMovies, setTrendingMovies] = useState<MovieType[]>([]);
  const [popularMovies, setPopularMovies] = useState<MovieType[]>([]);
  useEffect(() => {
    const getData = async () => {
      const [trendingMovies, popularMovies] = await Promise.all([
        getTrendingMoviesAndShows(),
        getPopularMoviesAndShows("movie"),
      ]);
      setTrendingMovies(trendingMovies);
      setPopularMovies(popularMovies);
    };
    getData();
  }, []);

  return (
    <div className=" container">
      <div>
        <BannerCarousel data={trendingMovies} />
        <Common/>
        <Common type="tv"/>
        <Subscription />
      </div>
    </div>
  );
};

export default Movies;
