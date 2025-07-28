"use client";
import React, { useState } from "react";

const Products = ({ products, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("Props Products --> ", products);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-1 md:px-8">
        <h2 className="text-2xl md:text-4xl text-gray-800 mb-8 px-1">
          {title}
        </h2>
        <div className="relative">
          <div className="flex overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-1/4 flex-shrink-0 px-2">
                  <div className="bg-[#F2F4F6] rounded-lg shadow-md p-4 border border-gray-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-700">
                      {product.title}
                    </h3>
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

export default Products;
