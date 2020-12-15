import React from "react";
import home1 from "../img/home1.png";
//motion

import { motion } from "framer-motion";

import {
  StyledImage,
  StyledHide,
  StyledDescription,
  StyledAbout,
} from "../styles";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };
  const containerAnim = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.8,
        // when: "afterChildren",
      },
    },
  };

  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div
          variants={containerAnim}
          animate="show"
          initial="hidden"
          className="title"
        >
          <StyledHide>
            <motion.h2
              // animate={{ opacity: 1, transition: { duration: 2 } }}
              // initial={{ opacity: 0 }}
              variants={titleAnim}
            >
              We work to make
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>
              Your <span>dreams</span> come
            </motion.h2>
          </StyledHide>
          <StyledHide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </StyledHide>
        </motion.div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </p>
        <button>Contact us</button>
      </StyledDescription>
      <StyledImage>
        <img src={home1} alt="guy with a camera" />
      </StyledImage>
    </StyledAbout>
  );
};

//Styled Component

export default AboutSection;
