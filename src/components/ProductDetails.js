import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

// Import your product images
import Product1 from "../images/product4.jpg";
import Product2 from "../images/product2.jpg";
import Product3 from "../images/product3.jpg";
import Product4 from "../images/product4.jpg";
import Product5 from "../images/product5.jpg";
import Product6 from "../images/product6.jpg";


const ProductDetails = () => {
  const { productId } = useParams();
  
  // Assuming productOverviewItems is available here
  const productOverviewItems = [
    // Define your product details here
    {  id: 1,image: Product1, title: "Paracetamol", description: "This is Tablet." },
    {  id: 2,image: Product2, title: "Crosin", description: "This is Capsule." },
    {  id: 3,image: Product3, title: "Paracetamol", description: "This is Tablet." },
    { id: 4, image: Product4, title: "Crosin", description: "This is Capsule." },
    {  id: 5,image: Product5, title: "Paracetamol", description: "This is Tablet." },
    {  id: 1,image: Product1, title: "Paracetamol", description: "This is Tablet." },
    {  id: 2,image: Product2, title: "Crosin", description: "This is Capsule." },
    {  id: 3,image: Product3, title: "Paracetamol", description: "This is Tablet." },
    {  id: 4,image: Product4, title: "Crosin", description: "This is Capsule." },
    {  id: 5,image: Product5, title: "Paracetamol", description: "This is Tablet." },
    { id: 6, image: Product6, title: "Crosin", description: "This is Capsule." },
    { id: 2,image: Product2, title: "Crosin", description: "This is Capsule." },
    {id: 3, image: Product3, title: "Paracetamol", description: "This is Tablet." },
    { id: 4,image: Product4, title: "Crosin", description: "This is Capsule." },
    { id: 5,image: Product5, title: "Paracetamol", description: "This is Tablet." },
    { id: 6,image: Product6, title: "Crosin", description: "This is Capsule." },
  ];

  // Find the product details based on the productId
  const product = productOverviewItems.find(product => product.id === parseInt(productId));

  // Quantity state and functions
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity(prevQuantity => prevQuantity + 1);
  const handleDecrement = () => setQuantity(prevQuantity => Math.max(1, prevQuantity - 1));

  // Add to cart function
  const addToCart = () => {
    // Implement your add to cart functionality here
    console.log(`Added ${quantity} ${product.title} to cart.`);
  };

  // Wishlist function
  const addToWishlist = () => {
    // Implement your add to wishlist functionality here
    console.log(`Added ${product.title} to wishlist.`);
  };

  return (
    <div className="product-details-container">
      <h2>Product Details</h2>
      {product && (
        <div className="product-details">
          <div className="product-image-container">
            <img src={product.image} alt="product_image" />
          </div>
          <div className="product-info">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            {/* Add quantity selector */}
            <div className="quantity-selector">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            {/* Add buttons */}
            <button className="add-to-cart-btn" onClick={addToCart}>Add to Cart</button>
            <button className="wishlist-btn" onClick={addToWishlist}>Add to Wishlist</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
