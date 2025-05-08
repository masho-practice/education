import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-heroImg bg-cover bg-center w-full h-screen z-20">
      <div className="bg-gray-900/40 w-full h-screen">
         <div className="flex z-30 text-center items-center justify-center  top-56  max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto">
        <div className="text-white mt-96">
          <h1 className="text-3xl font-bold md:text-4xl  lg:text-5xl my-5">
            Enhance Your Future With Masho Tech
          </h1>
          <p className="text-white text-center ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum est
            veritatis ipsa dolores at ipsam plaveritatis ipsa dolores at
            veritatis ipsa dolores at ceat aspernatur aliquam molestias
            molestiae!
          </p>
          <div className="my-6">
            <Link to="/about">
              <button className="text-white bg-blue-900 hover:bg-blue-950 rounded-md px-5 py-2 mr-4">
                Learn More
              </button>
            </Link>
            <Link to="/courses">
              <button
                className="bg-yellow-500  hover:bg-yellow-600
                     rounded-md px-5 py-2 text-white"
              >
                Visit Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Hero;
