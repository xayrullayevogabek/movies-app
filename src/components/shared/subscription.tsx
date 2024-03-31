import React from "react";
import Image from "next/image";
import SubscriptionImage from "../../../public/images/subscription-img.png";

const Subscription = () => {
  return (
    <div className="mt-28 mb-20">
      <div className=" relative">
        <Image
          className=" rounded-md"
          src={SubscriptionImage}
          alt="subscription image"
        />
        <div className=" absolute top-0 left-0 w-full h-full flex items-center justify-between px-20">
          <div className="flex flex-col">
            <h1 className=" text-3xl">Start your free trial today!</h1>
            <p className=" text-md mt-5 text-[#999]">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of KH Movies.
            </p>
          </div>
          <button className="flex item-center bg-[#E50000] transition duration-300 hover:bg-[#FF1919] py-4 px-5 mt-3 rounded-sm">
            Start a free Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
