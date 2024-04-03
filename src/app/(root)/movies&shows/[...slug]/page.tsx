"use client";
import React, { useEffect, useState } from "react";
import BannerCard from "@/components/shared/banner-card";
import { getMoviesAndShowsDetails } from "@/lib/api";
import { MovieDetailType, ShowsType } from "@/types";
import Loader from "@/components/shared/loader";
import { redirect } from "next/navigation";
import Overview from "@/components/shared/overview";
import Casts from "@/components/shared/casts";

const Page = ({ params }: { params: { slug: string[] } }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<MovieDetailType | ShowsType>();
  const [type, id] = params.slug;
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getMoviesAndShowsDetails(type, id);
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (isLoading) {
    return (
      <div className="relative py-10 h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="container">
      <div className=" h-[85vh] mt-32 relative ">
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
      <div className=" mt-10">
        <Overview desc={data?.overview as string} />
        <Casts id={Number(id)} type={type} />
      </div>
    </div>
  );
};

export default Page;
