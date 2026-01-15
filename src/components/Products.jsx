import React from "react";
import "../CSS/Products.css";

const products = [
  {
    id: 1,
    name: "Kitchen Chimneys",
    image: "/images/bosch_chimney.png",
  },
  {
    id: 2,
    name: "Built-in Hob",
    image: "/images/Kitchen-Hob.jpg",
  },
  {
    id: 3,
    name: "Built-in Oven",
    image: "/images/builtin-oven.jpg",
  },
  {
    id: 4,
    name: "Built-in Induction Hobs ",
    image: "/images/induction-hobs.jpg",
  },
  {
    id: 5,
    name: "Cooking Range",
    image: "/images/cooking-range.jpg",
  },
  {
    id: 6,
    name: "Cook Top",
    image: "/images/cooktop.jpg",
  },
  {
    id: 7,
    name: "Built-in Coffee Machine",
    image: "/images/builtin-coffee.jpeg",
  },
  {
    id: 8,
    name: "Built-in Dish Washer",
    image: "/images/builtin-dish.jpg",
  },
  {
    id: 9,
    name: "Built-in Refrigerator",
    image: "/images/bultin-fridge.jpg",
  },
  {
    id: 10,
    name: "DishWashers",
    image: "/images/dish1.jpg",
  },
  {
    id: 11,
    name: "RO Water Purifier",
    image: "/images/rowater-purifier.png",
  },
  {
    id: 12,
    name: "Washing Machine",
    image: "/images/washingmachine.jpg",
  },
  {
    id: 13,
    name: "Refrigerator",
    image: "/images/refrigerator.jpg",
  },
  {
    id: 14,
    name: "Water Heater",
    image: "/images/heater.jpg",
  },
];

const whatsappNumber = "+917795325616"; 

const Products = () => {
 return (
    <div className="products-page">
      <h1 className="products-title">Best Sellers</h1>

      <div className="products-grid">
        {products.map((product) => (
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello! I'm interested in the "${product.name}"`}
            target="_blank"
            rel="noopener noreferrer"
            className="product-card-link"
            key={product.id}
          >
            <div className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3>{product.name}</h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Products;
