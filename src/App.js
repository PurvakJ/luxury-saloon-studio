// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import ComingSoon from './pages/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="bt-page-wrap">
        <Header />
        <div className="bt-content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;