// components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.bt-header')) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    if (window.innerWidth <= 768) {
      setActiveDropdown(activeDropdown === index ? null : index);
    }
  };

  return (
    <header className={`bt-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img 
            src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782751314/634d62a1-4e0d-4759-b6fb-fa7dbfc779e9_q8n3cv.png" 
            alt="Classy" 
          />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation */}
      <nav className={`bt-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className="bt-dropdown">
          <Link to="/" onClick={closeMenu}>Home</Link>
        </div>
        
        <div className={`bt-dropdown ${activeDropdown === 0 ? 'active' : ''}`}>
          <Link 
            to="/about" 
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleDropdown(0);
              } else {
                closeMenu();
              }
            }}
          >
            About
          </Link>
          <div className="bt-dropdown-menu">
            <Link to="/about" onClick={closeMenu}>About us</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/testimonials" onClick={closeMenu}>Testimonials</Link>
            <Link to="/coming-soon" onClick={closeMenu}>Coming Soon</Link>
          </div>
        </div>

        <Link to="/contact" onClick={closeMenu}>Contact</Link>
        
        <div className={`bt-dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
          <Link 
            to="/blog" 
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                e.preventDefault();
                toggleDropdown(1);
              } else {
                closeMenu();
              }
            }}
          >
            Pages
          </Link>
          <div className="bt-dropdown-menu">
            <Link to="/blog" onClick={closeMenu}>Blog</Link>
            <Link to="/portfolio" onClick={closeMenu}>Portfolio</Link>
          </div>
        </div>

        <Link to="/contact" className="book-now" onClick={closeMenu}>
          BOOK NOW
          <span>→</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;