import React from 'react'
import "./HomePage.css";

const HomePage = () => {
  const openWhatsApp = () => {
    const phoneNumber = "917994673963"; 
    const message = "Hello, I am interested in your products.";
    const whatsappUrl = `https://wa.me/${917994673963 }?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };
  return (
     <div className="hero-section">
        <div className="glow-orb"></div>
        
        <div className="hero-content">
          <h1 className="hero-title">
            Powering Your Home<br />
            Simplifying Your Life
          </h1>
          <p className="hero-subtitle">
            Comfort and Convenience<br />
            At your Doorsteps.
          </p>
          
          <button className="chat-button">
            
            View Our Products
          </button>
        </div>
      </div>
  )
}

export default HomePage