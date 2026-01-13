// Testimonials.jsx
import React, { useRef } from "react";
import "../CSS/Testimonials.css";

const Testimonials = () => {

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
        "I recently renovated my home I was looking for a one shop where in u buy all the appliances. Lucky enough to find BG Chimney Mart. To be very specific I had been to Girihas, Relance Digital, Chroma but was not satisfied with how they treat customer very low and no proper response. But when I went to BG Chimney Mart I was happy they had all the products which I wanted.. it’s one stop solutions for all appliances.. sharing the glimpses of the products I bought.: steam oven from Hafele, Chimney from Bosch, Hob from Asko, undercounter purifier from AO Smith, Faucet and sink from Hafele, AC ‘ S from LG, Bosch Mixer, Kettle From Hafele, and finally a refrigerator from Samsung.. I like the sales person Rani she is so friendly. She also helped for the installation and after sales service. Please visit the store it’s the worth place ."
    },
    {
      id: 3,
      name: "Aditya Kini",
      avatar: "/images/rev3.jpeg",
      date: "1 month ago",
      rating: 5,
      text:
        "Recently Purchased lots of appliances for our new home and they have a wide selection , the sales team is also very enthusiastic and forthcoming . They have good understanding of the products they are selling , they follow up multiple times to ensure you are kept informed on the developments with order delivery etc, I was even called multiple times to check if the installation team showed up , their pricing is competitive, they try to match the price of the lowest quote as well. I had one Mr. Murthy who was dealing with me and this review is purely based on my pleasant experience interacting with him , i did not speak to anyone else but when i walked into the store they all were carrying a welcoming smile."
    },
    {
      id: 4,
      name: "Naghabhushana Mk",
      avatar: "/images/rev1.jpeg",
      date: "2 weeks ago",
      rating: 5,
      text:
        "Household items of all leading brands are available for display in this show room.   Manger Murthy is a very nice person and give details about every item. Sales after service is also good. They offer very competitive prices. It's my favorite shop."
    },
    {
      id: 5,
      name: "Neeraja S",
      avatar: "/images/rev1.jpeg",
      date: "3 months ago",
      rating: 5,
      text:
        "We had chosen BG Chimney Mart for our appliances for our new home.We had visited more stores in the vicinity and found BG Mart a comprehensive store with varied essential appliances and giving competitive rates for customers.We had purchased our Kitchen hob,chimney, geysers,RO water unit."
    },
    {
      id: 6,
      name: "Ravishankar mr",
      avatar: "/images/rev2.jpeg",
      date: "3 weeks ago",
      rating: 5,
      text:
        "I visited and purchased water purifier. The Store was very nice and all displays there well explained and giving good service &  parking also there kindly visit any home needs."
    },
    
  ];

  const companyData = {
    name: "BG CHIMNEY MART",
    logo: "/images/brandlogo.jpeg",
    rating: 4.9,
    reviewCount: 54
  };

  /* ⭐ FIX 1: DEFINE renderStars */
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? "filled" : "empty"}`}
      >
        ★
      </span>
    ));
  };

  const GoogleIcon = () => (
    <svg className="google-icon" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );

  /* ⭐ FIX 2: ATTACH ref TO VIEWPORT */
  const viewportRef = useRef(null);

  const scrollNext = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const card = viewport.querySelector(".testimonial-card");
    if (!card) return;

    const gap = 20;
    viewport.scrollBy({
      left: card.offsetWidth + gap,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const card = viewport.querySelector(".testimonial-card");
    if (!card) return;

    const gap = 20;
    viewport.scrollBy({
      left: -(card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section className="motivation-section">
      <h2 className="section-title">What our customers says </h2>

      <div className="reviews-container">

        {/* LEFT COMPANY CARD */}
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

        {/* RIGHT SLIDER */}
        <div className="testimonials-slider">

          <button className="slider-arrow left" onClick={scrollPrev}>
            ‹
          </button>

          <div className="testimonials-viewport" ref={viewportRef}>
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

          <button className="slider-arrow right" onClick={scrollNext}>
            ›
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;
