import React from "react";
import Tabbar from "../componants/Tabbar";
import { FaComment } from "react-icons/fa";
import blogs from "../Data/blog";
import { useNavigate } from "react-router-dom";

const Blog = () => {
   const navigate = useNavigate();

  return (
    <>
      <Tabbar title={"Blog"} />
      <section className="w-full bg-[#f5f5f5] py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {blogs.map((blog) => (
              <div key={blog.id}  className="cursor-pointer" onClick={() => navigate(`/blogdel/${blog.id}`)}>
                {/* Image */}
                <div className="overflow-hidden rounded-2xl cursor-pointer">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[220px] sm:h-[250px] object-cover rounded-2xl transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="mt-5">
                  {/* Title */}
                  <h2 className="text-[24px] sm:text-[30px] lg:text-[22px] font-bold text-[#1e293b] leading-snug hover:text-[#ff5a3c] transition cursor-pointer">
                    {blog.title}
                  </h2>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mt-5 text-[15px] sm:text-[16px]">
                    <p className="text-[#555]">Posted on {blog.date}</p>
                  </div>

                  {/* Description */}
                  <p className="text-[#7b8794] text-[16px] leading-8 mt-5">
                    {blog.desc.slice(0, 240)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
