import React, { useState } from "react";
import contactImg from "../assets/contactUsImg.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const URL = import.meta.env.VITE_URL;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    date: "",
    occasion: "",
    location: "",
    message: "",
  });
  const [loading,setloading]=useState(false)


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true)
    const { name, phoneNumber, email, date, occasion, location, message } =
      formData;
  
    if (
      !name.trim() ||
      !phoneNumber.trim() ||
      !email.trim() ||
      !date ||
      !occasion.trim() ||
      !location.trim() ||
      !message.trim()
    ) {
      toast.error("All fields are required");
      return;
    }

    try {
      const response = await fetch(`${URL}/api/v1/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success(data.message || "Contact request submitted!");
      setloading(false)
      setFormData({
        name: "",
        phoneNumber: "",
        email: "",
        date: "",
        occasion: "",
        location: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Failed to submit contact form");
      setloading(false)
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />

      <section className="w-full bg-gradient-to-b from-[#edf8ee] to-[#f7fff8] py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto bg-white rounded-3xl p-6 md:p-10 lg:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-10">
                Contact <span className="font-bold text-[#222222]">Us</span>
              </h2>

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your fullname"
                    className="w-full h-14 px-5 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit phone number"
                    className="w-full h-14 px-5 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email address"
                    className="w-full h-14 px-5 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    required
                  />
                </div>

                {/* Date */}
                <div>
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    required
                  />
                </div>

                {/* Occasion */}
                <div>
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Occasion *
                  </label>

                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    required
                  >
                    <option value="">Select Occasion</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate Event">Corporate Event</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Event location"
                    className="w-full h-14 px-5 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition"
                    required
                  />
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-green-700 text-sm font-semibold uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full px-5 py-4 rounded-xl bg-white border-2 border-green-200 focus:border-green-500 focus:ring-2 focus:ring-green-100 outline-none transition resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2 flex justify-center">
                  <button
                    type="submit"
                    className="w-full md:w-56 h-14 rounded-xl bg-green-600 text-white font-bold uppercase tracking-wide shadow-lg hover:bg-green-700 hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                  {loading? "Submit...":"Submit"}
                  </button>
                </div>
              </form>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-[550px]">
                <div className="absolute inset-0 bg-green-200 rounded-full blur-[120px] opacity-50"></div>

                <img
                  src={contactImg}
                  alt="Contact Illustration"
                  className="relative z-10 w-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;