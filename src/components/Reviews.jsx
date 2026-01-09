import React from "react";
import "../CSS/Reviews.css";

const reviewImages = [
  "/images/review3.jpeg",
  "/images/review1.jpeg",
  "/images/review2.jpeg",
  "/images/review4.jpeg",
  "/images/review5.jpeg",
];

const googleMapsReviewUrl = "https://search.google.com/local/writereview?placeid=ChIJ83t-NCIZrjsRhZ2NxFMFwRk";

const Reviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">What Our Customers Say</h2>
<div className="reviews-grid">
        {reviewImages.map((img, index) => (
          <a
            href={googleMapsReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="review-card-link"
          >
            <div className="review-card">
              <img src={img} alt={`Customer review ${index + 1}`} />
            </div>
          </a>
        ))}
      </div>
    </section>  
  );
};

export default Reviews;
