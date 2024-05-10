import React, { useState } from 'react';

// Import product images
import Product1 from "../images/product1.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import Product4 from "../images/product4.jpg";
import Product5 from "../images/product5.jpg";
import Product6 from "../images/product6.jpg";

const productData = [
  { image: Product1, title: "Paracetamol", description: "This is Tablet." },
  { image: Product2, title: "Crosin", description: "This is Capsule." },
  { image: Product3, title: "Paracetamol", description: "This is Tablet." },
  { image: Product4, title: "Crosin", description: "This is Capsule." },
  { image: Product5, title: "Paracetamol", description: "This is Tablet." },
  { image: Product1, title: "Paracetamol", description: "This is Tablet." },
  { image: Product2, title: "Crosin", description: "This is Capsule." },
  { image: Product3, title: "Paracetamol", description: "This is Tablet." },
  { image: Product4, title: "Crosin", description: "This is Capsule." },
  { image: Product5, title: "Paracetamol", description: "This is Tablet." },
  { image: Product6, title: "Crosin", description: "This is Capsule." },
  { image: Product2, title: "Crosin", description: "This is Capsule." },
  { image: Product3, title: "Paracetamol", description: "This is Tablet." },
  { image: Product4, title: "Crosin", description: "This is Capsule." },
  { image: Product5, title: "Paracetamol", description: "This is Tablet." },
  { image: Product6, title: "Crosin", description: "This is Capsule." },
];

function SecondaryHeader({ setFilteredProducts }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    
    // Filter products based on the search query
    const filtered = productData.filter(product => {
      const titleMatch = product.title.toLowerCase().includes(query);
      const descriptionMatch = product.description.toLowerCase().includes(query);
      console.log(`Title Match: ${titleMatch}, Description Match: ${descriptionMatch}`);
      return titleMatch || descriptionMatch;
    });
  
    // Log the filtered products
    console.log("Filtered Products:", filtered);
    
    // Update filtered products state
    setFilteredProducts(filtered);
  };

  return (
    <div className="secondary_header">
      <div className="search_bar">
        <input 
          type="text" 
          placeholder="Search Tablets" 
          className="search" 
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <i className="ri-search-line"></i>
        <i className="ri-equalizer-2-fill"></i>
      </div>
    </div>
  );
}

export default SecondaryHeader;