import React from 'react';
import { FaEarlybirds, FaArrowRight } from "react-icons/fa";
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px 30px;
  margin: 40px auto;

`;

const CardItem = styled.div`
  padding: 20px;
  width:calc(100% /3 - 4rem );
  text-align: start;
  border: none;
  background-color: transparent;

  h3 {
    margin: 15px 0;
    font-size: 1.3rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  background-color: #007bff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin-bottom: 20px;
  border-radius: 4px;

  .icon {
    font-size: 2rem;
  }
`;

const CallToAction = styled.a`
  display: flex;
  align-items: center;
  color: #007bff;
  font-weight:400;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;

  .arrow {
    margin-left: 8px;
    font-size: 1rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Card = () => {
  const teamdata = [
    {
      icon: <FaEarlybirds className="icon" />,
      title: 'Featured title',
      desc: 'Paragraph of text beneath the heading to explain the heading of the heading of the heading of ng until we run out of words.',
    },
    {
        icon: <FaEarlybirds className="icon" />,
        title: 'Featured title',
        desc: 'Paragraph of text beneath the heading to explain the heading of the heading of the heading of ng until we run out of words.',
      },
      {
        icon: <FaEarlybirds className="icon" />,
        title: 'Featured title',
        desc: 'Paragraph of text beneath the heading to explain the heading of the heading of the heading of ng until we run out of words.',
      },
  ];

  return (
    <CardContainer>
      {teamdata.map((item, index) => (
        <CardItem key={index}>
          <IconWrapper>{item.icon}</IconWrapper>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <CallToAction href="#">
            Call to action <FaArrowRight className="arrow" />
          </CallToAction>
        </CardItem>
      ))}
    </CardContainer>
  );
};

export default Card;
