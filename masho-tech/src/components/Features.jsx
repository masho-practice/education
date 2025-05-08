import React from "react";
import { FaDigitalTachograph } from "react-icons/fa";
const Features = () => {
  return (
    <div className="text-black w-full">
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto py-8 text-white">
        <h1>MOST intersting COURSES</h1>
        <div className="grid gap-16 grid-cols-2 ">
          <div className=" w-[300px] text-center h-48 mt-6 ">
            <FaDigitalTachograph
              size={50}
              className="my-5 mx-auto"
            />
            <h1 className="text-2xl">Digital-Marketing</h1>
            <p className="">10 Courses</p>
          </div>
          <div className=" w-[300px] text-center h-48 mt-6 ">
            <FaDigitalTachograph
              size={50}
              className="my-5 mx-auto"
            />
            <h1 className="text-2xl">Digital-Marketing</h1>
            <p className="">10 Courses</p>
          </div>
          <div className=" w-[300px] text-center h-48 mt-6 ">
            <FaDigitalTachograph
              size={50}
              className="my-5 mx-auto"
            />
            <h1 className="text-2xl">Digital-Marketing</h1>
            <p className="">10 Courses</p>
          </div>
          <div className=" w-[300px] text-center h-48 mt-6 ">
            <FaDigitalTachograph
              size={50}
              className="my-5 mx-auto"
            />
            <h1 className="text-2xl">Digital-Marketing</h1>
            <p className="">10 Courses</p>
          </div>
          <div className=" text-center h-48 mt-6 ">
            <FaDigitalTachograph
              size={50}
              className="my-5 mx-auto"
            />
            <h1 className="text-2xl">Digital-Marketing</h1>
            <p className="">10 Courses</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
