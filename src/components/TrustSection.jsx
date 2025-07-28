import React from 'react';

const TrustSection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 px-4 rounded-lg shadow-lg max-w-[1200px] mx-auto">
      <div className="my-5 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by over 6K+ customers</h2>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm md:text-base">Premium Products</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm0 2c-2.209 0-4 1.791-4 4v1h8v-1c0-2.209-1.791-4-4-4z" />
              </svg>
            </div>
            <span className="text-sm md:text-base">4000+ Google Review</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <span className="text-sm md:text-base">Delivery Across India</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;