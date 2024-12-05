import React from 'react';
import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const ContactFormContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px 20px;
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3498db;
  width: 60px;
  height: 60px;
  margin: 0 auto 20px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
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

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }
`;

const ContactForm = () => {
  return (
    <ContactFormContainer>
      <IconWrapper>
        <FaEnvelope />
      </IconWrapper>
      <Title>Get in touch</Title>
      <Subtitle>We'd love to hear from you</Subtitle>
      <Form>
        <Input type="text" placeholder="Full name" required />
        <Input type="email" placeholder="Email address" required />
        <Input type="text" placeholder="Phone number" />
        <Textarea placeholder="Message" rows="5" required />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </ContactFormContainer>
  );
};

export default ContactForm;