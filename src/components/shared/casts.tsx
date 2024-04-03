import { getCasts } from "@/lib/api";
import React, { useEffect } from "react";

interface Props {
  id: number;
  type: string;
}

const Casts = ({ id, type }: Props) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCasts(id, type);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return <div></div>;
};

export default Casts;
