import React from "react";
import Slider from "./Slider";
import Latest from "./Latest";

export default async function Hero({ data }: any) {
  return (
    <div className="w-full grid gird-cols-1 md:grid-cols-3 gap-3 p-4">
      <div className=" md:col-span-2 ">
        <Slider data={data.slider} />
      </div>
      <div className="border">
        <Latest />
      </div>
    </div>
  );
}
