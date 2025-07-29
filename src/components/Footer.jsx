import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#002D63] text-white pt-10">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Join Our JF Products</h2>
          <p className="text-sm mb-4 text-gray-300">
            We’ll tell you about store updates and discounts
          </p>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[477px] bg-[#1E3B5F] rounded-full px-4 py-2 text-white placeholder:text-gray-400 outline-none mb-3"
          />
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="newsletter" />
            <label htmlFor="newsletter" className="text-sm text-gray-300">
              Yes, subscribe me to your newsletter.
            </label>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
            Join Now
          </button>
        </div>

        {/* Information */}
        <div className="flex md:px-[80px] justify-between md:col-span-2">
          <div>
            <h3 className="font-semibold text-lg mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              <li>Home</li>
              <li>Shop</li>
              <li>Our Story</li>
              <li>Blogs</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Helpful</h3>
            <ul className="space-y-2 text-sm">
              <li>FAQs</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>My Account</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#002654] py-6 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo + Branches */}
          <div className="flex items-center gap-4">
            <img
              src="https://i.ibb.co/xKsytBjj/Group-395.png" 
              alt="JF Logo"
              className="w-16 h-16"
            />
            <div>
              <p className="font-semibold">Our Branches</p>
              <p className="text-sm text-gray-300">
                Coimbatore, Chennai, Hyderabad, Goa, Kochi
              </p>
            </div>
          </div>

          {/* Contact Us button */}
          <div>
            <button className="bg-lime-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-lime-500 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Bottom copyright + social */}
      <div className="bg-white text-black py-4 px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          Copyright © 2025 JF Products. All rights reserved
        </p>
        <div className="flex gap-4 text-lg">
          <a
            href="#"
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-gray-100 p-2 rounded-full hover:bg-gray-200"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
