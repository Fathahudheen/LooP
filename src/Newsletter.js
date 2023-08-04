import React from "react";

const Newsletter = () => {
  return (
    <div className=" bg-[#2699fb] w-full p-4">
      <div className="w-[95%] mx-auto  md:grid grid-cols-2 my-12 ">
        <div className="col-span-1 w-[90%] md:ms-16 text-white  ">
          <h1 className="text-2xl md:text-4xl font-bold my-1">
            Want to learn latest I.T skills?
          </h1>
          <span className="text-[15px] md:text-xl">Sign in to our newsletter and stay up to date. </span>
        </div>
        <div className="col-span-1  md:ms-40  ">
          <input
            type="text"
            className="p-2 sm:mt-2 md:w-[210px] text-slate-600 rounded-l rounded-r-none outline-none "
            placeholder="Email"
          />
          <button className="md:w-[70px] p-2 rounded-l-none rounded-r bg-black text-white">
            Submit
          </button>

          <p className="text-white sm:mt-2">
            We care about the protection of your data.Read our
            <br />
            <a href="/" className="text-black">
              Privacy policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
