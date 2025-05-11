import React from 'react'

const Footer = () => {
  return (
    <div className='bg-yellow-100/60 text-gray-500 h-16 py-5 '>
      <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto flex justify-between items-center'>
        <p>© 2025 Masho Tech All rights reserved.</p>
        <div className='flex gap-3 '>
          <button className='hover:text-gray-300'>Program</button>
          <button className='hover:text-gray-300'>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Footer