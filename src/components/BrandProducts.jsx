import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../CSS/BrandProducts.css";


const brandProductsData = {
  bosch: [
    {
      id: 1, name: "Bosch Chimney", image: "/images/bosch_chimney.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."
    },
    {
      id: 2, name: "Bosch Coffee Machine ", image: "/images/bosch-coffeemachine.png", price: "₹1,10,000", description: "Top-load washing machine with advanced cleaning technology."
    },
    {
      id: 3, name: "Dish washer", image: "/images/bosch-dishwasher.png", price: "₹93,490", description: "Top-load washing machine with advanced cleaning technology."
    },
    {
      id: 4, name: "Hobs", image: "/images/bosch-hobs.png", price: "₹44,490", description: "Top-load washing machine with advanced cleaning technology."
    },
    {
      id: 5, name: "Refrigerator", image: "/images/bosch-refrigerator.png", price: "₹1,79,160", description: "Top-load washing machine with advanced cleaning technology."
    },
    {
      id: 6, name: "Oven", image: "/images/bosch-oven.png", price: "₹1,79,990", description: "Top-load washing machine with advanced cleaning technology."
    },
  ],
  sujata: [
    {
      id: 1, name: "Sujata Dynamix ", image: "/images/sujata-dynamix.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    },
    {
      id: 2, name: "Sujata FrootMix", image: "/images/sujata-frootmix.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    },
    {
      id: 3, name: "Sujata MegaMix", image: "/images/sujata-megamix.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    },
    {
      id: 4, name: "Sujata MultiMix", image: "/images/sujata-multimix.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    },
    {
      id: 5, name: "Sujata Powermatic", image: "/images/sujata-powermatic.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    },
    {
      id: 6, name: "Sujata Powermatic Plus", image: "/images/sujata-powermaticplus.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    },
    {
      id: 7, name: "Sujata SuperMix", image: "/images/sujata-supermix.jpg", price: "₹5,999", description: "Powerful mixer grinder with multiple speed settings."
    }

  ],
  weber: [
    {
      id: 1, name: "Weber Q Gas Grill", image: "/images/weberqgasgrill.avif", price: "₹65,595", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 2, name: "Weber Q Electric Grill", image: "/images/weberqelectric.avif", price: "₹39,995", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 3, name: "Compact Kettle Charcoal Grill", image: "/images/webercomp47.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 4, name: "Compact Kettle Charcoal Grill", image: "/images/webercomp57.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 5, name: "Go-Any Where Charcoal Grill", image: "/images/webergoany.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 6, name: "Smokey Joe Premium Charcoal Grill", image: "/images/webersmokeyjoe.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 7, name: "Jumbo Joe Charcoal Grill", image: "/images/weberjumbo.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 8, name: "Spirit SP-335 Gas Grill", image: "/images/weberspirit.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    },
    {
      id: 9, name: "Genesis E-435 GBS Gas Grill", image: "/images/webergenesis.avif", price: "₹15,500", description: "Portable BBQ grill for outdoor cooking and events."
    }
  ],
  futura: [
    {
     id: 1, name: "Nano Button", image: "/images/futura-nano.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 2, name: "FS 3018 FRS", image: "/images/futura-fs.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    }
  ],
  aosmith: [
    {
     id: 1, name: "Pro Planet-P7", image: "/images/aoproplanet.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 2, name: "X9 Water purifier", image: "/images/aox9.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 3, name: "Z2 Pro", image: "/images/aoz2pro.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 4, name: "Intelli-UV-Pro", image: "/images/aoinntellipro.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
  ],
  carysil: [
    {
     id: 1, name: "Waltz 610", image: "/images/carysil-waltz610.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 2, name: "Waltz 780", image: "/images/carysil-waltz780.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 3, name: "Crystal  2118", image: "/images/carysil-crystal2118.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 4, name: "Crystal 3618", image: "/images/carysil-crystal3618.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 5, name: "ASL 2201", image: "/images/carysil-2201.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 6, name: "ALA 2301", image: "/images/carysil-ala2301.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 7, name: "ALA 05107", image: "/images/carysil-ala05107.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    }
  ],
  orient: [
    {
     id: 1, name: "Eleganza 1", image: "/images/orient-eleganza1.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 2, name: "Eleganza 2", image: "/images/orient-eleganza2.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 3, name: "Aeroslim IoT & Remote", image: "/images/orient-aeroslim.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 4, name: "Subaris Royal with remote", image: "/images/orient-subaris.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 5, name: "Ecotech Prime", image: "/images/orient-ecotechprime.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 7, name: "Wall 47 Trendz High Speed", image: "/images/orient-wall47trendz.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 8, name: "Zippy Pro", image: "/images/Orient-zippyro.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
    {
     id: 9, name: "Desk 26", image: "/images/orient-desk26.png", price: "₹12,500", description: "High-efficiency kitchen chimney with modern design."   
    },
  ]
};

const BrandProducts = () => {
  const { brandName } = useParams();
  const products = brandProductsData[brandName.toLowerCase()] || [];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="brand-products-page">
      <h1 className="brand-products-title">
        {brandName.toUpperCase()} Products
      </h1>

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => setSelectedImage(product.image)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>

      {/* 🔥 IMAGE POPUP */}
      {selectedImage && (
        <div className="image-modal" onClick={() => setSelectedImage(null)}>
          <span className="close-btn">&times;</span>
          <img
            src={selectedImage}
            alt="Full View"
            className="modal-image"
          />
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
