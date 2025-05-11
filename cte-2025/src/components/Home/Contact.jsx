import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";


const Contact = () => {
  return (
    <div className="bg-slate-700 text-white ">
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto ">
        <h1 className="text-2xl text-center font-bold sm:text-3xl py-16  md:text-4xl">
          Contact Us
        </h1>
        <div className="grid gap-10 md:grid-cols-2 mx-auto justify-center items-center">
          <div className="">
            <Link to={"/"}>
              <div className="flex items-center gap-1 text-pink-400  mb-14">
                <AiOutlineGlobal size={60} />
                <h1 className="font-bold text-3xl">Masho-2025</h1>
              </div>
            </Link>
            <h1 className="text-2xl md:text-4xl font-bold text-gray-300 my-4">Our Headquarters</h1>
            <p className="text-gray-400 my-2">Ethiopia, Mekelle</p>
            <p className="text-gray-400 my-2">Ayder</p>
            <p className="text-gray-400 my-2">German Street</p>
          </div>
          <div className="mb-10">
            <h1 className="text-2xl md:text-4xl font-bold text-gray-300 my-4 md:mt-36">Get in Touch</h1>
            <div className="flex gap-4 my-2 text-gray-400 cursor-pointer">
               <IoCall size={30} className="hover:pl-3 duration-300 text-pink-400 text-lg"/>
               <p className="hover:pl-3 duration-300">+251 (948) 165-959</p> 
            </div>
            <div className="flex gap-4 my-4 text-gray-400 cursor-pointer">
                 <MdEmail size={30} className= "hover:pl-3 duration-300 text-pink-400 text-lg"/>
                 <p className="hover:pl-3 duration-300">masho@info.gov.et</p>
            </div>
           <div className="flex gap-4 my-2 text-gray-400 text-lg cursor-pointer">
            <FaTelegramPlane size={30} className="text-pink-400 hover:pl-3 duration-300" />
            <p className="hover:pl-3 duration-300">@mashotech</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
