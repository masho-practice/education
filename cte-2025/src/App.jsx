import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Program from './pages/Program';
import Register from './pages/Register';
const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/program' element={<Program />}/>  
        <Route path='/register' element={<Register />}/>    
      </Routes>
      <Footer />
    </Router>
  )
}

export default App