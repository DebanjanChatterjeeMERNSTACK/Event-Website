import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGooglePlusG,
  FaYoutube
} from "react-icons/fa";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
      path: "",
    },
    {
      name: <FaLinkedinIn />,
      path: "",
    },
  ];

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "GALLERY", path: "/gallery" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];


  return (
    <footer className="relative bg-[#263238] text-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-16">
          {/* ================= LOGO & ABOUT ================= */}
          <div className="flex flex-col items-center md:items-start xl:items-center text-center md:text-left xl:text-center">
            {/* Logo */}
            <div className="bg-white rounded-md">
              <img src={logo} className="h-15" />
            </div>
            {/* Description */}
            <p className="text-gray-300 leading-7 sm:leading-8 text-[15px] sm:text-base max-w-md">
              Premium catering and elegant event planning by Evergreen Catering & Events Planner.
              Serving delicious food and beautiful clelbrations across Garia, Rajpur Sonarpur, Jadavpur, and Patuli Kolkata.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start xl:justify-center gap-4 sm:gap-5 mt-8 text-xl sm:text-2xl">
              {social.map((icon, index) => (
                <a
                  key={index}
                  href={icon.path}
                   target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-gray-300 hover:bg-green-500 hover:border-green-500 hover:text-white transition duration-300"
                >
                  {icon.name}
                </a>
              ))}
            </div>
          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Quick Link
            </h2>

            <ul className="space-y-5 relative border-l border-white/30 pl-6">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative text-[16px] sm:text-lg font-medium hover:text-green-400 transition"
                >
                  {/* Dot */}
                  <span className="absolute -left-[31px] top-2 w-3 h-3 bg-white rounded-full"></span>

                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= CONTACT ================= */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
              Contact
            </h2>

            <div className="space-y-8 sm:space-y-10 relative border-l border-white/30 pl-6">
              {/* Phone */}
              <div className="relative flex gap-4">
                <span className="absolute -left-[31px] top-2 w-3 h-3 bg-white rounded-full"></span>

                <FaPhoneAlt className="text-xl sm:text-2xl mt-1 text-white flex-shrink-0" />

                <div className="text-[15px] sm:text-lg leading-7">
                  <a href="tel:+918100011155" className="hover:text-green-500 transition">
                    +91 8100011155
                  </a> <br />
                  <a href="tel:+916289116097" className="hover:text-green-500 transition">
                    +91 6289116097
                  </a>

                </div>
              </div>

              {/* Email */}
              <div className="relative flex gap-4">
                <span className="absolute -left-[31px] top-2 w-3 h-3 bg-white rounded-full"></span>

                <FaEnvelope className="text-xl sm:text-2xl mt-1 text-white flex-shrink-0" />

                <div className="text-[15px] sm:text-lg leading-7 break-all">
                  <a href="mailto:egepkolkata@gmail.com" className="hover:text-green-500 transition">
                    egepkolkata@gmail.com
                  </a>

                </div>
              </div>

              {/* Address */}
              <div className="relative flex gap-4">
                <span className="absolute -left-[31px] top-2 w-3 h-3 bg-white rounded-full"></span>

                <FaMapMarkerAlt className="text-xl sm:text-2xl mt-1 text-white flex-shrink-0" />

                <div className="text-[15px] sm:text-lg leading-7">
                  <p>2723, Boral Main Rd, Prantik Pally,</p>
                  <p>Garia, Kolkata, West Bengal 700084</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="border-t border-white/20 mt-14 pt-6 sm:pt-8 text-center text-gray-300 text-sm sm:text-base leading-7">
          Copyright 2026 EGEP | Design By Debanjan Chatterjee
        </div>
      </div>
    </footer>
  );
};

export default Footer;
