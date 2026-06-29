// pages/Services.js
import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      icon: 'H',
      title: 'CUT & COLOR',
      description: 'We are happy to be offering our full range of services in the salon, wash and blow drys included!',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/card_services_01.jpg'
    },
    {
      icon: 'A',
      title: 'FASHION STYLING',
      description: 'Specializing in: precision cutting, balayage, creative hair colour and keratin smoothing treatments.',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/card_services_02.jpg'
    },
    {
      icon: 'I',
      title: 'HIGHLIGHTS',
      description: 'We are looking forward to providing you with a fun, relaxing and safe appointment experience.',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/card_services_03.jpg'
    },
    {
      icon: 'R',
      title: 'HAIR PRODUCTS',
      description: 'From barely there pink to balayage blonde, our colour experts will nail any tone you can imagine.',
      image: 'https://kosa.bold-themes.com/classy/wp-content/uploads/sites/2/2021/10/card_services_04.jpg'
    }
  ];

  const priceTabs = {
    cuts: [
      { title: 'KOSA PREMIUM', price: '$75', desc: 'Massage, luxury shampoo, fix and finish' },
      { title: 'SHORT', price: '$25', desc: 'Inclusive luxury shampoo, fix and finish' },
      { title: 'MEDIUM', price: '$35', desc: 'Suited to frizzy and curly hair' },
      { title: 'LONG', price: '$60', desc: 'Helps nourish dry and stressed hair' },
      { title: 'MEN', price: '$30', desc: 'Adds body to thin and lifeless hair' },
      { title: 'KIDS', price: '$20', desc: 'For hair that needs a little extra TLC' }
    ],
    styles: [
      { title: 'WASH & CUT', price: '$70', desc: 'Adds body to thin and lifeless hair' },
      { title: "MEN'S HAIRCUT", price: '$110', desc: 'Suited to frizzy and curly hair' },
      { title: "CHILDREN'S CUT", price: '$85', desc: 'For hair that needs a little extra TLC' },
      { title: 'BANG TRIM', price: '$100', desc: 'Helps nourish dry and stressed hair' },
      { title: 'WASH CUT & BLOW DRY', price: '$125', desc: 'Massage, luxury shampoo, fix and finish' },
      { title: "UP DO'S", price: '$45', desc: 'Inclusive luxury shampoo, fix and finish' }
    ],
    coloring: [
      { title: 'ROOT TOUCH-UP', price: '$55', desc: 'For hair that needs a little extra TLC' },
      { title: 'PARTIAL HIGHLIGHT', price: '$60', desc: 'Inclusive luxury shampoo, fix and finish' },
      { title: 'PARTIAL W/COLOR', price: '$80', desc: 'Suited to frizzy and curly hair' },
      { title: 'FULL W/COLOR', price: '$95', desc: 'Massage, luxury shampoo, fix and finish' },
      { title: 'DIMENSIONAL COLOR', price: '$105', desc: 'Adds body to thin and lifeless hair' },
      { title: 'COLOR COLLECTION', price: '$125', desc: 'Helps nourish dry and stressed hair' }
    ],
    packages: [
      { title: 'DEEP WAVE', price: '$65', desc: 'Adds body to thin and lifeless hair' },
      { title: 'NATURAL WAVE', price: '$80', desc: 'Suited to frizzy and curly hair' },
      { title: 'LOSSE WAVE', price: '$75', desc: 'For hair that needs a little extra TLC' },
      { title: 'NATURAL COLOR', price: '$95', desc: 'Helps nourish dry and stressed hair' },
      { title: 'CLOSURES', price: '$110', desc: 'Massage, luxury shampoo, fix and finish' },
      { title: 'FRONTALS', price: '$120', desc: 'Inclusive luxury shampoo, fix and finish' }
    ]
  };

  const [activeTab, setActiveTab] = React.useState('cuts');

  const packageDeals = [
    {
      title: 'SUPREME',
      oldPrice: '500',
      newPrice: '400',
      features: 'MASSAGE • CUTTING • COLORING EXTENSIONS • STYLING'
    },
    {
      title: 'DELUX',
      oldPrice: '400',
      newPrice: '300',
      features: 'BALAYAGE • CUTTING • BRAIDS EXTENSIONS • STYLING'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero */}
      <section className="services-hero">
        <div className="container">
          <h1>SERVICES</h1>
          <h2>LUXURY SALOON STUDIO</h2>
          <p>Designed to maintain your current colour, blend out a growing root or balance your blonde while providing full and demi-permanent coverage.</p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="services-cards">
        <div className="container">
          <div className="cards-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="card-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <div className="card-overlay">
                    <h1 className="card-letter">{service.icon}</h1>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                    <a href="/contact" className="btn-outline">View more →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing-section">
        <div className="container">
          <h3>ADVANCED</h3>
          <h2>PRICING LIST</h2>
          
          <div className="pricing-tabs">
            <div className="tab-nav">
              {['cuts', 'styles', 'coloring', 'packages'].map((tab) => (
                <button 
                  key={tab}
                  className={activeTab === tab ? 'active' : ''}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="tab-content">
              <div className="price-grid">
                {priceTabs[activeTab].map((item, index) => (
                  <div key={index} className="price-item">
                    <div className="price-row">
                      <span className="price-title">{item.title}</span>
                      <span className="price-amount">{item.price}</span>
                    </div>
                    <p className="price-desc">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="package-deals">
        <div className="container">
          <h3>SUBSCRIBE</h3>
          <h2>MONTHLY PROMO</h2>
          <div className="packages-grid">
            {packageDeals.map((pkg, index) => (
              <div key={index} className="package-card">
                <h4>{pkg.title}</h4>
                <div className="package-price">
                  <span className="old-price">${pkg.oldPrice}</span>
                  <span className="new-price">${pkg.newPrice}</span>
                </div>
                <p>{pkg.features}</p>
                <a href="/contact" className="btn-primary">Book Now →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Counters */}
      <section className="counters-section">
        <div className="container">
          <div className="counters-grid">
            <div className="counter-item">
              <span className="counter-icon">✂</span>
              <span className="counter-value">500+</span>
              <span className="counter-label">FASHION SHOWS</span>
            </div>
            <div className="counter-item">
              <span className="counter-icon">💄</span>
              <span className="counter-value">15</span>
              <span className="counter-label">TOP COLORISTS</span>
            </div>
            <div className="counter-item">
              <span className="counter-icon">✨</span>
              <span className="counter-value">100%</span>
              <span className="counter-label">UNIQUE STYLES</span>
            </div>
            <div className="counter-item">
              <span className="counter-icon">🌿</span>
              <span className="counter-value">250+</span>
              <span className="counter-label">BEST PRODUCTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pricing-cards">
        <div className="container">
          <div className="price-cards-grid">
            <div className="price-card">
              <h4>HAIR PLUS</h4>
              <div className="price">$200</div>
              <ul>
                <li>CUTTING</li>
                <li>COLORING</li>
                <li>STYLING</li>
                <li>-</li>
              </ul>
              <a href="/contact" className="btn-primary">Buy now →</a>
            </div>
            <div className="price-card featured">
              <h4>HAIR SUPREME</h4>
              <div className="price">$500</div>
              <ul>
                <li>MASSAGE</li>
                <li>CUTTING</li>
                <li>COLORING</li>
                <li>STYLING</li>
              </ul>
              <a href="/contact" className="btn-outline">Buy now →</a>
            </div>
            <div className="price-card">
              <h4>HAIR PREMIUM</h4>
              <div className="price">$300</div>
              <ul>
                <li>CUTTING</li>
                <li>COLORING</li>
                <li>EXTENSIONS</li>
                <li>STYLING</li>
              </ul>
              <a href="/contact" className="btn-primary">Buy now →</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;