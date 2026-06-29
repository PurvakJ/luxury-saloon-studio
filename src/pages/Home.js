// pages/Home.js
import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/hero_slider_04.avif',
      title: 'Luxury',
      subtitle: 'CUT & SHAPE',
      description: 'HAIR LOVERS'
    }
  ];

  const clients = [
    'client-logo-01.png',
    'client-logo-02.png',
    'client-logo-03.png',
    'client-logo-04.png',
    'client-logo-05.png',
    'client-logo-01.png',
    'client-logo-02.png',
    'client-logo-03.png',
    'client-logo-04.png',
    'client-logo-05.png',
  ];

  const services = [
    { icon: '✂', title: 'CONTACT', text: '+32 3 232 45 12\ninfo@luxurysalonstudio.com' },
    { icon: '💄', title: 'PRODUCTS', text: 'Designed to maintain your current\ncolor and blend out perfectly.' },
    { icon: '🏠', title: 'THE SALON', text: '347 Portobello Road,\nLondon, W10 5SA' },
    { icon: '✨', title: 'SPECIALISTS', text: 'Expert stylists with over 15 years\nof experience in luxury hair care.' },
    { icon: '💎', title: 'PREMIUM', text: 'Using only the finest products\nfrom luxury brands worldwide.' },
    { icon: '🌟', title: 'AWARDS', text: 'Multiple award-winning salon\nrecognized for excellence.' }
  ];

  const aboutImages = [
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/background_image_01.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/background_image_02.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/background_image_03.avif'
  ];

  const aboutSlides = [
    { icon: '✂', title: 'HIGHLIGHTS', text: 'We shape, style and tell stories with hair.' },
    { icon: '💇', title: 'HIGHLIGHTS', text: 'Specializing in: cutting, balayage, creative hair.' },
    { icon: '🌿', title: 'HIGHLIGHTS', text: 'We can make your hair color vegan, gluten-free.' }
  ];

  const gallery = [
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_01.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_02.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_03.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_04.avif',
    'https://res.cloudinary.com/dm9gg8yss/image/upload/v1782751314/634d62a1-4e0d-4759-b6fb-fa7dbfc779e9_q8n3cv.png',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_06.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_07.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_08.avif',
    'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2025/06/home_02_image_09.avif'
  ];

  const workingHours = [
    { day: 'MONDAY', time: '14:00 - 20:00' },
    { day: 'TUESDAY', time: '12:00 - 19:00' },
    { day: 'WEDNESDAY', time: '10:00 - 18:00' },
    { day: 'THURSDAY', time: '10:00 - 18:00' },
    { day: 'FRIDAY', time: '12:00 - 19:00' },
    { day: 'SATURDAY', time: '10:00 - 18:00' },
    { day: 'SUNDAY', time: 'CLOSED' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="home-page">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slides-wrapper">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-overlay-gradient"></div>
              <div className="slide-content">
                <h1 className="slide-title">{slide.title}</h1>
                <h2 className="slide-subtitle">{slide.subtitle}</h2>
                <p className="slide-description">{slide.description}</p>
                <div className="slide-cta">
                  <a href="/booking" className="btn-primary">Book Now →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos Marquee */}
      <section className="client-logos">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...clients, ...clients].map((logo, index) => (
              <img 
                key={index}
                src={`https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/09/${logo}`}
                alt={`Client ${index + 1}`}
                className="marquee-logo"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container about-grid">
          <div className="about-text">
            <h2 className="section-title">Luxury</h2>
            <h3>RESERVED FOR YOUR HAIR</h3>
            <p>We shape, style and tell stories with hair. We believe our work is best done when it is done with passion and with perfection. This is the place where fashion, lifestyle and beauty all come together.</p>
            <p className="about-highlight">Experience the epitome of luxury hair care at Luxury Salon Studio, where every visit is a journey of transformation.</p>
            <a href="/contact" className="btn-primary">
              Book your appointment →
            </a>
          </div>
          <div className="about-gallery">
            <div className="about-slider">
              {aboutSlides.map((item, index) => (
                <div key={index} className="about-slide">
                  <img src={aboutImages[index]} alt="About" />
                  <div className="slide-overlay">
                    <span className="slide-icon">{item.icon}</span>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">About</h2>
          <h3 className="section-subtitle">LUXURY SALON STUDIO</h3>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Follow</h2>
          <h3 className="section-subtitle">LUXURY SALON STUDIO</h3>
          <div className="gallery-grid">
            {gallery.map((img, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={`${img}`}
                  alt={`Gallery ${index + 1}`}
                />
                <div className="gallery-overlay">
                  <span>✦</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="hours-section">
        <div className="container hours-grid">
          <div className="hours-text">
            <h2 className="section-title">Luxury</h2>
            <h3>OPENING HOURS</h3>
            <p className="hours-description">Visit us at our elegant studio in the heart of London</p>
          </div>
          <div className="hours-list">
            {workingHours.map((item, index) => (
              <div key={index} className={`hour-item ${item.day === 'THURSDAY' ? 'current' : ''}`}>
                <span className="day">{item.day}</span>
                <span className="time">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2 className="section-title">Contact</h2>
            <h3>WE'D LOVE TO HEAR FROM YOU</h3>
            <div className="contact-details">
              <p>📍 347 Portobello Road, London, W10 5SA</p>
              <p>📞 +32 3 232 45 12</p>
              <p>✉️ info@luxurysalonstudio.com</p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>FIRST NAME</label>
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                  <label>LAST NAME</label>
                  <input type="text" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>E-MAIL*</label>
                  <input type="email" placeholder="Enter your e-mail" />
                </div>
                <div className="form-group">
                  <label>PHONE NUMBER</label>
                  <input type="tel" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="form-group">
                <label>I'M INTERESTED IN</label>
                <select>
                  <option>—Please choose an option—</option>
                  <option>Short Cut</option>
                  <option>Long Cut</option>
                  <option>Kids Cut</option>
                  <option>Coloring</option>
                  <option>Balayage</option>
                  <option>Highlights</option>
                  <option>Special Occasion Styling</option>
                </select>
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;