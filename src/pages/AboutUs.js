import React from "react";
import AboutSection from "../Components/AboutSection";
import ServicesSection from "../Components/ServicesSection";
import FaqSection from "../Components/FaqSection";

//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Auto Scroll Top when page changes
import ScrollTop from "../Components/ScrollTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ScrollTop />
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
