import React from "react";
import ExpertCard from "./ExpertCard";
import { experts } from "../../data/courseData";
const Experts = () => {
  return (
    <div>
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto my-16 ">
        <div className="text-center">
            <h1 className="text-2xl sm:text-3xl text-blue-900 font-bold">Community Experts</h1>
            <p className="py-2">Meet Our Experts from different Department</p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 mx-auto py-6">
          {experts.map((expert) => (
            <ExpertCard key={expert.id} expert={expert} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experts;
