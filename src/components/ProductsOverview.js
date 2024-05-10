import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

// Import product images
import Product1 from "../images/product1.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import Product4 from "../images/product4.jpg";
import Product5 from "../images/product5.jpg";
import Product6 from "../images/product6.jpg";

// Create an array of product data
const productData = [
  { id: 1, image: Product1, title: "Paracetamol", description: "This is Tablet." ,price: 10},
  { id: 2, image: Product2, title: "Crosin", description: "This is Capsule." ,price: 10},
  { id: 3, image: Product3, title: "Paracetamol", description: "This is Tablet." ,price: 10},
  { id: 4, image: Product4, title: "Crosin", description: "This is Capsule." ,price: 10},
  { id: 5, image: Product5, title: "Paracetamol", description: "This is Tablet." ,price: 10},
  { id: 1, image: Product1, title: "Paracetamol", description: "This is Tablet." ,price: 10},
  { id: 2, image: Product2, title: "Crosin", description: "This is Capsule.",price: 10 },
  { id: 3, image: Product3, title: "Paracetamol", description: "This is Tablet.",price: 10 },
  { id: 4, image: Product4, title: "Crosin", description: "This is Capsule." ,price: 10},
  { id: 5, image: Product5, title: "Paracetamol", description: "This is Tablet." ,price: 10},
  { id: 6, image: Product6, title: "Crosin", description: "This is Capsule.",price: 10 },
  { id: 2, image: Product2, title: "Crosin", description: "This is Capsule." ,price: 10},
  { id: 3, image: Product3, title: "Paracetamol", description: "This is Tablet." ,price: 10 },
  { id: 4, image: Product4, title: "Crosin", description: "This is Capsule." ,price: 10},
  { id: 5, image: Product5, title: "Paracetamol", description: "This is Tablet." ,price: 10 },
  { id: 6, image: Product6, title: "Crosin", description: "This is Capsule." ,price: 10},
];

// Component to render the product overview
function ProductsOverview() {
  // State to manage search query
  const [searchQuery, setSearchQuery] = useState('');
  // State to manage filtered products
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Effect to filter products based on search query
  useEffect(() => {
    // Convert search query to lowercase
    const query = searchQuery.toLowerCase();
    // Filter products based on title or description containing the search query
    const filtered = productData.filter(product =>
      product.title.toLowerCase().includes(query) || product.description.toLowerCase().includes(query)
    );
    // Update filtered products state
    setFilteredProducts(filtered);
  }, [searchQuery]);

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="products_overview">
      <div className="products_overview_header">
        <h2>Products Overview</h2>
      </div>
      
      <div className="products_overview_container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt="product_image" />
            <div>
              <h3 className="product_title">{product.title}</h3>
              <p className="product_description">{product.description}</p>
              <div className="price-box">
                <span>&#x20B9;</span>{product.price}
              </div>
              <div className="product_actions">
                <div className="add-to-cart-icon-container">
                  <FaShoppingCart />
                </div>
                <Link to={`/product/${product.id}`} className="view-more-button">View More >>> </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsOverview;