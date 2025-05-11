import React from 'react'
import Hero from '../components/Home/Hero'
import About from '../components/Home/About'
import Gallery from '../components/Home/Gallery'
import Contact from '../components/Home/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <About />
        <Gallery />
        <Contact />
    </div>
  )
}

export default Home