import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen my-16'>
        <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto'>
            <div className='pt-64 text-center'>
                <h1 className='text-4xl md:text-6xl font-extrabold text-center py-4'>National Ethio Cyber Talent</h1>
                <h1 className='text-4xl md:text-8xl font-extrabold text-center '>Summer Camp 2025</h1>
                <p className='text-2xl md:text-3xl md:mt-4'>🚀 <span className='text-orange-400 '>Registration Open!</span> Join Ethiopia's brightest minds for a summer of cybersecurity, coding, and creativity</p>
                <button className='px-9 text-white  py-3 mt-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-500 font-bold'>Register Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero