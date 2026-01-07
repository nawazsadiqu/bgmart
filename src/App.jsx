import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navigationbar from "./components/Navigationbar";
import HomePage from "./components/HomePage";
import Products from "./components/Products";
import BrandsCarousel from "./components/BrandsCarousel";
import BrandProducts from "./components/BrandProducts";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import "./CSS/App.css";
import ContactUs from "./components/ContactUs";

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

  return (
    <div className="app-wrapper">
      <Navigationbar />

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
