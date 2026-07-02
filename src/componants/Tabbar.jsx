import React from "react";
import { NavLink } from "react-router-dom";
import servicePgImg from "../assets/servicePageBgImg.jpg";
const Topbar = ({title}) => {
  return (
    <section className="relative w-full h-[300px] sm:h-[300px] lg:h-[250px] overflow-hidden">
      {/* Background Image */}
      <img
        src={servicePgImg}
        alt="gallery-banner"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#2d2b3b]/75"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div>
          {/* Small Title */}

          {/* Main Title */}
          <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-light">
            <span className="text-[#FFF100] font-bold uppercase">{title}</span>
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-4 mt-8 text-white text-sm sm:text-base">
            <NavLink
              to={"/"}
              className="hover:text-[#f5b223] transition duration-300 cursor-pointer"
            >
              Home
            </NavLink>

            <span>|</span>

            <p className="text-gray-200">{title}</p>
          </div>
        </div>
      </div>

      {/* Optional Decorative Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    </section>
  );
};

export default Topbar;
