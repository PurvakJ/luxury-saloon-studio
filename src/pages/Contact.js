// pages/Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
  const workingHours = [
    { day: 'WORKING DAYS /', time: '14:00 - 20:00' },
    { day: 'SATURDAY /', time: '09:00 - 17:00' },
    { day: 'SUNDAY /', time: 'CLOSED' }
  ];

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1>CONTACT US</h1>
          <h2>LUXURY SALOON STUDIO</h2>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">
            <form className="contact-form">
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
                </select>
              </div>
              <div className="form-group">
                <label>MESSAGE</label>
                <textarea placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="btn-primary">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-details">
            <div className="detail-item">
              <h3>GET IN TOUCH</h3>
              <p className="email">info@LUXURY SALOON STUDIO.com</p>
              <p>New customer for color? You want a big color change, or looking for advice? Please book a free consultation first or give us a call to make an appointment.</p>
            </div>
            <div className="detail-item locations">
              <div className="location">
                <h4>LOCATION ONE</h4>
                <p className="phone">+32 3 232 45 12</p>
                <p>347 Portobello Road, London, W10 5SA</p>
              </div>
              <div className="location">
                <h4>LOCATION TWO</h4>
                <p className="phone">+32 3 243 35 62</p>
                <p>98 Tottenham Lane, London, N8 7EE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Voucher */}
      <section className="gift-section">
        <div className="container">
          <div className="gift-content">
            <h3>LUXURY SALOON STUDIO</h3>
            <h2>GIFT VOUCHER</h2>
            <p>Available for all occasions, for a specific treatment or monetary amount. Please call us or email us for more details.</p>
            <a href="/contact" className="btn-primary">📞 +32 (0)3 232 45 12</a>
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="contact-hours">
        <div className="container">
          <div className="hours-info">
            <div className="hours-left">
              <h3>YOU ARE WELCOME</h3>
              <h2>OPENING HOURS</h2>
              <a href="/about" className="btn-primary">Book now →</a>
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
    </div>
  );
}

export default Contact;