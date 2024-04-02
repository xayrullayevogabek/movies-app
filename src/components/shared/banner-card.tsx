"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { MovieDetailType, MovieType, ShowsType } from "@/types";
// import Movies from "@/app/(root)/movies&shows/page";

interface Props {
  img: string;
  title?: string;
  overview: string;
}

const BannerCard = ({ img, title, overview }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <div className={` absolute w-full h-full `}>
        <Image
          src={process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_URL + img}
          onLoadingComplete={() => setIsLoading(false)}
          fill
          className={` object-cover object-top rounded-lg ${
            isLoading
              ? " scale-105 blur-xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }`}
          alt="banner-image"
        />
        <div className=" absolute flex flex-col items-center justify-center w-full bottom-24 z-20">
          <h1 className=" text-center text-3xl font-bold">{title}</h1>
          <p className=" text-center text-[#999] text-md mt-2 w-2/3 line-clamp-2">
            {overview}
          </p>
          <div className=" flex items-center gap-2 mt-10">
            <button className="flex items-center bg-[#e50000] hover:bg-[#FF1919] py-3 px-5 rounded-md gap-1">
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
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
              Play now
            </button>
            <button className="p-3 rounded-md bg-[#0f0f0f] hover:bg-[#262625] border border-[#262626]">
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
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
            <button className="p-3 rounded-md bg-[#0f0f0f] hover:bg-[#262625] border border-[#262626]">
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
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
            </button>
            <button className="p-3 rounded-md bg-[#0f0f0f] hover:bg-[#262625] border border-[#262626]">
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
                  d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#141414] to-transparent h-full z-10" />
    </>
  );
};

export default BannerCard;
