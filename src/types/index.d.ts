import { title } from "process";

export interface GenresTypes {
  id: number;
  name: string;
}

export interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
}
export interface AllMoviesByGenre {
  data: MovieType[];
  genre: GenresTypes;
}

export interface CommonDataType {
  title: string;
  genre: string;
  data: AllMoviesByGenre | MovieType[];
}

export interface MovieDetailType {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: any;
  budget: number;
  genres: { id: number; name: string }[];
  homepage: string | null;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: { id: number; name: string }[];
  production_countries: { iso_3166_1: string; name: string }[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: { iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ShowsType {
  adult: boolean;
  backdrop_path: string | null;
  created_by: any[];
  episode_run_time: number[];
  first_air_date: string | null;
  genres: any[];
  homepage: string | null;
  id: number;
  in_production: boolean;
  languages: any[];
  last_air_date: string | null;
  last_episode_to_air: any;
  name: string;
  next_episode_to_air: any;
  networks: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: any[];
  production_countries: any[];
  media_type: string;
  seasons: {
    air_date: string | null;
    episode_count: number;
    id: number;
    name: string;
    overview: string | null;
    poster_path: string | null;
    season_number: number;
    vote_average: number;
  }[];
  spoken_languages: any[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}
