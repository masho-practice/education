import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const ExpertCard = ({expert}) => {
  return (
    <div className="my-4  flex flex-col items-center py-5 bg-orange-100/40 w-64 hover:scale-105 duration-300">
      <img src={expert.image} alt={expert.name} className="h-36 w-full object-contain object-center"/>
      <h1 className="text-xl font-bold">{expert.name}</h1>
      <h1 className="text-gray-600 py-3">{expert.profession}</h1>
      <div className="flex gap-1">
        <FaFacebookF size={30} className="border border-black rounded-sm transition-all duration-300  hover:bg-black hover:text-white px-2   text-sm "/>
        <TiSocialAtCircular size={30} className="border border-black rounded-sm transition-all duration-300 hover:bg-black hover:text-white px-1"  />
        <TiSocialLinkedin size={30} className="border border-black rounded-sm transition-all duration-300 hover:bg-black hover:text-white px-1"  />
      </div>
    </div>
  );
};

export default ExpertCard;
