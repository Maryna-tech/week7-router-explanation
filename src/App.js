import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Team from './Team';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  return <Router>
    <nav>
      <Link to="/" className='link'>First Page</Link>
      <Link to="/home" className='link'>Home</Link>
      <Link to="/about" className='link'>About</Link>
      <Link to="/shop" className='link'>Shop</Link>
      <Link to="/team" className='link'>Team</Link>
      <Link to="/contactus" className='link'>Contact Us</Link>
    </nav>
    
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    
    </Router>
}

export default App;
