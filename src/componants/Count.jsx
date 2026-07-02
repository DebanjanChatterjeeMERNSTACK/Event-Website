import React from "react";
import { FaGripLines } from "react-icons/fa";
import countBgImg from "../assets/countBg.jpg";
const CountSection = () => {
  const stats = [
    {
      number: "320",
      title: "Featured Events",
    },
    {
      number: "156",
      title: "Loyal Customers",
    },
    {
      number: "594",
      title: "Good Comments",
    },
    {
      number: "167",
      title: "Trophies Won",
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center relative py-16"
      style={{
        backgroundImage:
          `url(${countBgImg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-white">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Number */}
              <h2 className="text-5xl font-bold">{item.number}</h2>
              <p className="text-2xl font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountSection;