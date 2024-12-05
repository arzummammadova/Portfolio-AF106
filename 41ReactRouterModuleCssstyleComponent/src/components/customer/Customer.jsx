import React from 'react';
import styled from 'styled-components';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialsContainer = styled.div`
  background-color: #fff;
  padding: 50px 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 40px;
  color: #666;
`;

const TestimonialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const TestimonialCard = styled.div`
  background: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;

  .icon {
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 24px;
    color: #3498db;
  }

  p {
    font-size: 1rem;
    margin: 20px 0 15px 0;
    color: #333;
  }

  span {
    display: block;
    font-size: 0.9rem;
    color: #666;
    font-style: italic;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      message:
        "Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!",
      client: "Client Name, Location",
    },
    {
      message:
        "The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!",
      client: "Client Name, Location",
    },
  ];

  return (
    <TestimonialsContainer>
      <Title>Customer testimonials</Title>
      <Subtitle>Our customers love working with us</Subtitle>
      <TestimonialList>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index}>
            <FaQuoteLeft className="icon" />
            <p>{testimonial.message}</p>
            <span>- {testimonial.client}</span>
          </TestimonialCard>
        ))}
      </TestimonialList>
    </TestimonialsContainer>
  );
};

export default Testimonials;