"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import { AllMoviesByGenre, MovieType } from "@/types";
import "swiper/css";
import "swiper/css/pagination";
import CardCategory from "./card-category";
import Card from "./card";

interface Props {
  data: any;
  title?: string;
  desc?: string;
  type?: string;
}

const Carousel = ({ data, title, desc, type }: Props) => {
  return (
    <div className=" mt-16">
      <div>
        <div>
          <h1 className=" text-3xl">{title}</h1>
          <p className="text-[#999] text-sm mt-2">{desc}</p>
        </div>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        mousewheel={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Mousewheel]}
        className="mySwiper mt-5 relative"
      >
        <div className=" h-full bg-gradient-to-l from-[#121212] to-transparent w-32 absolute top-0 right-0 z-10" />
        <div className=" h-full bg-gradient-to-r from-[#121212] to-transparent w-32 absolute top-0 left-0 z-10" />
        {type === "genre"
          ? data.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <CardCategory data={item.data} genre={item.genre} />
              </SwiperSlide>
            ))
          : data.map((item: any, index: number) => (
              <SwiperSlide key={index}>
                <Card movie={item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
