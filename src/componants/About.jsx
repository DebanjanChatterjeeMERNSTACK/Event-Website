import React from "react";
import aboutImage from "../assets/About-small-box.jpg";
const AboutSection = () => {
  const featuresLeft = [
    "PREMIUM CATERING SERVICES",
    "CUSTOM MENU PLANNING",
    "FLAWLESS EVENT MANAGEMENT",
  ];

  const featuresRight = [
    "STUNNING THEME DECORATIONS",
    "CORPORATE & SOCIAL EVENTS",
    "CATERING HOME DELIVERY",
  ];

  return (
    <section className="w-full bg-[#f3f3f3] py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Images */}
        <div className="relative flex justify-center lg:justify-start">
          {/* Main Image */}
          <img
            src={aboutImage}
            alt="conference"
            className="w-[420px] h-[300px] object-cover"
          />

          {/* Small Overlay Image */}
          <img         
            src={aboutImage}
            alt="event"
            className="absolute bottom-[-45px] right-[-20px] w-[250px] h-[230px] object-cover shadow-lg md:bottom-[-45px] right-[50px]"
          />
        </div>

        {/* Right Content */}
        <div>
          {/* Title */}
          <h1 className="text-[28px] text-green-600">Evergreen Catering & Events Planner</h1>
          <h2 className="text-[42px] font-light text-[#222] leading-none">
            About <span className="font-bold">Us</span>
          </h2>

          {/* Price */}
          {/* <p className="text-[green] text-[18px] mt-3 font-medium">
            price start from $52.00
          </p> */}

          {/* Line */}
          <div className="w-full h-[1px] bg-gray-300 my-6"></div>

          {/* Description */}
          <h6 className="text-[#555] leading-8 text-[15px]">
           "Evergreen Catering & Events Planner offers premium catering and flawless event management services in Kolkata near by, from traditional grand weddings
            to corporate gatherings and intimate family home deliveries, we bring your dream celebration to life beautifully."
          </h6>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {/* Left */}
            <div className="space-y-4">
              {featuresLeft.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[green] flex items-center justify-center text-white text-[10px]">
                    ●
                  </div>

                  <p className="text-[13px] font-bold tracking-wide text-[#222]">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Right */}
            <div className="space-y-4">
              {featuresRight.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[green] flex items-center justify-center text-white text-[10px]">
                    ●
                  </div>

                  <p className="text-[13px] font-bold tracking-wide text-[#222]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">
            {/* Button 1 */}
            <button className="cursor-pointer bg-[green] hover:bg-[green] transition text-white px-8 py-4 rounded-full text-[13px] font-bold uppercase">
              Book Your Event
            </button>

            {/* Button 2 */}
            <button className="cursor-pointer border-2 border-[green] text-[green] hover:bg-[green] hover:text-white transition px-8 py-4 rounded-full text-[13px] font-bold uppercase">
              Get Free Quote !
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;