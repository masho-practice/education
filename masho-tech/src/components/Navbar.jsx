import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border shadow-md fixed top-0 z-50 w-full bg-white'>
      <div className='flex justify-between items-start mt-4 pb-2 max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto'>
        <div className=''>
          <img src="logo.svg" alt="" className='h-10 w-full object-cover object-center'/>
        </div>
        <ul className='hidden sm:flex gap-8 items-start'>
          <Link className='mt-2 hover:text-orange-400 text-blue-950' to={'/'}><li>Home</li></Link>
          <Link className='mt-2 hover:text-orange-400 text-blue-950' to={'/about'}><li>About</li></Link>
          <Link className='mt-2 hover:text-orange-400 text-blue-950' to={'/blog'}><li>Blog</li></Link>
          <Link className='mt-2 hover:text-orange-400 text-blue-950' to={'/course'}><li>Courses</li></Link>
          <Link className='mt-2 hover:text-orange-400 text-blue-950' to={'/contact'}><li>Contact</li></Link>
        </ul>
        <Link><button className='px-4 py-2 border border-blue-900 hover:text-white hover:bg-blue-950 duration-300 rounded-md'>Join For Free</button></Link>
      </div>
    </div>
  )
}

export default Navbar