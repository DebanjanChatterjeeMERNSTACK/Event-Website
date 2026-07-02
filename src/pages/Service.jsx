import React from "react";
import Tabbar from "../componants/Tabbar";
import { NavLink } from "react-router-dom";
import services from "../Data/service";
const Service = () => {

  return (
    <>
      <Tabbar title={"Service"} />
      <section className="w-full py-10 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#d1cece]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
        {services.map((service) => (

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
                  Read more{" "}
                  <i className="fa-solid fa-arrow-right-long ms-1 text-[12px]"></i>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        </div>
      </section>
    </>
  );
};

export default Service;
