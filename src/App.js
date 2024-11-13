import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
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
      <Header />
      <main>
        {/* Контент твоей страницы */}
        <Routes>
          {/* Настроим маршруты для всех страниц */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/tours' element={<Tours />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/error' element={<Error />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
