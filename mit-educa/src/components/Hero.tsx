import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className=" inset-0 w-full h-screen bg-cover bg-center overflow-hidden "
      style={{ backgroundImage: "url('/back.jpg')" }}
    >
      <div className="  bg-gray-900/50 h-screen w-full ">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col text-center items-center py-64 md:py-96 justify-center text-white ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 font-bold ">
              Secure Your Future With Masho IT
            </h1>
            <p className=" max-w-[600px] mx-auto ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
              beatae quod! In minima doloribus laboriosam saepe nemo illo
              dolorem est consequatur, ex rerum commodi qui labore nihil.
              Aperiam, dicta minima?
            </p>
            <div className="flex  gap-3 justify-center items-center my-6">
              <Link
                to="/about"
                className="bg-blue-900 rounded-md font-serif  px-4 py-2 text-center "
              >
                <button>Learn More</button>
              </Link>
              <Link to="/courses">
                <button className="bg-yellow-400 rounded-md font-serif  px-4 py-2 text-center">
                  Visit Courses
                </button>
              </Link>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;
