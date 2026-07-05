import React from "react";
import blogImage from "../assets/blogimg1.jpg";
import Tabbar from "../componants/Tabbar.jsx";
import service from "../Data/service.js";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { id } = useParams();
  const serviceId = Number(id);

  const data = service.find((item) => item.id === serviceId);

  return (
    <>
      <Tabbar title={"Service Details"} />
      <section className="w-full bg-gray-100 py-14">
        <div className="max-w-6xl mx-auto px-5">
          {/* Hero Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Left */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-black text-slate-800 leading-tight mt-6">
                {data.title}
              </h1>

              <div className="flex items-center gap-4 mt-8">
                <div>
                  <p className="font-semibold text-md italic text-gray-500">
                    {data.shortDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <img
                src={data.image}
                alt=""
                className="w-[320px] h-[320px] rounded-full object-cover border-b-[12px] border-green-300 shadow-xl"
              />
            </div>
          </div>

          {/* Blog Card */}
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 mt-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              Service Details
            </h2>

         <div
              className="text-gray-600 text-lg leading-9"
              dangerouslySetInnerHTML={{ __html: data.desc }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
