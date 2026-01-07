import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin
} from "lucide-react";
import '../CSS/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">BG Chimney Mart</h2>
          <p className="footer-text">
            Dependable electronics and home appliances designed to make everyday
            living effortless and comfortable.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links-row">
        <div className="footer-section">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#stores">Find a Store</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        

        {/* Categories */}
        <div className="footer-section">
          <h3 className="footer-title">Categories</h3>
          <ul className="footer-links">
            <li><a href="#chimneys">Chimneys</a></li>
            <li><a href="#hobtops">Hobtops</a></li>
            <li><a href="#kitchen">Kitchen Appliances</a></li>
            <li><a href="#electronics">Electronics</a></li>
          </ul>
        </div>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-title">Contact</h3>
          <p className="footer-contact">
            <Phone size={16} /> +91 779532 5616
          </p>
          <p className="footer-contact">
            <Mail size={16} /> bgchimneymart1@gmail.com
          </p>
          <p className="footer-contact">
            <MapPin size={16} /> Banglore,India
          </p>

          <div className="footer-socials">
            
           
            <a
              href="https://www.instagram.com/bgchimneymartbengaluru?igsh=aXd3azBpeXg4bzdy"
              target="_blank"
              rel="noopener noreferrer"
            >
             <Instagram size={18} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BG Chimney Mart. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer