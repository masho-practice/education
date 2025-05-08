import React from "react";

const ContactField = () => {
  return (
    <div className="bg-formImg bg-cover bg-center  ">
      <div className="bg-blue-600/40 h-full w-full">
        <div className="max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto py-8 text-white grid gap-8 md:grid-cols-2">
          <div className="flex flex-col my-28 mx-auto">
           
            <p>Get 100 online Courses for Free </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">Register to Get it </h1>
            <div className="flex my-8 ">
              <p className="py-2 px-5 rounded-lg bg-slate-500 mx-2 text-center ">
                18 <br />
                Days
              </p>
              <p className="py-2 px-5 rounded-lg bg-slate-500 mx-2 text-center ">
                23 <br />
                Hours
              </p>
              <p className="py-2 px-5 rounded-lg bg-slate-500 mx-2 text-center ">
                06 <br />
                Mins
              </p>
              <p className="py-2 px-5 rounded-lg bg-slate-500 mx-2 text-center ">
                45 <br />
                Secs
              </p>
            </div>
          </div>
          <div className="bg-white text-black rounded-lg w-3/4 mx-auto">
            <form action="POST" method="post" className="flex flex-col  m-8">
              <h1 className="font-bold text-xl my-2 ">Create Free Account Now!</h1>
              <label className="border border-blue-900 my-3 px-5 py-2  " htmlFor="name">
                <input type="text" placeholder="Name" className="focus:bg-transparent outline-none w-full"/>
              </label>
              <label className="border border-blue-900 my-3 px-5 py-2 t" htmlFor="email">
                <input type="email" placeholder="Email Address" className="focus:bg-transparent outline-none w-full"/>
              </label>
              <label className="border border-blue-900 my-3 px-5 py-2" htmlFor="text" >
                <input type="text" placeholder="Phone Number" className="focus:bg-transparent outline-none w-full "/>
              </label>
              <button type='submit' className="w-2/3 bg-yellow-500 hover:bg-yellow-600  rounded-sm  my-3 text-white px-5 py-2  ">Visit Courses</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactField;
