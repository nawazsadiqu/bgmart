import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import BrandsCarousel from "./components/BrandsCarousel";
import BrandProducts from "./components/BrandProducts";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Gallery from "./pages/Gallery";
import "./CSS/App.css";
import ContactUs from "./components/ContactUs";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        document
          .getElementById(location.state.scrollTo)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  const handleWhatsAppChat = () => {
    const phoneNumber = "917795325616"; // country code + number (NO +)
    const message = "Hello, I am interested in your products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleContactClick = () => {
  window.location.href = "tel:+917795325616";
};

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/17tSXGduCd/', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/bgchimneymartbengaluru?igsh=aXd3azBpeXg4bzdy', '_blank');
  };

  const handleYouTubeClick = () => {
  window.open('https://youtube.com/@bgchimneymart-qn4qw?si=gx5oTbSNHwKn0y-w', '_blank');
  };

  const [sidebarVisible, setSidebarVisible] = useState(true);


  return (
    <div className="app-wrapper">
      <Navigationbar />

      {/* Social Media Sidebar */}
      {/* <div className={`social-sidebar ${sidebarVisible ? "" : "hidden"}`}>
  <button 
    className="social-link contact-us" 
    onClick={handleContactClick}
  >
    <span className="arrow">→</span>
    <span className="text">Contact Us</span>
  </button>

  <button className="social-link facebook" onClick={handleFacebookClick}>
    <Facebook size={22} />
  </button>

  <button className="social-link instagram" onClick={handleInstagramClick}>
    <Instagram size={22} />
  </button>

  <button className="social-link youtube" onClick={handleYouTubeClick}>
    <Youtube size={22} />
  </button>
</div> */}


<div className={`social-sidebar ${sidebarVisible ? "show" : "hide"}`}>
  <button
    className="sidebar-toggle"
    onClick={() => setSidebarVisible(!sidebarVisible)}
  >
    {sidebarVisible ? "❮" : "❯"}
  </button>

  <button className="social-link contact-us" onClick={handleContactClick}>
    Contact
  </button>

  <button className="social-link facebook" onClick={handleFacebookClick}>
    <i className="fab fa-facebook-f"></i>
  </button>

  <button className="social-link instagram" onClick={handleInstagramClick}>
    <i className="fab fa-instagram"></i>
  </button>
</div>


<button
  className="sidebar-toggle"
  onClick={() => setSidebarVisible(!sidebarVisible)}
  aria-label="Toggle Sidebar"
>
  {sidebarVisible ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
</button>

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home"><HomePage /></section>
                <section id="brands"><BrandsCarousel /></section>
                <section id="products"><Products /></section>
                <section id="contact"><Footer /></section>
              </>
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/brands/:brandName" element={<BrandProducts />} />
        </Routes>
      </main>

      <button
        className="chat-button-fixed"
        onClick={handleWhatsAppChat}
      >
        Chat Now
      </button>
    </div>
  );
};

export default App;