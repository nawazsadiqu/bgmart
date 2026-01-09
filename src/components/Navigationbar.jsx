import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navigationbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId) => {
    setMenuOpen(false);

    // If already on home page → just scroll
    if (location.pathname === "/") {
      document
        .getElementById(sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    } 
    // If on brand page → go home first, then scroll
    else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  const navigateAndClose = (path) => {
  setMenuOpen(false);
  navigate(path);
};

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <img
            src="/images/Logo2.png"
            alt="BG Chimney Mart"
            className="nav-logo"
          />

        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`nav-menu ${menuOpen ? "active" : ""}`}>
          <button className="nav-link" onClick={() => handleNavigation("home")}>Home</button>
          <button className="nav-link" onClick={() => handleNavigation("products")}>Best Sellers</button>
          <button className="nav-link" onClick={() => navigateAndClose("/gallery")}>Gallery</button>
          <button className="nav-link" onClick={() => navigateAndClose("/about")}>About Us</button>
          <button className="nav-link" onClick={() => navigateAndClose("/contact-us")}>Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigationbar;
