import React, { useState } from "react";
import "../CSS/ContactUs.css";

const ContactUs = () => {



  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>

        {/* CONTACT DETAILS */}
        <div className="contact-info">
            <p>Reach out to us - we are just a call away. <br /> You can call us on</p>
            <br />
          <p>
             <strong>Mobile:</strong>{" "}
            <a href="tel:+917795325616">+91 7795325616</a>
          </p>
          <div className="sales-numbers">
          <p>Call our Sales Executives</p><br />
          <p>
    <span className="label">Mobile:</span>
    <a href="tel:+917022973011">+91 7022973011</a>
  </p>
  <p>
    <span className="label"></span>
    <a href="tel:+917022973012">+91 7022973012</a>
  </p>
  <p>
    <span className="label"></span>
    <a href="tel:+917022973013">+91 7022973013</a>
  </p>
  <p>
    <span className="label"></span>
    <a href="tel:+917022973014">+91 7022973014</a>
  </p>
  <p>
    <span className="label"></span>
    <a href="tel:+917022973015">+91 7022973015</a>
  </p>
  </div>
          <br />

          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a href="mailto:bgchimneymart1@gmail.com">
              bgchimneymart1@gmail.com
            </a>
          </p>
          <br />

          <p>
            📸 <strong>Instagram:</strong>{" "}
            <a
              href="https://www.instagram.com/bgchimneymartbengaluru?igsh=aXd3azBpeXg4bzdy"
              target="_blank"
              rel="noopener noreferrer"
            >
              @bgchimneymartbengaluru
            </a>
          </p>
          <br />

          <p>
  📍        <strong>Location:</strong>{" "}
            <a href="https://www.google.com/maps/search/?api=1&query=BG+Chimney+Mart+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
            >
            Bengaluru, Karnataka
            </a>
          </p>
        
        </div>
        

        {/* CONTACT FORM */}
        
      </div>
    </div>
  );
};

export default ContactUs;
