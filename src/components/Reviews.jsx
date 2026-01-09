import React from "react";
import "../CSS/Reviews.css";

const reviewImages = [
  "/images/review3.jpeg",
  "/images/review1.jpeg",
  "/images/review4.jpeg",
  "/images/review2.jpeg",
  "/images/review5.jpeg",
];

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2>

      <div className="reviews-grid">
        {reviewImages.map((img, index) => (
          <div className="review-card" key={index}>
            <img src={img} alt={`Customer review ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
