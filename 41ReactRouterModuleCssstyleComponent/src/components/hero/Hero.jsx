import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.div`
  background-color: #212529;
  color: white;
  padding: 50px 0;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-align: center;
  }

  .heros {
    max-width: 45%;
    margin: 0 auto;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: grey;
    text-align: center;
  }
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.bg || 'white'};
  color: ${(props) => props.color || 'transparent'};
  border: ${(props) => (props.border ? props.border : 'none')};
  padding: 10px 20px;
  margin: 10px;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverBg || 'white'};
    color: ${(props) => props.hoverColor || '#212529'};
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <div className="heros">
        <h1>Present your business in a whole new way</h1>
        <p>
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!
        </p>

        <StyledButton bg="#007bff" color="white" hoverBg="white" hoverColor="#007bff">
          Get started
        </StyledButton>
        <StyledButton
          bg="transparent"
          color="white"
          border="1px solid white"
          hoverBg="white"
          hoverColor="#212529"
        >
          Learn more
        </StyledButton>
      </div>
    </HeroSection>
  );
};

export default Hero;
