import React, { useState } from "react";

const categories = ["Asian", "Italian", "Chinese", "American"];

const foods = [
  {
    category: "Asian",
    title: "Pumpkin Muffins",
    description:
      "In tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Amet luctus venenatis.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400",
  },
  {
    category: "Asian",
    title: "Frozen Fruit",
    description:
      "Gres tempus turpis at metus scelerisque placerat nulla deumantos sollicitud felis.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
  },
  {
    category: "Italian",
    title: "Italian Pizza",
    description:
      "Fresh mozzarella cheese with homemade tomato sauce and basil.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
  },
  {
    category: "Chinese",
    title: "Chinese Noodles",
    description: "Traditional stir fried noodles served with vegetables.",
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400",
  },
  {
    category: "American",
    title: "Burger",
    description:
      "Classic grilled beef burger with cheese and fresh vegetables.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
  },
];

export default function Menu() {
  const [active, setActive] = useState("Asian");

  const filterData = foods.filter((item) => item.category === active);

  return (
    <section className="w-full py-16 px-4 bg-white">
      <div className="text-center mb-14">
        <p className="text-green-600 text-2xl mb-2 ">Our Menu</p>
        <h2 className="text-[42px] font-light text-[#222] leading-none">
          Latest <span className="font-bold">Menu</span>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`px-8 py-3 rounded-full font-semibold duration-300 cursor-pointer
              
              ${
                active === item
                  ? "bg-[#ffd000] text-white"
                  : "bg-[#008236] text-white hover:bg-[#28ff45]"
              }
              
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">
          {filterData.map((food, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-3xl bg-[#FFF8EF] border border-[#f1ede5] hover:shadow-xl duration-300"
            >
              {/* Background Pattern */}

              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(#d7c8b0 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />

              <div className="relative flex flex-col sm:flex-row items-center justify-between gap-8 p-8">
                {/* Text */}

                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-3xl font-semibold text-[#071A35] mb-4">
                    {food.title}
                  </h2>

                  <p className="text-gray-600 leading-8">{food.description}</p>
                </div>

                {/* Image */}

                <div className="shrink-0">
                  <div className="w-36 h-36 rounded-full  p-2 shadow-lg">
                    <img
                      src={food.image}
                      alt=""
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
