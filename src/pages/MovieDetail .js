import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

//Auto Scroll Top when page changes
import ScrollTop from "../Components/ScrollTop";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movie, url]);

  return (
    <>
      <ScrollTop />
      {movie && (
        <StyledDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyledHeadline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </StyledHeadline>
          <StyledAwards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </StyledAwards>
          <StyledImage>
            <img src={movie.secondaryImg} alt="" />
          </StyledImage>
        </StyledDetails>
      )}
    </>
  );
};

const StyledDetails = styled(motion.div)`
  color: white;
`;

const StyledHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  /* quando utilizamos uma position:relative, é sinal que vamos utilizar um children do main component para se ajustar mediante o pai */
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;

    transform: translate(-50%, -10%);
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyledAwards = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const StyledImage = styled.div`
  min-height: 20vh;
  img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem 2rem 2rem;
    width: 100%;
    object-fit: cover;
  }
`;

//Award Component

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyledAward>
  );
};

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

export default MovieDetail;
