import React from "react";
import "../CSS/Gallery.css";

const images = [
  "/images/pic1.jpeg",
  "/images/pic2.jpeg",
  "/images/pic3.jpeg",
  "/images/pic4.jpeg",
  "/images/pic5.jpeg",
  "/images/pic6.jpeg",
  "/images/pic7.jpeg",
  "/images/pic8.jpeg",
  "/images/pic9.jpeg",
  "/images/pic10.jpeg",
  "/images/pic11.jpeg",
  "/images/pic12.jpeg",
  "/images/pic13.jpeg",
  "/images/pic14.jpeg",
  "/images/pic15.jpeg",
  "/images/pic16.jpeg",
  "/images/pic17.jpeg",
  "/images/pic18.jpeg",
  "/images/pic19.jpeg",
  "/images/pic20.jpeg",
  "/images/pic21.jpeg",
  "/images/pic22.jpeg",
  "/images/pic23.jpeg",
  "/images/pic24.jpeg",
  "/images/pic25.jpeg",
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
