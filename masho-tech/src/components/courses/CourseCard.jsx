import React from 'react'


const CourseCard = ({course}) => {
  return (
    <div className=' flex flex-col space-x-6 bg-purple-50 '>
      <div className='flex flex-col items-center mb-2 w-full'>
        <img src={course.image} alt="" className='w-full h-36  object-contain object-center ' />
        <p className=' mt-[-27px] w-12 h-12 bg-purple-800 text-white flex items-center justify-center rounded-full'>${course.price}</p>
      </div>
    
           <h1 className='text-center font-bold text-xl'>{course.title}</h1>
        <p className='text-center'>{course.total} {' '} Courses</p>

   
       
    </div>
  )
}

export default CourseCard