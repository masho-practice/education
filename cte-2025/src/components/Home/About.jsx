import React from 'react'

const About = () => {
  return (
    <div className='mt-16 '>
        <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto'>
            <h1 className='text-center text-purple-950 mb-16 text-3xl md:text-4xl font-bold'>About the Program</h1>
            <div className='bg-blue-50 p-8'>
                <p className='text-xl text-purple-900/70'>The <span className='text-purple-600 font-bold'>Masho Tech CBC  Cyber Talent Summer Camp</span>  is your gateway to becoming Ethiopia's next tech leader. Dive into tracks like <span className='text-purple-500'>cybersecurity, development, embedded systems, and aerospace</span> . Learn from pros, tackle real-world projects, and build skills that shine.</p>
            </div>
            <div className='grid gap-8 md:grid-cols-2 my-10 rounded-md '>
              <div className='text-center border shadow-md p-6'>
                <h1 className='text-center font-extrabold text-xl text-purple-950 '>Our Goals</h1>
                <p className='text-purple-700 my-4'>Empower young Ethiopians with cutting-edge tech skills, foster innovation, and build a strong foundation for national technological advancement.</p>
              </div>
              <div className='text-center border shadow-md p-6 rounded-md'>
                <h1 className='text-center font-extrabold text-xl text-purple-950 '>Our Values</h1>
                <p className='text-purple-700 my-4'>Integrity, excellence, and collaboration drive us to create an inclusive environment where creativity and learning thrive.</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About