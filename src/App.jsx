import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./componants/Footer";
import Navbar from "./componants/Header";
import Gallery from "./pages/Gallery";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import BlogDetails from "./pages/BlogDetails";
import ServiceDetails from "./pages/ServiceDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogdel/:id" element={<BlogDetails />} />
        <Route path="/servicedel/:id" element={<ServiceDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {/* STICKY CONTACT BUTTONS */}
      <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-[9999]">
        {/* Call Button */}
        <a
          href="tel:+918100011155"
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300"
          title="Call Us"
        >
          <MdCall size={30} />
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918100011155?text=Hi,%20I%20want%20to%20inquire%20about%20your%20catering%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25d366] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform duration-300"
          title="WhatsApp Us"
        >
          <FaWhatsapp size={30} />
        </a>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
