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
    name: "Free Standing DishWashers",
    image: "/images/dish1.jpg",
  },
];

const Products = () => {
  return (
    <div className="products-page">
      <h1 className="products-title">Best Sellers</h1>

      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <div className="product-info">
              <h3>{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
