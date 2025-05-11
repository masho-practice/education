import React from 'react'
import {Link}from 'react-router-dom'
import { AiOutlineGlobal } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='border-b shadow-md fixed top-0 w-full bg-white'>
        <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto flex py-4 justify-between items-center'>
            <Link to={'/'}>
            <div className='flex items-center gap-1 text-purple-600 '>            
            <AiOutlineGlobal size={30} />
                <h1 className='font-bold'>Masho-2025</h1>
            </div></Link>
            <ul className='flex gap-10'>
                <Link to={'/'}><li className='hover:border-b hover:border-gray-800'>Home</li></Link>                
                <Link to={'/program'}><li className='hover:border-b hover:border-gray-800'>Program</li></Link>                
                <Link to={'/contact'}><li className='hover:border-b hover:border-gray-800'>Contact</li></Link>                
                <Link to={'/register'}><li className='font-bold text-purple-700 hover:border-b hover:border-gray-800 hover:text-black'>Register</li></Link>                
            </ul>
        </div>
    </div>
  )
}

export default Navbar