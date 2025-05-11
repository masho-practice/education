import { IoMdSchool } from "react-icons/io";
import { MdOutlineOnlinePrediction } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
const Features = () => {
  return (
    <div className="py-16">
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto">
        <div className="w-full mx-auto flex flex-col text-center mb-14">
          <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl pb-2 text-purple-900">
            Awesome Feature
          </h1>
          <p>Lorem ipsum dolor sit amet consect dolor sit amet</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="  w-64 bg-purple-50 px-5 py-6 cursor-pointer mx-auto">
            <IoMdSchool size={30} />
            <h1 className="my-2 font-bold  ">Scholarship Facility</h1>
            <p className="text-sm text-wrap text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam.
            </p>
          </div>
          <div className="  w-64 bg-purple-50 px-5 py-6 cursor-pointer mx-auto">
            <MdOutlineOnlinePrediction size={30}/>
            <h1 className="my-2 font-bold  ">Online Classes</h1>
            <p className="text-sm text-wrap text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam.
            </p>
          </div>
          <div className="  w-64 bg-purple-50 px-5 py-6 cursor-pointer mx-auto">
          
          <AiOutlineGlobal  size={30}/>
            <h1 className="my-2 font-bold  ">Global certifications</h1>
            <p className="text-sm text-wrap text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
