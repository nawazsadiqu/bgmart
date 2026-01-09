import React from "react";
import "../CSS/Gallery.css";

const images = [
  "/images/shop1.jpg",
  "/images/shop2.jpg",
  "/images/shop3.jpg",
  "/images/shop4.jpg",
];

const Gallery = () => {
  return (
    <div className="gallery-page">
      <h1 className="gallery-title">Our Gallery</h1>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img} alt={`Shop ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
