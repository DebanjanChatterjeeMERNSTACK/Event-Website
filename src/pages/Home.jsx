import React from "react";

import Count from "../componants/Count";
import HotelCards from "../componants/Service";
import Blog from "../componants/Blog";
import ConferenceSection from "../componants/About";
import Slider from "../componants/Slider"
import ContactSection from "../componants/Contact";
import Menu from "../componants/Menu";

const Home = () => {
  return (
    <>
      
      <Slider/>
      <ConferenceSection />
      <HotelCards />
      <Menu/>
      <Count />
      <Blog />
       <ContactSection/>
    
      
    </>
  );
};

export default Home;
