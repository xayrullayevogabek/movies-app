"use client";
import React, { useEffect, useState } from "react";
import BannerCard from "@/components/shared/banner-card";
import { getMoviesAndShowsDetails } from "@/lib/api";
import { MovieDetailType, ShowsType } from "@/types";

const renderTitle = (data: MovieDetailType | ShowsType): string => {
  if ("original_title" in data) {
    return data.original_title ?? "Unknown Title";
  } else if ("name" in data) {
    return data.name ?? "Unknown Title";
  }
  return "Unknown Title";
};

const Page = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<MovieDetailType | ShowsType>();
  const { id } = params;
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMoviesAndShowsDetails("movie", id);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(data);
  return (
    <div className=" h-[85vh] mt-32 relative container">
      <BannerCard
        img={data?.backdrop_path as string}
        title={
          (data as ShowsType)?.original_name
            ? (data as ShowsType)?.original_name
            : (data as MovieDetailType)?.original_title
        }
        overview={data?.overview as string}
      />
    </div>
  );
};

export default Page;
