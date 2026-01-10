import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../CSS/Brand.css'
import { useNavigate } from "react-router-dom";


const BrandsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const MIN_SWIPE_DISTANCE = 50;


  // Brand data - easily add or modify brands here
  const brands = [
    {
      id: 1,
      name: 'BOSCH',
      slug: 'bosch',
      logo: '/images/Bosch-Logo1.jpg',
      description: 'German Engineering Excellence',
      image: '/images/bosch-banner.webp'
    },
    {
      id: 2,
      name: 'SUJATA',
      slug: 'sujata',
      logo: '/images/sujata-logo.png',
      description: "Life's Good with Quality Appliances",
      image: '/images/sujata-banner.jpg'
    },
    {
      id: 3,
      name: 'WEBER',
      slug: 'weber',
      logo: '/images/weber-logo.png',
      description: ' Weber Traveler Will Follow',
      image: '/images/weber-banner.jpg'
    },
    {
      id: 4,
      name: 'FUTURA',
      slug: 'futura',
      logo: '/images/futura-logo.png',
      description: 'Sinks that Think',
      image: '/images/futura-banner.jpg'
    },
    {
      id: 5,
      name: 'AO Smith',
      slug: 'aosmith',
      logo: '/images/aosmith-logo.png',
      description: 'Innovation has a name',
      image: '/images/aosmith-banner.jpeg'
    },
    {
      id: 6,
      name: 'CARYSIL',
      slug: 'carysil',
      logo: '/images/carysil.png',
      description: 'German Engineered',
      image: '/images/carysil-banner.png'
    },
    {
      id: 7,
      name: 'ORIENT',
      slug: 'orient',
      logo: '/images/orient-logo.png',
      description: 'Products that are just right for you',
      image: '/images/orient-banner.jpg'
    },
    {
      id: 8,
      name: 'FABER',
      slug: 'faber',
      logo: '/images/faber-logo.png',
      description: "Frank's Air Expert",
      image: '/images/faber-banner.jpg'
    },
    {
      id: 9,
      name: 'KAFF',
      slug: 'kaff',
      logo: '/images/kaff-logo.jfif',
      description: "Royal Kitchen World",
      image: '/images/kaff-banner.webp'
    },
    {
      id: 10,
      name: 'HINDWARE',
      slug: 'hindware',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 11,
      name: 'ZERO B',
      slug: 'zerob',
      logo: '/images/zerob-logo.jpeg',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 12,
      name: 'BLANCO',
      slug: 'blanco',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/blanco-banner.jpeg'
    },
    {
      id: 13,
      name: 'FRANKE',
      slug: 'franke',
      logo: '/images/franke-logo.jpeg',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 14,
      name: 'KITCHEN AID',
      slug: 'kitchenaid',
      logo: '/images/kitchenaid-logo.jpeg',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 15,
      name: 'DYSON',
      slug: 'dyson',
      logo: '/images/dyson-logo.jpeg',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 16,
      name: 'BLOW HOT',
      slug: 'blowhot',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/blowhot-banner.jpeg'
    },
    {
      id: 17,
      name: 'HAFELE',
      slug: 'blanco',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/hafele-banner.jpeg'
    },
    {
      id: 18,
      name: 'KENT',
      slug: 'kent',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 19,
      name: 'ATOMBERG',
      slug: 'atomberg',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    },
    {
      id: 20,
      name: 'PRESTIGE',
      slug: 'prestige',
      logo: '/images/hindware-logo.png',
      description: 'Home innovation limited',
      image: '/images/hindware-banner.png'
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    


    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % brands.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + brands.length) % brands.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Get visible brands for carousel
  const getVisibleBrands = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + brands.length) % brands.length;
      visible.push({ ...brands[index], offset: i });
    }
    return visible;
  };

  const onTouchStart = (e) => {
  setIsAutoPlaying(false);
  setTouchEndX(null);
  setTouchStartX(e.targetTouches[0].clientX);
};

const onTouchMove = (e) => {
  setTouchEndX(e.targetTouches[0].clientX);
};

const onTouchEnd = () => {
  if (!touchStartX || !touchEndX) return;

  const distance = touchStartX - touchEndX;

  if (distance > MIN_SWIPE_DISTANCE) {
    nextSlide(); // swipe left → next
  }

  if (distance < -MIN_SWIPE_DISTANCE) {
    prevSlide(); // swipe right → prev
  }
};
  
  return (
    <div className="brands-carousel-section">
      <div className="section-header">
        <h2 className="section-title">Our Partner Brands</h2>
        <p className="section-subtitle">Trusted by the world's leading appliance manufacturers</p>
      </div>

      <div className="carousel-wrapper">
        {/* Main Brand Display */}
        <div className="main-brand-container">
          <div
            className="brand-carousel"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
>
            {getVisibleBrands().map((brand, idx) => (
              <div
                  key={brand.id}
                  className={`brand-card ${brand.offset === 0 ? 'active' : ''}`}
                  style={{
                  transform: `translateX(${brand.offset * 350}px) scale(${brand.offset === 0 ? 1.2 : 0.8})`,
                  opacity: brand.offset === 0 ? 1 : 0.4,
                  zIndex: brand.offset === 0 ? 10 : 1,
                  cursor: "pointer"
                }}
                onClick={() => navigate(`/brands/${brand.slug}`)}
              >

                <div className="brand-logo-container">
                  <img src={brand.logo} alt={brand.name} className="brand-logo" />
                </div>
                <div className="brand-info">
                  <h3 className="brand-name">{brand.name}</h3>
                  <p className="brand-description">{brand.description}</p>
                </div>
                {brand.offset === 0 && (
                  <div className="brand-image-wrapper">
                    <img src={brand.image} alt={brand.name} className="brand-image" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="nav-arrow nav-arrow-left" 
            onClick={prevSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            className="nav-arrow nav-arrow-right" 
            onClick={nextSlide}
            onMouseEnter={() => setIsAutoPlaying(false)}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        
        

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {brands.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      </div>
  )
}

export default BrandsCarousel













































































