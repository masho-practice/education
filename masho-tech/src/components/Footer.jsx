import React from "react";

const Footer = () => {
  return (
    <div className="bg-slate-800 mt-16">
      <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto ">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-16 ">
          <div className="sm:w-40 text-center" >
            <h1 className="text-white mb-4">Top Products</h1>
            <p className="text-gray-500 my-2">Manage Business</p>
            <p className="text-gray-500 my-2">Manage Business</p>
            <p className="text-gray-500 my-2">Manage Business</p>
            <p className="text-gray-500 my-2">Manage Business</p>
          </div>
          <div className="sm:w-40 text-center" >
            <h1 className="text-white mb-4">Quick Links</h1>
            <p className="text-gray-500 my-2">Jobs</p>
            <p className="text-gray-500 my-2">Jobs</p>
            <p className="text-gray-500 my-2">Jobs</p>
            <p className="text-gray-500 my-2">Jobs</p>
          </div>
          <div className="sm:w-40 text-center" >
            <h1 className="text-white mb-4">Features</h1>
            <p className="text-gray-500 my-2">Powerful Websites </p>
            <p className="text-gray-500 my-2">Powerful Websites </p>
            <p className="text-gray-500 my-2">Powerful Websites </p>
            <p className="text-gray-500 my-2">Powerful Websites </p>
          </div>
          <div className="sm:w-40 text-center" >
            <h1 className="text-white mb-4">Resourses</h1>
            <p className="text-gray-500 my-2">Docs</p>
            <p className="text-gray-500 my-2">Docs</p>
            <p className="text-gray-500 my-2">Docs</p>
            <p className="text-gray-500 my-2">Docs</p>
          </div>
          <div className="sm:w-40 text-center" >
            <h1 className="text-white mb-4">Newsletter</h1>
            <p className="text-gray-500 my-2">
              Trust us, we only send pro offers.
            </p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="outline-none px-2 py-2  "
              />
              <button className=" bg-yellow-400 px-4 py-1 ">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
