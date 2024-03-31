import React from "react";
import Image from "next/image";
import BannerImage from "../../../public/images/banner-image.png";
import BannerLogo from "../../../public/images/banner-Logo.png";

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center relative bg-black">
      <div className="w-full h-screen">
        <Image
          src={BannerImage}
          fill
          className="object-cover"
          alt="banner-image"
        />
      </div>
      <div className=" absolute w-full h-screen top-0 bg-gradient-to-b from-[#141414] to-transparent"></div>
      <div className=" absolute w-full h-screen bottom-0 bg-gradient-to-t from-[#141414] to-transparent"></div>
      <div className=" w-96 h-96 absolute">
        <Image fill src={BannerLogo} alt="banner-logo" />
      </div>
      <div className="z-0 w-full flex flex-col items-center text-center">
        <h1 className="font-bold text-4xl">The Best Streaming Exprience</h1>
        <p className="w-2/3 text-[#999] mt-4">
          KH Movie is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With KH Movie, you can
          enjoy a wide variety of content, including the latest blockbusters,
          classic movies, popular TV shows, and more. You can also create your
          own watchlists, so you can easily find the content you want to watch.
        </p>
        <button className="flex item-center bg-[#E50000] transition duration-300 hover:bg-[#FF1919] py-4 px-5 mt-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
              clipRule="evenodd"
            />
          </svg>
          Start Watching Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
