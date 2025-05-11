import { LuSchool } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
    
  return (
    <div className="sticky top-0 z-50 bg-white  ">
        <div className="max-w-[1280px] flex items-center justify-between px-3 sm:px-6 md:px-20 lg:px-32  py-3 mx-auto">
            <Link to={'/'}>
             <div className="flex gap-2 text-purple-800 items-center">
                <LuSchool size={60} className=" "/>
                <h1 className="font-bold text-xl font-serif ">Masho IT <br /> School</h1>
            </div>
            </Link>           
            <ul className="hidden sm:flex gap-8">
                <Link className='text-purple-700 hover:text-orange-600' to={'/'}>
                    <li>Home</li>
                </Link>
                <Link className='text-purple-700 hover:text-orange-600' to={'/about'}>
                    <li>About</li>
                </Link>
                <Link className='text-purple-700 hover:text-orange-600' to={'/blog'}>
                    <li>Blog</li>
                </Link>
                <Link className='text-purple-700 hover:text-orange-600' to={'/course'}>
                    <li>Courses</li>
                </Link>
                <Link className='text-purple-700 hover:text-orange-600' to={'/contact'}>
                    <li>Contact</li>
                </Link>
            </ul>
            <Link className="text-purple-900 border border-purple-950 py-2 px-4 font-medium rounded-lg" to={'/login'}><button>Join For Free</button></Link>
        </div>
    </div>
  )
}

export default Navbar