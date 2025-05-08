import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/courses/Courses'
import ContactField from '../components/ContactField'
import Experts from '../components/Experts/Experts'

//mport Features from '../components/courses/Features'

const Home = () => {
  return (
    <div>
      
      <Hero />
      <Courses /> 
      <ContactField />
      <Experts />
    </div>
  )
}

export default Home