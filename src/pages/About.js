// pages/About.js
import React from 'react';
import './About.css';

function About() {
  const counters = [
    { icon: '✂', value: '500+', label: 'FASHION SHOWS' },
    { icon: '💄', value: '15', label: 'TOP COLORISTS' },
    { icon: '✨', value: '100%', label: 'UNIQUE STYLES' },
    { icon: '🌿', value: '250+', label: 'BEST PRODUCTS' }
  ];

  const team = [
    {
      name: 'LINDSEY JONES',
      role: 'General Manager',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2022/07/about_image_01_new.jpg'
    },
    {
      name: 'LILLY CHEVEUX',
      role: 'Hairstylist / Colorist',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2022/07/about_image_02_new.jpg'
    },
    {
      name: 'BEN SMITH',
      role: 'Hairstylist / Colorist',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2022/07/about_image_03_new.jpg'
    }
  ];

  const workingHours = [
    { day: 'WORKING DAYS /', time: '14:00 - 20:00' },
    { day: 'SATURDAY /', time: '09:00 - 17:00' },
    { day: 'SUNDAY /', time: 'CLOSED' }
  ];

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>ABOUT US</h1>
          <h2>KOSA SALON</h2>
          <p>Designed to maintain your current colour, blend out a growing root or balance your blonde while providing full and demi-permanent coverage.</p>
        </div>
      </section>

      {/* Counters */}
      <section className="counters-section">
        <div className="container">
          <div className="counters-grid">
            {counters.map((counter, index) => (
              <div key={index} className="counter-item">
                <span className="counter-icon">{counter.icon}</span>
                <span className="counter-value">{counter.value}</span>
                <span className="counter-label">{counter.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} />
                <h4>{member.name}</h4>
                <p>{member.role}</p>
                <div className="social-links">
  <a href="https://instagram.com/username" target="_blank" rel="noopener noreferrer">
    <i className="icon-instagram">📷</i>
  </a>
  <a href="https://pinterest.com/username" target="_blank" rel="noopener noreferrer">
    <i className="icon-pinterest">📌</i>
  </a>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="about-hours">
        <div className="container">
          <div className="hours-info">
            <div className="hours-left">
              <h3>YOU ARE WELCOME</h3>
              <h2>OPENING HOURS</h2>
              <p><i className="icon-location">📍</i> 95 Madison Avenue, New York</p>
            </div>
            <div className="hours-right">
              {workingHours.map((item, index) => (
                <div key={index} className={`hour-item ${item.day === 'WORKING DAYS /' ? 'current' : ''}`}>
                  <span className="day">{item.day}</span>
                  <span className="time">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Team */}
      <section className="join-section">
        <div className="container">
          <h3>LET'S GET IN TOUCH</h3>
          <h2>JOIN OUR TEAM</h2>
          <p>If you feel like sharing passion with us, please fill out the application form.</p>
          <a href="/contact" className="btn-primary">Apply today →</a>
        </div>
      </section>
    </div>
  );
}

export default About;