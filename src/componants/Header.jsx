import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const social = [
    {
      name: <FaFacebookF />,
      path: "https://www.facebook.com/evergreenEventsPlanner/",
   
    },
    {
      name: <FaInstagram />,
      path: "https://www.instagram.com/evergreeneventsplanner/",
     
    },
    {
      name: <FaYoutube />,
      path: "", // Add link when ready
    },
    {
      name: <FaLinkedinIn />,
      path: "", // Add link when ready
    },
  ];

  return (
    <div className="w-full shadow-sm">
      {/* ================= TOP HEADER ================= */}
      <div className="bg-[#f3f3f3] border-b border-gray-200 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Info */}
          <div className="flex flex-wrap items-center gap-6 lg:gap-8 text-[14px] text-[#666] font-medium">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-500" />
              <a href="tel:+918100011155" className="hover:text-green-500 transition">
                +91 8100011155
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" />
              <a href="mailto:egepkolkata@gmail.com" className="hover:text-green-500 transition">
                egepkolkata@gmail.com
              </a>
            </div>
          </div>

          {/* Desktop Social Icons */}
          <div className="flex items-center gap-3">
            {social.map((icon, index) => {
              // Only render if a path exists
              if (!icon.path) return null;

              return (
                <a
                  key={index}
                  href={icon.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#e9e9e9] flex items-center justify-center text-[#777] text-sm cursor-pointer hover:bg-green-500 hover:text-white transition duration-300"
                >
                  {icon.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} className="h-15" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-[14px] font-bold uppercase tracking-wide transition flex items-center gap-1 ${
                    isActive
                      ? "text-green-500"
                      : "text-[#111] hover:text-green-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-black"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-[500px]" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 bg-white border-t border-gray-200">
            <div className="flex flex-col gap-5 mt-5">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[15px] font-bold uppercase transition ${
                      isActive
                        ? "text-green-500"
                        : "text-[#111] hover:text-green-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {social.map((icon, index) => {
                  // Only render if a path exists
                  if (!icon.path) return null;

                  return (
                    <a
                      key={index}
                      href={icon.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#f1f1f1] flex items-center justify-center text-[#777] hover:bg-green-500 hover:text-white transition"
                    >
                      {icon.name}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;