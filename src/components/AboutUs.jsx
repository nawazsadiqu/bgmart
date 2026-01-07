import React from "react";
import "../CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About BG Chimney Mart</h1>

        <p>
          <strong>BG Chimney Mart</strong>, a unit of <strong>Sampurna Enterprises</strong>, was established in <strong>2006 in Bengaluru </strong>with a clear vision—to provide high-quality kitchen solutions that blend performance, innovation, and elegant design.
        </p>

        <p>
          Over the years, BG Chimney Mart has grown into a trusted name in the kitchen appliances industry, specializing in a wide range of chimneys, hobs, sinks, and premium kitchen appliances. Our store is designed to offer customers a complete kitchen experience, showcasing modern appliances that enhance both functionality and aesthetics.
        </p>

        <p>
          We proudly deal in some of the most reputed national and international brands, including <strong>Faber, KAFF, Bosch, Häfele, Hindware, Franke, Carysil, Futura, Kent, AO Smith, and Malta</strong>. Each brand we represent is carefully selected to ensure superior quality, durability, and cutting-edge technology.
        </p>

        <p>With nearly two decades of industry experience, our focus remains on customer satisfaction, expert guidance, and reliable after-sales support. We believe that every kitchen deserves thoughtfully designed appliances that make everyday cooking efficient, comfortable, and enjoyable.</p>

        <p>At BG Chimney Mart, we are committed to delivering excellence, trust, and long-term value—making us a preferred destination for premium kitchen appliance solutions in Bengaluru.</p>

        <div className="about-highlights">
          <div className="highlight-card">
            <h3>✔ Trusted Brands</h3>
            <p>Bosch, Sujata, Weber, AO Smith, Carysil & more</p>
          </div>

          <div className="highlight-card">
            <h3>✔ Expert Support</h3>
            <p>Professional installation & guidance</p>
          </div>

          <div className="highlight-card">
            <h3>✔ Customer First</h3>
            <p>Quality service & long-term support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
