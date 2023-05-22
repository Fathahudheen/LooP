import React from "react";
import image from "./assets/image/step-to-become-a-full-stack-developer.png";
const Learn = () => {
  return (
    <div className="w-[95%] p-2 mx-auto my-5 md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] ">
        <img src={image} alt="" />
      </div>
      <div className="col-span-1 flex flex-col justify-center">
        <h1 className="text-[#1b9e98] font-bold my-2">LEARN FROM EXPERTS</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          possimus quidem dolor, distinctio nam aliquam quasi. Laudantium
          reiciendis quae optio perferendis autem, sed, corrupti saepe quidem
          est, ad non inventore.{" "}
        </p>
        <button className="w-max md:w-[30%] bg-black text-white p-2 rounded-lg mt-5">
          Get Started
        </button>
      </div>

      <div></div>
    </div>
  );
};

export default Learn;
