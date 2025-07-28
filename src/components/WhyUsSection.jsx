import React from "react";
import Button from "./Button";

const WhyUsSection = () => {
  return (
    <div className="w-full py-12 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Us
        </h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="bg-blue-100 rounded-lg p-6 shadow-md text-left md:transform md:translate-y-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.5-6.364A9 9 0 111.5 14.364l.5-.5M10.5 10.5l.5-.5m0 0l-3-3m3 3l3 3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Unmatched Durability with Corrosion-Free Technology
            </h3>
            <p className="text-gray-600">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating,
              ensuring superior resistance against rust and corrosion. Paired
              with stainless steel binding wire, our fencing solutions are
              designed to withstand harsh environmental conditions, offering
              longevity and reliability.
            </p>
          </div>
          <div className="bg-blue-600 rounded-lg p-6 shadow-md text-white text-left">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-6-6v1z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-200">
              At JF Products, customer satisfaction is paramount. We pride
              ourselves on delivering timely services, maintaining transparent
              communication, and ensuring a seamless purchasing experience. Our
              commitment to excellence is reflected in the positive feedback
              from our valued clients.
            </p>
          </div>
          <div className="bg-blue-100 rounded-lg p-6 shadow-md text-left md:transform md:translate-y-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Innovative and Diverse Product Range
            </h3>
            <p className="text-gray-600">
              We offer a wide array of fencing solutions, including Polyhex
              Mesh, Australian Trellis, and GI Poultry Mesh, catering to various
              needs from agricultural to residential applications. Our products
              combine functionality with aesthetic appeal, ensuring both
              security and style.
            </p>
          </div>
        </div>
        <div className="p-5">
          <Button text="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default WhyUsSection;
