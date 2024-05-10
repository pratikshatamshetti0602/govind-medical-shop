import React, { useState } from 'react';
import Header from "../components/Header";
import SecondaryHeader from "../components/SecondaryHeader";
import FeatureSlider from "../components/FeatureSlider";
import HeroCarousel from "../components/HeroCarousel";
import CategorySlider from "../components/CategorySlider";
import ProductsOverview from "../components/ProductsOverview";
import Footer from "../components/Footer";

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <div className="home_page">
      <Header />
      <SecondaryHeader setFilteredProducts={setFilteredProducts} />
      <FeatureSlider />
      <HeroCarousel />
      <CategorySlider />
      <ProductsOverview filteredProducts={filteredProducts} />
      <Footer />
    </div>
  );
}

