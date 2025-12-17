"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: "./img1.png",
    text: "DUMMY SLIDE ONE — CELEBRATING SUCCESS & IMPACT",
  },
  {
    image: "./img2.jpeg",
    text: "DUMMY SLIDE TWO — BUILDING FUTURES WITH EDUCATION",
  },
  {
    image: "./img3.jpeg",
    text: "DUMMY SLIDE THREE — TOGETHER FOR A BETTER TOMORROW",
  },
  {
    image: "./img4.jpeg",
    text: "DUMMY SLIDE TWO — BUILDING FUTURES WITH EDUCATION",
  },
  {
    image: "./img5.jpeg",
    text: "DUMMY SLIDE THREE — TOGETHER FOR A BETTER TOMORROW",
  },
];

const HeaderCarousal: React.FC = () => {
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="mt-20 mb-20 pl-4 pr-4">
      <div className="relative container mx-auto overflow-hidden rounded-lg">
        {/* Slides wrapper */}
        <div
          className="flex transition-transform ease-in-out duration-700"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              {/* Background Image */}
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                 className="w-full  h-auto           
          sm:h-[320px]
          md:h-[480px]
          lg:h-[650px] object-cover bg-cover bg-center bg-no-repeat "
              />
            </div> 
          ))}
        </div>

        {/* Left Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-3 -translate-y-1/2 bg-white border border-gray-300 text-red-600 hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-3 -translate-y-1/2 bg-white border border-gray-300 text-red-600 hover:bg-gray-100 p-2 rounded cursor-pointer"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HeaderCarousal;
