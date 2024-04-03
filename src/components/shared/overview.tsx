import React from "react";

const Overview = ({ desc }: { desc: string }) => {
  return (
    <div className=" w-full text-white p-8 bg-[#1A1A1A] rounded-md">
      <span className=" text-[#999999] text-lg">Description</span>
      <p className=" mt-3">{desc}</p>
    </div>
  );
};

export default Overview;
