import React from "react";
import Image from "next/image";
import CardImage from "@/assets/images/Image.png";
import { GenresTypes, MovieType } from "@/types";

interface Props {
  data: MovieType[];
  genre: GenresTypes;
}

const CardCategory = ({ data, genre }: Props) => {
  return (
    <div className="bg-[#1a1a1a] rounded-xl p-6 box-border">
      <div className=" relative w-full h-full  grid grid-cols-2 gap-1">
        {data.slice(0, 4).map((item) => (
          <div className="relative w-[100%] h-24">
            <Image
              src={
                process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL + item.poster_path
              }
              className=" rounded-md object-cover"
              alt="cart-image"
              fill
            />
          </div>
        ))}
        <div className=" absolute w-full h-full bg-gradient-to-t from-[#1a1a1a] to-transparent" />
      </div>
      <div className="flex items-center justify-between cursor-pointer mt-3">
        <span>{genre.name}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardCategory;
