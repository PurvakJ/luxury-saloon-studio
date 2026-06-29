// pages/Testimonials.js
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      name: 'SARAH GERARD',
      detail: 'Haircut, color & styling by Lilly',
      text: '"My hair is transformed into a vibrant, healthy looking style that draws compliments."',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/testimonials_image_01.jpg'
    },
    {
      name: 'JESSICA SMITH',
      detail: 'Hairstyle & balayage',
      text: '"Kosa is revolutionizing hair with custom made formulas for type of hair and color."',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/testimonials_image_02.jpg'
    },
    {
      name: 'NICK LEWIS',
      detail: 'Cutting, coloring & styling',
      text: '"I am so in love with it and will change to any other brand! It leaves your hair shiny."',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/testimonials_image_03.jpg'
    }
  ];

  const reviews = [
    {
      name: 'SOPHIE LARSON',
      detail: 'Haircut, color & styling by Lilly',
      text: 'Excellent service and haircut style. I enjoyed the experience. I will definitely book them again.',
      rating: 5,
      icon: 'logo_icon_02.jpg'
    },
    {
      name: 'DANIELLE DAVIS',
      detail: 'Haircut & styling by Lilly',
      text: 'Lovely hair salon. Lilly is simply a wonderful hairdresser – whatever hair type or style. Highly recommended!',
      rating: 5,
      icon: 'logo_icon_03.jpg'
    },
    {
      name: 'LAURA NOLAN',
      detail: 'Color & styling by Brooke',
      text: 'I can never wait for my next appointment! I highly recommend this salon – the whole team are incredible.',
      rating: 5,
      icon: 'logo_icon_04.jpg'
    }
  ];

  const pressReviews = [
    {
      text: '"If you\'re looking for your favorite new hair salon, we\'ve found it."',
      logo: 'client_logo_white_01.png'
    },
    {
      text: '"Anyone with curly hair knows you have to treat it differently."',
      logo: 'client_logo_white_02.png'
    },
    {
      text: '"They expertly brought back beauty and color to my hair."',
      logo: 'client_logo_white_03.png'
    }
  ];

  const workingHours = [
    { day: 'WORKING DAYS /', time: '14:00 - 20:00' },
    { day: 'SATURDAY /', time: '09:00 - 17:00' },
    { day: 'SUNDAY /', time: 'CLOSED' }
  ];

  return (
    <div className="testimonials-page">
      {/* Hero */}
      <section className="testimonials-hero">
        <div className="container">
          <h1>TESTIMONIALS</h1>
          <h2>LUXURY SALOON STUDIO</h2>
        </div>
      </section>

      {/* Main Testimonials */}
      <section className="main-testimonials">
        <div className="container">
          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="testimonial-item">
                <div className="testimonial-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="testimonial-content">
                  <img 
                    src="https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/logo_icon_01.png" 
                    alt="Quote"
                    className="quote-icon"
                  />
                  <h4>{item.text}</h4>
                  <div className="testimonial-author">
                    <span className="name">{item.name}</span>
                    <span className="detail">{item.detail}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-grid-section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <img 
                  src={`https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/${review.icon}`}
                  alt={review.name}
                  className="review-icon"
                />
                <h4>"{review.text}"</h4>
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <span className="review-name">{review.name}</span>
                <span className="review-detail">{review.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="press-section">
        <div className="container">
          <div className="press-slider">
            {pressReviews.map((item, index) => (
              <div key={index} className="press-item">
                <h3>WE ARE IN THE PRESS</h3>
                <h2>{item.text}</h2>
                <img 
                  src={`https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/${item.logo}`}
                  alt="Press logo"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="testimonials-hours">
        <div className="container">
          <div className="hours-info">
            <div className="hours-left">
              <h3>YOU ARE WELCOME</h3>
              <h2>OPENING HOURS</h2>
              <a href="/contact" className="btn-primary">Book now →</a>
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

export default Testimonials;