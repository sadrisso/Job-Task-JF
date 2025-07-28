'use client'
import React, { useState } from 'react';

const AgriculturalProducts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = [
    {
      title: "JF Colbed Wire-21D 0681",
      image: "https://via.placeholder.com/200x200?text=JF+Colbed+Wire",
      price: "₱4,950.00",
      button: "Shop Now",
    },
    {
      title: "FGC Beesthe Tonding 80s",
      image: "https://via.placeholder.com/200x200?text=FGC+Beesthe+Tonding",
      price: "₱4,950.00 - ₱18,850.00",
      button: "Shop Now",
    },
    {
      title: "GI Footly Mesh",
      image: "https://via.placeholder.com/200x200?text=GI+Footly+Mesh",
      price: "₱1,260.00 - ₱10,750.00",
      button: "Shop Now",
    },
    {
      title: "JF Bluelink Mesh",
      image: "https://via.placeholder.com/200x200?text=JF+Bluelink+Mesh",
      price: "₱3,067.50 - ₱6,325.50",
      button: "Shop Now",
    },
    {
      title: "JF Colbed Wire-21D 0681",
      image: "https://via.placeholder.com/200x200?text=JF+Colbed+Wire",
      price: "₱4,950.00",
      button: "Shop Now",
    },
    {
      title: "FGC Beesthe Tonding 80s",
      image: "https://via.placeholder.com/200x200?text=FGC+Beesthe+Tonding",
      price: "₱4,950.00 - ₱18,850.00",
      button: "Shop Now",
    },
    {
      title: "GI Footly Mesh",
      image: "https://via.placeholder.com/200x200?text=GI+Footly+Mesh",
      price: "₱1,260.00 - ₱10,750.00",
      button: "Shop Now",
    },
    {
      title: "JF Bluelink Mesh",
      image: "https://via.placeholder.com/200x200?text=JF+Bluelink+Mesh",
      price: "₱3,067.50 - ₱6,325.50",
      button: "Shop Now",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Agricultural Products</h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
              {products.map((product, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-2">
                  <div className="bg-[#F2F4F6] rounded-lg shadow-md p-4 border border-gray-200 text-center">
                    <img src={product.image} alt={product.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-lg font-semibold text-gray-700">{product.title}</h3>
                    <p className="text-gray-500 mb-4">{product.price}</p>
                    <button className="bg-[#B0DD1D] px-2 md:px-4 py-1 md:py-2 rounded-lg hover:bg-green-400 text-xs">
                      {product.button}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-400"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-400"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default AgriculturalProducts;