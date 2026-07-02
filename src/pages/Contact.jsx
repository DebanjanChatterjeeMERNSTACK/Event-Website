
import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaUser,
  FaPaperPlane,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import { BiSolidParty } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import TabBar from "../componants/Tabbar";

const URL = import.meta.env.VITE_URL; // Update if needed

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    date: "",
    occasion: "",
    location: "",
    message: "",
  });
  const [loading , setloading ]=useState(false)

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
      <TabBar title={"Contact"} />
      

      <section className="w-full bg-[#ececec] py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="bg-[#f5f5f5]">
            <div className="bg-green-600 py-2 text-center">
              <h2 className="text-white text-2xl font-bold">
                Get In Touch With Us Now!
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="text-center p-6 border-b sm:border-r border-gray-300">
                <FaPhoneAlt size={25} className="mx-auto text-green-600" />
                <h3 className="text-[18px] font-bold text-green-600 mt-6">
                  Phone Number
                </h3>
                <p className="text-[#3b4a7a] text-lg mt-6">
                  +91 8100011155
                </p>
              </div>

              <div className="text-center p-6 border-b border-gray-300">
                <FaEnvelope size={25} className="mx-auto text-green-600" />
                <h3 className="text-[18px] font-bold text-green-600 mt-6">
                  Email
                </h3>
                <p className="text-[#3b4a7a] text-md mt-6 break-all">
                  egepkolkata@gmail.com
                </p>
              </div>

              <div className="text-center p-6 sm:border-r border-b sm:border-b-0 border-gray-300">
                <FaMapMarkerAlt size={25} className="mx-auto text-green-600" />
                <h3 className="text-[18px] font-bold text-green-600 mt-6">
                  Location
                </h3>
                <p className="text-[#3b4a7a] text-md leading-9 mt-6">
                  2723, Boral Main Rd, Prantik Pally, Garia, Kolkata,
                  West Bengal 700084
                </p>
              </div>

              <div className="text-center p-6">
                <FaClock size={25} className="mx-auto text-green-600" />
                <h3 className="text-[18px] font-bold text-green-600 mt-6">
                  Working Hours
                </h3>
                <p className="text-[#3b4a7a] text-lg mt-6">
                  Monday To Saturday
                </p>
                <p className="text-[#3b4a7a] text-lg mt-2">
                  09:00 AM To 06:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#dcdcdc]">
            <div className="bg-green-600 py-2 text-center">
              <h2 className="text-white text-2xl font-bold">Contact Us</h2>
            </div>

            <form onSubmit={handleSubmit} className="p-3 md:p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="First Name *"
                    className="w-full h-14 bg-white pl-12 pr-4 outline-none text-lg rounded-xl"
                  />
                </div>

                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Mobile No *"
                    className="w-full h-14 bg-white pl-12 pr-4 outline-none text-lg rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="relative">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID *"
                    className="w-full h-14 bg-white pl-12 pr-4 outline-none text-lg rounded-xl"
                  />
                </div>

                <div className="relative">
                  <FaLocationDot className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Location *"
                    className="w-full h-14 bg-white pl-12 pr-4 outline-none text-lg rounded-xl"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="relative">
                  <BiSolidParty className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 z-10" />

                  <select
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    className="w-full h-14 bg-white pl-12 pr-4 outline-none text-lg rounded-xl"
                  >
                    <option value="">Select Occasion</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Corporate Event">
                      Corporate Event
                    </option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Baby Shower">Baby Shower</option>
                    <option value="Festival">Festival</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="relative">
                  <BsFillCalendar2DateFill className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full h-14 bg-white pl-12 pr-4 outline-none text-lg rounded-xl"
                  />
                </div>
              </div>

              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message *"
                className="w-full mt-5 bg-white p-4 outline-none text-lg resize-none rounded-xl"
              />

              <div className="mt-4 flex justify-center sm:justify-start">
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-800 transition duration-300 text-white px-6 py-3 text-lg font-semibold flex items-center gap-3 rounded-xl cursor-pointer"
                >
                {loading? "Submit...":"Submit"}
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1257531153!2d88.37918429999999!3d22.4619082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02719ff4573ad1%3A0x2cccfd4b37b7d554!2sEvergreen%20Catering%20%26%20Events%20Planner!5e0!3m2!1sen!2sin!4v1761752053016!5m2!1sen!2sin"
        className="w-full h-60 mb-3"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
};

export default Contact;

