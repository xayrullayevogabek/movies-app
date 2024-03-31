"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import CardCategory from "./card-category";
import { AllMoviesByGenre } from "@/types";
interface Props {
  data: AllMoviesByGenre[];
  title?: string;
  desc?: string;
}

const Carousel = ({ data, title, desc }: Props) => {
  console.log(data);
  return (
    <div className="  mt-20">
      <div>
        <div>
          <h1 className=" text-3xl">Explore our wide variety of categories</h1>
          <p className="text-[#999] text-sm mt-2">
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[]}
        className="mySwiper mt-12 relative"
      >
        <div className=" h-full bg-gradient-to-l from-[#121212] to-transparent w-32 absolute top-0 right-0 z-10" />
        <div className=" h-full bg-gradient-to-r from-[#121212] to-transparent w-32 absolute top-0 left-0 z-10" />
        {data?.map((item) => (
          <SwiperSlide>
            <CardCategory data={item.data} genre={item.genre} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
