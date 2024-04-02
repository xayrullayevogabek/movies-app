"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import { MovieType } from "@/types";
import Image from "next/image";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import BannerCard from "./banner-card";

interface Props {
  data: MovieType[];
}

const BannerCarousel = ({ data }: Props) => {
  const swiperRef = useRef<any>();
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="mySwiper h-[85vh] rounded-md mt-32 relative"
      >
        {data.map((item, indx) => (
          <SwiperSlide className=" w-full h-full" key={indx}>
            <BannerCard
              img={item.backdrop_path}
              title={
                item.original_title ? item.original_title : item.original_name
              }
              overview={item.overview}
            />
          </SwiperSlide>
        ))}
        <div className=" absolute px-5 bottom-10 left-0 z-10 flex items-center justify-between w-full">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="p-3 text-xl rounded-md bg-[#0f0f0f] hover:bg-[#262625] border border-[#262626]"
          >
            <GrFormPreviousLink />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="p-3 rounded-md text-xl bg-[#0f0f0f] hover:bg-[#262625] border border-[#262626]"
          >
            <GrFormNextLink />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
