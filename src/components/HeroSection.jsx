"use client";
import React, { useState } from "react";
import Button from "./Button";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    {
      title: "Italian Durability",
      image: "https://i.ibb.co/r2PhW1DJ/Group-507.png",
      description: "Durable grass design",
      button: "Shop Now",
    },
    {
      title: "JF Privezy Grass Wall",
      image: "https://i.ibb.co/r2PhW1DJ/Group-507.png",
      description: "The Perfect Blend Of Greenery",
      button: "Shop Now",
    },
    {
      title: "Outdoor View",
      image: "https://i.ibb.co/r2PhW1DJ/Group-507.png",
      description: "Natural outdoor setting",
      button: "Shop Now",
    },
    {
      title: "Italian Durability",
      image: "https://i.ibb.co/r2PhW1DJ/Group-507.png",
      description: "Durable grass design",
      button: "Shop Now",
    },
    {
      title: "Italian Durability",
      image: "https://i.ibb.co/r2PhW1DJ/Group-507.png",
      description: "Durable grass design",
      button: "Shop Now",
    },
    {
      title: "Italian Durability",
      image: "https://i.ibb.co/r2PhW1DJ/Group-507.png",
      description: "Durable grass design",
      button: "Shop Now",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  return (
    <div className="w-full bg-gray-100 md:py-4 py-2 md:px-4">
      <div className="mx-auto">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
          >
            {cards.map((card, index) => (
              <div key={index} className="w-2/3 h-[400px] md:h-[500px] flex-shrink-0 px-2 bg-[#F2F4F6]">
                <div className="bg-white rounded-lg shadow-lg p-2 md:p-6 flex border h-[400] md:h-[500px] flex-col md:flex-row justify-center items-center border-gray-200">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="md:w-1/2 md:h-96 object-cover rounded-3xl"
                  />
                  <div className="md:w-1/2 p-4 text-center flex flex-col justify-center">
                    <h2 className="text-xl md:text-5xl mb-2">{card.title}</h2>
                    <p className="text-gray-600 mb-4">{card.description}</p>
                    <div className="text-left p-4">
                      {card.button && (
                        <Button text={card?.button}/>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
          >
            &lt;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
