import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo">
          LuxeGlow
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#appointment" className="nav-button" onClick={() => setMenuOpen(false)}>
            Book Now
          </a>
        </nav>
      </header>


      {/* HERO */}
      <main>

        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">BEAUTY • STYLE • CONFIDENCE</p>

            <h1>
              Beauty that
              <span> feels like you.</span>
            </h1>

            <p className="hero-text">
              Discover personalized beauty experiences designed
              to make you feel confident, refreshed, and radiant.
            </p>

            <div className="hero-buttons">
              <a href="#appointment" className="primary-button">
                Book an Appointment
              </a>

              <a href="#services" className="secondary-button">
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=85"
              alt="Elegant salon interior"
            />
          </div>
        </section>


        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=1000&q=85"
              alt="Beauty salon styling"
            />
          </div>

          <div className="about-content">
            <p className="section-label">ABOUT LUXEGLOW</p>

            <h2>
              Where beauty meets
              <span> confidence.</span>
            </h2>

            <p>
              LuxeGlow is a modern beauty studio created for people
              who believe self-care should feel special. From everyday
              styling to memorable occasions, our goal is to create
              an experience that leaves you feeling your absolute best.
            </p>

            <p>
              Our approach combines personalized service, attention
              to detail, and a calm environment where you can simply
              relax and enjoy your time.
            </p>

            <a href="#appointment" className="text-button">
              Start Your Glow →
            </a>
          </div>
        </section>


        {/* STATS */}
        <section className="stats">
          <div>
            <strong>8+</strong>
            <span>Years of Experience</span>
          </div>

          <div>
            <strong>2K+</strong>
            <span>Happy Clients</span>
          </div>

          <div>
            <strong>15+</strong>
            <span>Beauty Services</span>
          </div>

          <div>
            <strong>4.9</strong>
            <span>Client Rating</span>
          </div>
        </section>


        {/* SERVICES */}
        <section className="services section" id="services">
          <div className="section-heading">
            <div>
              <p className="section-label">WHAT WE OFFER</p>

              <h2>
                Services made
                <span> for you.</span>
              </h2>
            </div>

            <p>
              From everyday self-care to special occasions,
              discover treatments designed around you.
            </p>
          </div>

          <div className="service-grid">

            <article className="service-card">
              <span>01</span>
              <div className="service-icon">✦</div>
              <h3>Hair Styling</h3>
              <p>
                Personalized cuts, styling, and finishing
                for a look that feels completely yours.
              </p>
              <strong>From ₹599</strong>
            </article>

            <article className="service-card">
              <span>02</span>
              <div className="service-icon">✧</div>
              <h3>Hair Spa</h3>
              <p>
                Relaxing treatments designed to nourish
                and restore healthy-looking hair.
              </p>
              <strong>From ₹799</strong>
            </article>

            <article className="service-card">
              <span>03</span>
              <div className="service-icon">◇</div>
              <h3>Facial</h3>
              <p>
                Refreshing skincare experiences for a
                naturally radiant and glowing complexion.
              </p>
              <strong>From ₹699</strong>
            </article>

            <article className="service-card">
              <span>04</span>
              <div className="service-icon">♡</div>
              <h3>Manicure & Pedicure</h3>
              <p>
                Detailed nail care and relaxing treatments
                for beautifully polished hands and feet.
              </p>
              <strong>From ₹499</strong>
            </article>

            <article className="service-card">
              <span>05</span>
              <div className="service-icon">✺</div>
              <h3>Makeup</h3>
              <p>
                Soft glam and occasion makeup tailored
                to your style and personality.
              </p>
              <strong>From ₹1,499</strong>
            </article>

            <article className="service-card">
              <span>06</span>
              <div className="service-icon">❋</div>
              <h3>Bridal Package</h3>
              <p>
                Complete bridal beauty services designed
                to make your special day unforgettable.
              </p>
              <strong>From ₹4,999</strong>
            </article>

          </div>
        </section>


        {/* GALLERY */}
        <section className="gallery section" id="gallery">
          <div className="section-heading centered">
            <p className="section-label">OUR SPACE</p>

            <h2>
              A little look inside
              <span> LuxeGlow.</span>
            </h2>

            <p>
              A calm, welcoming space where every detail
              is designed around your experience.
            </p>
          </div>

          <div className="gallery-grid">
            <img
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=900&q=85"
              alt="Salon styling area"
            />

            <img
              src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85"
              alt="Salon beauty station"
            />

            <img
              src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=85"
              alt="Hair salon interior"
            />

            <img
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=900&q=85"
              alt="Salon treatment space"
            />
          </div>
        </section>


        {/* TESTIMONIAL */}
        <section className="testimonial">
          <p className="quote-mark">“</p>

          <blockquote>
            The whole experience felt so relaxing and personal.
            I walked out feeling confident, refreshed, and absolutely
            loved my new look.
          </blockquote>

          <p className="customer">— Aanya, LuxeGlow Client</p>
        </section>


        {/* APPOINTMENT */}
        <section className="appointment section" id="appointment">
          <div className="appointment-content">
            <p className="section-label">BOOK YOUR VISIT</p>

            <h2>
              Ready for your
              <span> glow?</span>
            </h2>

            <p>
              Tell us what you're looking for and our team
              will help you plan your perfect salon experience.
            </p>

            <div className="appointment-info">
              <div>
                <strong>Opening Hours</strong>
                <p>Mon – Sat: 10:00 AM – 8:00 PM</p>
                <p>Sunday: 11:00 AM – 6:00 PM</p>
              </div>

              <div>
                <strong>Call Us</strong>
                <p>+91 98765 43210</p>
              </div>
            </div>
          </div>

          <form className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Your Name" required />
              <input type="tel" placeholder="Phone Number" required />
            </div>

            <div className="form-row">
              <select defaultValue="" required>
                <option value="" disabled>Select Service</option>
                <option>Hair Styling</option>
                <option>Hair Spa</option>
                <option>Facial</option>
                <option>Manicure & Pedicure</option>
                <option>Makeup</option>
                <option>Bridal Package</option>
              </select>

              <input type="date" required />
            </div>

            <select defaultValue="" required>
              <option value="" disabled>Preferred Time</option>
              <option>10:00 AM</option>
              <option>12:00 PM</option>
              <option>2:00 PM</option>
              <option>4:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
            </select>

            <textarea
              rows="4"
              placeholder="Anything you'd like us to know?"
            ></textarea>

            <button type="submit" className="primary-button">
  Request Appointment
</button>

{submitted && (
  <p className="success-message">
    ✓ Thank you! Your appointment request has been received.
  </p>
)}

<small>
  Demo website — appointment form is for presentation purposes.
</small>
          </form>
        </section>


        {/* CONTACT */}
        <section className="contact section" id="contact">
          <div>
            <p className="section-label">COME VISIT US</p>

            <h2>
              Your next glow
              <span> starts here.</span>
            </h2>
          </div>

          <div className="contact-details">
            <div>
              <strong>Location</strong>
              <p>123 Fashion Street, Pune, Maharashtra</p>
            </div>

            <div>
              <strong>Email</strong>
              <p>hello@luxeglow.in</p>
            </div>

            <div>
              <strong>Phone</strong>
              <p>+91 98765 43210</p>
            </div>
          </div>
        </section>

      </main>


      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <div>
            <a href="#home" className="logo">LuxeGlow</a>

            <p>
              Beauty, confidence, and a little time
              just for you.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 LuxeGlow Salon. Demo project by Lakshita.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;