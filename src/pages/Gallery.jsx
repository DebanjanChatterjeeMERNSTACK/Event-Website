import React, { useState } from "react";
import { FaSearchPlus, FaTimes, FaArrowRight } from "react-icons/fa";
import Tabbar from '../componants/Tabbar'

const galleryImages = [
  {
    id: 1,
   
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
  
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,

    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,

    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,

    image:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,

    image:
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,

    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,

    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
    <Tabbar title={"Gallery"}/>
      {/* ================= GALLERY GRID ================= */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 mt-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={item.image}
                alt="gallery"
                className="w-full h-[300px] object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-center p-4">
                <button
                  onClick={() => setSelectedImage(item.image)}
                  className="w-16 h-16 rounded-full bg-[#f5b223] text-white flex items-center justify-center text-2xl hover:scale-110 transition duration-300 cursor-pointer"
                >
                  <FaSearchPlus />
                </button>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center px-4">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="cursor-pointer absolute top-6 right-6 w-12 h-12 rounded-full bg-white text-black flex items-center justify-center text-xl hover:bg-[#f5b223] hover:text-white transition duration-300"
          >
            <FaTimes />
          </button>

          {/* Image */}
          <img
            src={selectedImage}
            alt="preview"
            className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
};

export default Gallery;
