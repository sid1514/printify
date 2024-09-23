import React from "react";
import Navbar from "./navbar";
import IntroSection from "./IntroSection";
import WhatWeoffer from "../whatweoffer/WhatWeoffer";
import DesignIntro from "../DesignIntro/DesignIntro";
import Footer from "../footer/Footer";
import Profitdetail from "../sellandprofit/Profitdetail";


const Home = () => {
  return (
    <div>
      <Navbar />
      <IntroSection />
      <WhatWeoffer />
      <DesignIntro />
      <Profitdetail/>
      <Footer/>
    </div>
  );
};

export default Home;
