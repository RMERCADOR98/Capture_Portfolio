import React from "react";

//Styles
import styled from "styled-components";

//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";

const ContactUs = () => {
  return (
    <StyledContact
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <StyledTitle>
        <StyledHide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </StyledHide>
      </StyledTitle>
      <div>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send us a message</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Send an email</h2>
          </StyledSocial>
        </StyledHide>
        <StyledHide>
          <StyledSocial variants={titleAnim}>
            <StyledCircle />
            <h2>Social Media</h2>
          </StyledSocial>
        </StyledHide>
      </div>
    </StyledContact>
  );
};

const StyledHide = styled.div`
  overflow: hidden;
`;

const StyledContact = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;

  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const StyledTitle = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const StyledSocial = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
const StyledCircle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export default ContactUs;
