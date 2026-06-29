// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`bt-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/">
          <img 
            src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782751314/634d62a1-4e0d-4759-b6fb-fa7dbfc779e9_q8n3cv.png" 
            alt="Classy" 
          />
        </Link>
      </div>
      <nav className="bt-nav">
        <div className="bt-dropdown">
          <Link to="/">Home</Link>
        </div>
        <div className="bt-dropdown">
          <Link to="/about">About</Link>
          <div className="bt-dropdown-menu">
            <Link to="/about">About us</Link>
            <Link to="/services">Services</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/coming-soon">Coming Soon</Link>
          </div>
        </div>
        <Link to="/contact">Contact</Link>
        <div className="bt-dropdown">
          <Link to="/blog">Pages</Link>
          <div className="bt-dropdown-menu">
            <Link to="/blog">Blog</Link>
            <Link to="/">Portfolio</Link>
          </div>
        </div>
        <Link to="/contact" className="book-now">
          BOOK NOW
          <span>→</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;