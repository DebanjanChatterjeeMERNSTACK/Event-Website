import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {  useNavigate } from "react-router-dom";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";
import slide6 from "../assets/slide6.jpg";
const slides = [
  {
    image:
      slide1,
    title: "Evergreen Catering & Events Planner",
    subtitle: "Crafting unforgettable celebrations.",
  },
  {
    image:
      slide2,
    title: "Catering & Home Delivery",
    subtitle: "Fresh meals for getherings (20 to 100 plates)",
  },
  {
    image:
     slide3,
    title: "Dream Weddings",
    subtitle: "Expert planning for traditional ceremonies.",
  },
  {
    image:
      slide4,
    title: "Full Event Management",
    subtitle: "Professional planning for all occasions.",
  },
  {
    image:
      slide5,
    title: "Creative Decoration",
    subtitle: "Stunning floral and thematic decorations.",
  },
  {
    image:
      slide6,
    title: "Corporate Events",
    subtitle: "Premium food services for office meetings.",
  },
];

const AnimatedSlider = () => {
  const [current, setCurrent] = useState(0);
  const navigate= useNavigate()

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Next Slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  // Prev Slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            current === index
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-110 z-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt="slider"
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 sm:px-6">
            <div
              className={`transform transition-all duration-1000 max-w-4xl ${
                current === index
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >

              {/* Title */}
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                {slide.title}
              </h1>

              {/* Subtitle */}
              <p className="text-gray-200 text-sm sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 max-w-2xl mx-auto leading-7">
                {slide.subtitle}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 mt-8 sm:mt-10">
                <button type="button" className="cursor-pointer w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition duration-300" onClick={()=>navigate("/services")}>
                  View Our Services
                </button>

                <button type="button" className=" cursor-pointer w-full sm:w-auto border border-white hover:bg-white hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition duration-300">
                  EXPLORE GALLERY
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-green-500 text-white flex items-center justify-center text-lg sm:text-2xl backdrop-blur-sm transition duration-300"
      >
        <FaChevronLeft />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/20 hover:bg-green-500 text-white flex items-center justify-center text-lg sm:text-2xl backdrop-blur-sm transition duration-300"
      >
        <FaChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-8 sm:w-10 h-2 sm:h-3 bg-green-500"
                : "w-2 h-2 sm:w-3 sm:h-3 bg-white"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default AnimatedSlider;