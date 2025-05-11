import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/blog' element={<Blog />}/>
      <Route path='/courses' element={<Courses />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default App