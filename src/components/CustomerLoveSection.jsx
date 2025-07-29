"use client";
import React, { useState } from "react";

const CustomerLoveSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    {
      name: "Samuel Varughese",
      text: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft). Value for money and easy to install. Happy with the product.",
    },
    {
      name: "Another Customer",
      text: "Great service and high-quality product. Delivery was on time and installation was a breeze!",
    },
  ];

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Why Customers Love Us?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="bg-gray-100 rounded-lg p-4 shadow-md w-full md:h-[390px] md:w-1/2 lg:w-3/5 relative flex flex-col justify-center">
            <div className="flex items-start md:px-8 md:pb-4">
              <div className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center mr-4 mb-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <div className="text-left flex-1">
                <p className="text-gray-800 text-lg mb-4">
                  {reviews[currentIndex].text}
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-4 md:px-8">
              <p className="text-gray-700 font-bold text-sm md:text-2xl mt-2">
                - {reviews[currentIndex].name}
              </p>
              <button
                onClick={prevReview}
                className="bg-gray-300 text-gray-700 p-2 rounded-full mr-2 hover:bg-gray-400"
              >
                &lt;
              </button>

              <button
                onClick={nextReview}
                className="bg-gray-300 text-gray-700 p-2 rounded-full hover:bg-gray-400"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="bg-[#F3F4F6] rounded-lg p-4 shadow-md w-full md:w-1/2 lg:w-1/4 flex items-center relative">
            <img
              src="https://i.ibb.co/QvYcFtWY/customer-1.jpg"
              alt="Customer"
              className="w-full h-auto rounded-lg object-cover"
            />
            <div className="absolute top-4 right-4">
              <img
                src="https://i.ibb.co/xKsytBjj/Group-395.png"
                alt="JF Logo"
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerLoveSection;
