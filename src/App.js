import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProductDetails";// Import ProductDetails component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetails />} /> {/* Define route for product details page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
