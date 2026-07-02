import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { NavLink } from "react-router-dom";
import services from "../Data/service";
const ServiceSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4">
     
      <div className="text-center mb-14">
        <p className="text-green-600 text-2xl mb-2 ">Our Services</p>
        <h2 className="text-[42px] font-light text-[#222] leading-none">
          Latest <span className="font-bold">Services</span>
        </h2>
      </div>

     
      <div className="max-w-7xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="mySwiper"
        >
          {services.map((service) => (
            <SwiperSlide key={service.id} className="h-auto pb-6">
              <div className="group bg-white rounded-[12px] shadow-sm hover:shadow-md transition duration-300 h-full flex flex-col overflow-hidden border border-gray-100">
                {/* ইমেজ */}
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[220px] object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* কন্টেন্ট */}
                <div className="text-center p-5 flex-grow flex flex-col justify-between">
                  <div>
                    {/* টাইটেল */}
                    <h3 className="text-[20px] font-bold text-[#1e293b] group-hover:text-green-600 transition duration-300">
                      {service.title}
                    </h3>

                    {/* ডেসক্রিপশন (প্রথম ১০০টি অক্ষর দেখাবে এবং শেষে ... যোগ হবে) */}
                    <p className="text-[#666] text-[14px] leading-6 mt-3 px-1">
                      {service.desc.slice(0, 70)}...
                    </p>
                  </div>

                  {/* নতুন ট্যাবে খোলার জন্য Read More লিঙ্ক */}
                  <div className="mt-4">
                    <NavLink
                      to={`/servicedel/${service.id}`}
                      className="inline-block text-green-600 hover:text-green-800 font-bold text-[14px] transition duration-200 border-b border-transparent hover:border-green-800 pb-0.5"
                    >
                      Read more <i className="fa-solid fa-arrow-right-long ms-1 text-[12px]"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceSection;