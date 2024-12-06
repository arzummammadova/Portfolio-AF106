import React from 'react';
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";

const PaymentContainer = styled.div`
  background-color: #f9f9f9;
  padding: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PlanCard = styled.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: start;

  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2em;
    margin: 5px 0;
    color: #333;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 20px 0 0;

    li {
      font-size: 0.9em;
      margin: 10px 0;
      color: #666;
    }
  }
`;

const Button = styled.button`
  margin-top: 20px;
  width: 100%;
  margin-top:20px;
  padding: 10px 20px;
  color: ${(props) => (props.index === 1 ? "#fff" : "#333")};
  background-color: ${(props) => (props.index === 1 ? "#007bff" : "#fff")};
  border: ${(props) => (props.index === 1 ? "none" : "1px solid #e0e0e0")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.index === 1 ? "#0056b3" : "#f0f0f0")};
  }
`;

const Pay = () => {
  const pricedata = [
    {
      name: 'Free',
      price: '$0',
      duration: '/mo',
      features: [
        '1 user',
        '5GB storage',
        'Unlimited public projects',
        'Community access',
        'Dedicated support',
        'Free linked domain',
      ],
    },
    {
      name: 'Pro',
      price: '$9',
      duration: '/mo',
      features: [
        '5 users',
        '50GB storage',
        'Unlimited public projects',
        'Community access',
        'Dedicated support',
        'Free linked domain',
      ],
    },
    {
      name: 'Enterprise',
      price: '$49',
      duration: '/mo',
      features: [
        'Unlimited users',
        '150GB storage',
        'Unlimited public projects',
        'Community access',
        'Dedicated support',
        'Unlimited linked domains',
      ],
    },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Payment Options</h1>
      <PaymentContainer>
        {pricedata.map((plan, index) => (
          <PlanCard key={index}>
            <h3>{plan.name}</h3>
            <p>
              <strong>{plan.price}</strong> {plan.duration}
            </p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <FaCheck style={{ color: "blue", marginRight: "10px" }} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button index={index}>Choose Plan</Button>
          </PlanCard>
        ))}
      </PaymentContainer>
    </div>
  );
};

export default Pay;
