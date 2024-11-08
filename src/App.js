import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';

import Header from './components/Header';

import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours';
import Destination from './pages/Destination';
import Blog from './pages/Blog';
import FAQ from './pages/Faq';
import Contact from './pages/Contact';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        {/* Let's set up routes for all pages*/}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/destination' element={<Destination />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
