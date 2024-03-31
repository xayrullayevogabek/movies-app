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
  name:string
  video: boolean;
  vote_average: number;
  vote_count: number;
}
export interface AllMoviesByGenre {
  data: MovieType[];
  genre: GenresTypes;
}

export interface CommonDataType {
  title: string;
  type: string;
  data: AllMoviesByGenre | MovieType[];
}
