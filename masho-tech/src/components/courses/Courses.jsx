import React from 'react'
import { courses } from '../../data/courseData'
import CourseCard from './CourseCard'

const Courses = () => {
  return (
    <div className='py-16'>
        <div className='max-w-[1280px] px-3 sm:px-6 md:px-20 lg:px-32 mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid=cols-4 gap-10'>
            {courses.map((course)=>(
                <CourseCard key={course.id} course={course}/>
            ))}
        </div>
    </div>
  )
}

export default Courses