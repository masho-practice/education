import React from "react";
import doc from "../assets/images/doc.jpeg";
import { MdOutlineAppRegistration } from "react-icons/md";
import { FaCircleInfo } from "react-icons/fa6";


const Register = () => {
  return (
    <div>
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto">
        <div className=" border shadow-md p-4 mt-24 mx-auto">
          <h1 className="text-purple-900 font-bold text-4xl">Register</h1>
          <div className="bg-gray-100 my-12 sm:flex justify-between">
            <div className="p-6 ">
              <div className="flex gap-3 items-center text-purple-600">
                <MdOutlineAppRegistration size={50} />
                <h1 className="text-2xl font-bold "> Registration Template</h1>
              </div>

              <p className="text-purple-950 text-md my-3">
                Please download the registration essay templet document,
                complete it, and upload it in the "Upload" section bellow.
              </p>
              <button className="bg-purple-600 text-white px-5 py-2 rounded-md hover:bg-purple-900 my-4">
                Download Essay Format
              </button>
            </div>
            <div className="overflow-hidden px-6 ">
              <img
                src={doc}
                alt=""
                className="h-64 object-contain object-center "
              />
            </div>
          </div>
          <div className="bg-gray-100 my-12 ">
            <div className="pt-4">
              <div className="p-4 flex gap-3 text-purple-600 ">
                <FaCircleInfo  size={30}/>
              <h1 className="text-2xl font-bold">Personal Information</h1>
              </div>
            
              <form className="">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-3 p-4 ">
                 <input type="text" placeholder="First Name" className="border border-gray-200 text-gray-500 px-4 py-2 rounded-sm bg-white outline-none" />
                <input type="text" placeholder="Father Name" className="border border-gray-200 text-gray-500 px-4 py-2 rounded-sm bg-white outline-none" />
                <input type="text" placeholder="Grand Father Name" className="border border-gray-200 text-gray-500 px-4 py-2 rounded-sm outline-none bg-white" />
                </div>               
              </form>
            </div>
          </div>
          <div className="bg-gray-100 my-12 ">
            <div className="pt-4">
              <div className="p-4 flex gap-3 text-purple-600 ">
                <FaCircleInfo  size={30}/>
              <h1 className="text-2xl font-bold">Location & Interests</h1>
              </div> 
              <select name="Select Region" >
              <option value="Select Region">Select Region</option>
              <option value="Amhara">Amhara</option>
              <option value="Somali"> Somali</option>
              <option value="Tigray">Tigray</option>
              <option value="Oromia">Oromia</option>
              <option value="Gambella">Gambella</option>            
              </select>       
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
