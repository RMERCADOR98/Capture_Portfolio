import styled from "styled-components";
import { motion } from "framer-motion";

const StyledAbout = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    /* segue os parametros acima mas mantém as mesmas dimensões */
    object-fit: cover;
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export { StyledImage, StyledHide, StyledDescription, StyledAbout };
