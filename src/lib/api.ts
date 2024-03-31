const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_TMDB_BASE_URL;
import axios from "axios";

export const getGenres = async (type = "movie") => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/genre/${type}/list?api_key=${API_KEY}&language=en`
    );
    return data && data.genres;
  } catch (error) {
    console.log(error);
  }
};

export const getMoviesByGenres = async (type: string, id: number) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/discover/${type}?api_key=${API_KEY}&language=en-US&include_adult=false&sort_by=popularity.desc&with_genres=${id}`
    );
    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/all/day?api_key=${API_KEY}&language=en-US`
    );

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getPopularMoviesAndShows = async (type: string) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/${type}/popular?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data && data.results;
  } catch (error) {
    console.log(error);
  }
};
