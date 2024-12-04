import React from 'react';
import './Pricing.css';
import Title from '../title.jsx/Title';
import { FaCheck } from "react-icons/fa6";

import Buttons from '../button/Buttons';
const Pricing = () => {
    const pricedata = [
        {
            name: "Basic",
            price: "$47",
            duration: "year",
            content: {
                contentfirst: "Officia quaerat eaque neque",
                contentsecond: "Ut quo qui quia",
                contentthird: "Qui molestiae voluptas",
                contentfourth: "Et autem voluptas",
                contentfifth: "Quidem voluptas quos",
            }
        },
        {
            name: "Premium",
            price: "$200",
            duration: "year",
            content: {
                contentfirst: "Officia quaerat eaque neque",
                contentsecond: "Ut quo qui quia",
                contentthird: "Lorem ipsum dolor sit amet",
                contentfourth: "Et autem voluptas",
                contentfifth: "Quidem voluptas quos",
            }
        },
        {
            name: "Ultimate",
            price: "$750",
            duration: "year",
            content: {
                contentfirst: "Officia quaerat eaque neque",
                contentsecond: "Ut quo qui quia",
                contentthird: "Lorem ipsum dolor sit amet",
                contentfourth: "Et autem voluptas",
                contentfifth: "Quidem voluptas quos",
            }
        }
    ];

    return (
        <div>
            <div className="title">
                <h2>Session Pricing</h2>
                <Title />
            </div>

            <div className="pricing-cards">
                {pricedata.map((plan, index) => (
                    <div className="pricing-card" key={index}>
                        <h2 className='planname'>{plan.name}</h2>
                        <p className="price">{plan.price}  <span>/{plan.duration}</span></p>
                        <ul>
                            <li><span><FaCheck /></span>
                            {plan.content.contentfirst}</li>
                            <li><span><FaCheck /></span>

                                {plan.content.contentsecond}</li>
                            <li><span><FaCheck /></span>
                            {plan.content.contentthird}</li>
                            <li><span><FaCheck /></span>
                            {plan.content.contentfourth}</li>
                            <li><span><FaCheck /></span>
                            {plan.content.contentfifth}</li>
                            <Buttons color="#FE8B00" text="Buy Now"/>
                            
                        </ul>

                    </div>
                ))}

               
            </div>
        </div>
    );
};

export default Pricing;
