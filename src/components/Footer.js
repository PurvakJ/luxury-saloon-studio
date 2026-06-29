// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bt-footer">
      <div className="bt-footer-content">
        <div>
          <div className="logo">
            <img 
              src="https://res.cloudinary.com/dm9gg8yss/image/upload/v1782751314/634d62a1-4e0d-4759-b6fb-fa7dbfc779e9_q8n3cv.png" 
              alt="Classy" 
            />
          </div>
          <p style={{ color: '#878787', marginTop: '20px', fontSize: '13px' }}>
            All rights reserved LUXURY SALOON STUDIO Hair Care 2021.
          </p>
        </div>
        <div>
          <h5>Stay informed about our monthly promotions, products &amp; more.</h5>
          <div className="newsletter-form">
            <input type="email" placeholder="e-mail address here" />
            <button>Send</button>
          </div>
          <div className="bt-footer-links">
            <ul>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">Our story</Link></li>
              <li><Link to="/about">Booking</Link></li>
              <li><Link to="/blog">Prices</Link></li>
              <li><Link to="/contact">Promotions</Link></li>
            </ul>
            <div>
              <p style={{ color: '#878787', fontSize: '14px' }}>E: info@bold-themes.com</p>
              <p style={{ color: '#878787', fontSize: '14px', marginTop: '8px' }}>A: 347 Portobello Rd, London, UK</p>
              <p style={{ color: '#878787', fontSize: '14px', marginTop: '8px' }}>T: +32 3 232 45 12</p>
              <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="icon-facebook">f</i></a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="icon-instagram">i</i></a>
  <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer"><i className="icon-pinterest">p</i></a>
</div>
            </div>
          </div>
        </div>
      </div>
      <div className="bt-footer-bottom">
        All rights reserved LUXURY SALOON STUDIO Hair Care 2021.
      </div>
    </footer>
  );
}

export default Footer;