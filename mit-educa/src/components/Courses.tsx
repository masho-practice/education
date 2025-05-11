import {courses} from '../data/courses'
import CourseCard from './CourseCard';

type Courses = {
    id: number,
    time: string,
    image: string,
    title: string,
    rating: number,
    price: number,
};

const Courses = () => {
  return (
    <div>
        <div>
            {courses.map((course: Courses)=> (
                <CourseCard  key={course.id} courses ={course}/>
            ))}
        </div>
    </div>
  )
}

export default Courses