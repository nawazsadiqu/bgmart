// Testimonials.jsx
import React, { useState, useRef } from "react";
import "../CSS/Testimonials.css";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Abhimanyu Rajemane",
      avatar: "/images/rev3.jpeg",
      date: "4 months ago",
      rating: 5,
      text:
        "I had a great experience with this shop. Shoaib helped me choose the right products for my kitchen – very knowledgeable and patient. Installation was hassle-free. Highly recommended!"
    },
    {
      id: 2,
      name: "Radhika S",
      avatar: "/images/rev2.jpeg",
      date: "4 months ago",
      rating: 5,
      text:
        "One stop solution for all appliances. Excellent staff support, pricing, and installation. Much better experience compared to large retail chains."
    },
    {
      id: 3,
      name: "Aditya Kini",
      avatar: "/images/rev1.jpeg",
      date: "1 month ago",
      rating: 5,
      text:
        "Wide selection, enthusiastic sales team, competitive pricing, and great follow-ups. Very pleasant buying experience."
    },
    {
      id: 4,
      name: "Naghabhushana Mk",
      avatar: "/images/rev3.jpeg",
      date: "2 weeks ago",
      rating: 5,
      text:
        "All leading brands available. Manager Murthy explained everything clearly. After-sales service is excellent."
    }
  ];

  const companyData = {
    name: "BG CHIMNEY MART",
    logo: "/images/brandlogo.jpeg",
    rating: 4.9,
    reviewCount: 54
  };

  /* ========= SLIDER LOGIC (FIXED) ========= */
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev >= testimonials.length - 3 ? 0 : prev + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev <= 0 ? testimonials.length - 3 : prev - 1
    );
  };

  const goToSlide = (index) => setCurrentSlide(index);

  const renderStars = (rating) =>
    [...Array(5)].map((_, i) => (
      <span key={i} className={`star ${i < rating ? "filled" : "empty"}`}>
        ★
      </span>
    ));

  const GoogleIcon = () => (
    <svg className="google-icon" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  const viewportRef = useRef(null);

const scrollNext = () => {
  const viewport = viewportRef.current;
  if (viewport) {
    const cardWidth = viewport.firstChild.offsetWidth + 10; // 10 = gap
    viewport.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
};

const scrollPrev = () => {
  const viewport = viewportRef.current;
  if (viewport) {
    const cardWidth = viewport.firstChild.offsetWidth + 10;
    viewport.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }
};

  return (
    <section className="motivation-section">
      <h2 className="section-title">Our Motivation</h2>

      <div className="reviews-container">
        {/* ===== LEFT FIXED COMPANY CARD ===== */}
        <div className="company-card">
          <div className="company-logo">
            <img src={companyData.logo} alt="Company Logo" />
          </div>
          <h3 className="company-name">{companyData.name}</h3>

          <div className="rating">
            <span className="rating-number">{companyData.rating}</span>
            <div className="stars">{renderStars(5)}</div>
          </div>

          <p className="review-count">
            Based on {companyData.reviewCount} reviews
          </p>

          <button
            className="review-button"
            onClick={() =>
              window.open(
                "https://search.google.com/local/writereview?placeid=ChIJ83t-NCIZrjsRhZ2NxFMFwRk",
                "_blank"
              )
            }
          >
            Review us on Google
          </button>
        </div>

        {/* ===== RIGHT FIXED WIDTH CAROUSEL ===== */}
       <div className="testimonials-slider">
  <button className="slider-arrow left" onClick={previousSlide}>
    ‹
  </button>

 <div className="testimonials-viewport">
  {testimonials.map((t) => (
    <div key={t.id} className="testimonial-card">
      <div className="testimonial-header">
        <div className="reviewer-avatar">
          <img src={t.avatar} alt={t.name} />
        </div>
        <div className="reviewer-info">
          <div className="reviewer-name">{t.name}</div>
          <div className="review-date">{t.date}</div>
        </div>
        <GoogleIcon />
      </div>

      <div className="review-stars">{renderStars(t.rating)}</div>
      <p className="review-text">{t.text}</p>
    </div>
  ))}
</div>


  <button className="slider-arrow right" onClick={nextSlide}>
    ›
  </button>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
