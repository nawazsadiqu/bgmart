import React, { useState, useEffect } from "react";
import "./HomePage.css";

const images = [
  "/images/Wallpaper1.jpeg",
  "/images/Wallpaper2.jpeg" // Add more images here if needed
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-section">
      {/* Background layers */}
      {images.map((img, index) => (
        <div
          key={index}
          className="hero-bg"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Glow orb */}
      <div className="glow-orb"></div>

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Luxury Kitchen Appliances <br />and Home Appliances
        </h1>
        <p className="hero-subtitle">
          Multi brands like <br /> <b>BOSCH  HAFELE  FABER  KAFF  HINDWARE</b>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
