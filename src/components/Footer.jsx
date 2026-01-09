import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
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
            
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
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

  <a
    href="tel:+917795325616"
    className="footer-contact"
  >
    <Phone size={16} /> +91 779532 5616
  </a>

  <a
    href="mailto:bgchimneymart1@gmail.com"
    className="footer-contact"
  >
    <Mail size={16} /> bgchimneymart1@gmail.com
  </a>

  <a
    href="https://maps.app.goo.gl/e73JUUM7EzAihWqK6?g_st=awb"
    target="_blank"
    rel="noopener noreferrer"
    className="footer-contact"
  >
    <MapPin size={78} />B.G. CHIMNEY MART
# 225/1, Ground Floor, Shivaramaiah Layout
H.B.R. Layout, 3rd Block, Kalyan Nagar Post,
Bengaluru - 560 043.
  </a>

          <div className="footer-socials">
          <a href="https://www.instagram.com/bgchimneymartbengaluru?igsh=aXd3azBpeXg4bzdy"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Instagram size={18} />
          </a>

          <a href="https://www.facebook.com/bgchimneymarbengaluru?rdid=1HqqBfnCum8Pjax0&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17tSXGduCd%2F#"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Facebook size={18} />
          </a>

          <a href="https://www.youtube.com/@bgchimneymart-qn4qw"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Youtube size={18} />
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