import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/course' element={<Courses />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App