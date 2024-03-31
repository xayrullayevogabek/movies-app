"use client";
import Banner from "@/components/shared/banner";
import Carousel from "../../../components/shared/carousel";
import { fetchGenres, getMoviesByGenres } from "@/lib/api";
import { useEffect, useState } from "react";
import { AllMoviesByGenre, GenresTypes } from "@/types";
import Streaming from "@/components/shared/streaming";
import Faq from "@/components/shared/subscription";

export default function Home() {
  const [genres, setGenres] = useState<GenresTypes[]>([]);
  const [allMoviesByGenre, setAllMoviesByGenre] = useState<AllMoviesByGenre[]>(
    []
  );

  useEffect(() => {
    const getMoviesGenres = async () => {
      try {
        const genres = await fetchGenres();
        setGenres(genres);
      } catch (error) {
        console.error(error);
      }
    };
    getMoviesGenres();
  }, []);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const promisesAllMovie = genres.map(async (item) => {
          const moviesByGenres = await getMoviesByGenres("movie", item.id);
          return { data: moviesByGenres, genre: item };
        });
        const allMovies = await Promise.all(promisesAllMovie);
        setAllMoviesByGenre(allMovies);
      } catch (error) {
        console.log(error);
      }
    };
    if (genres?.length > 0) {
      getMovies();
    }
  }, [genres]);

  return (
    <>
      <Banner />
      <div className="container">
        <Carousel
          data={allMoviesByGenre}
          type="genre"
          title="Explore our wide variety of categories"
          desc="Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new"
        />
        <Streaming />
        <Faq />
      </div>
    </>
  );
}
