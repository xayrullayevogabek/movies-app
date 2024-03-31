import React from "react";
import StreamingData from "@/data/streaming/index.json";
import Image from "next/image";

const Streaming = () => {
  return (
    <div className=" mt-28">
      <div>
        <h1 className=" text-3xl">
          We Provide you streaming experience across various devices.
        </h1>
        <p className="text-[#999] text-sm mt-4">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of <br /> devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-10 gap-5">
        {StreamingData.map((item) => (
          <div className=" relative p-8 rounded-lg bg-[#0f0f0f] border border-[#1f1f1f]">
            <div className="flex items-center gap-5">
              <div className=" w-14 h-14 rounded-lg bg-[#141414] border border-[#1f1f1f] flex items-center justify-center">
                <Image
                  src={item.img}
                  alt="streaming-image"
                  width={22}
                  height={22}
                />
              </div>
              <h2 className=" text-base">{item.title}</h2>
            </div>
            <p className=" mt-5 text-[#999] text-sm">{item.description}</p>
            <div className=" absolute w-full h-full opacity-[0.03] bg-gradient-to-bl top-0 right-0 from-[#E50000] to-transparent" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Streaming;
