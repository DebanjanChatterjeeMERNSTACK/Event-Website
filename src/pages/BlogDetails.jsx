import React from "react";
import blogImage from "../assets/blogimg1.jpg";
import Tabbar from "../componants/Tabbar";
import blogs from "../Data/blog.js"
import { useParams } from "react-router-dom";

const BlogDetails = () => {
 const { id } = useParams();
const blogId = Number(id);

const data = blogs.find((item) => item.id === blogId);

  return (
    <>
      <Tabbar title={"Blog Details"} />
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
                   <span className="bg-slate-200 text-slate-600 text-xs font-semibold px-3 py-1 rounded-md">{data.date}</span>
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
              The Pleasure
            </h2>

            <p className="text-gray-600 text-lg leading-9">
             { data.desc}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
