import React from "react";
import home1 from "../img/home1.png";
//motion

import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

import {
  StyledImage,
  StyledHide,
  StyledDescription,
  StyledAbout,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <motion.div>
          <StyledHide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
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
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </StyledDescription>
      <StyledImage>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </StyledImage>
      <Wave />
    </StyledAbout>
  );
};

//Styled Component

export default AboutSection;
