import React from "react";
import "./Services.css"; 
import { Fa500Px } from "react-icons/fa";
import Title from "../title.jsx/Title";

import { FaCarBattery } from "react-icons/fa";
import { FaEarlybirds } from "react-icons/fa";
import { MdSkateboarding } from "react-icons/md";
import { GiSkateboard } from "react-icons/gi";
import { GiWaveSurfer } from "react-icons/gi";

const Services = () => {
  const cardData = [

    
    {
      title: "Skate for Beginner",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
      icons:<MdSkateboarding />,
    },
    {
      title: "Personal Training",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
      icons: <GiSkateboard />,
    },
    {
      title: "Best Skater",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
      icons: <GiWaveSurfer />,
    },
    {
        title: "Skate for Beginner",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
        icons: <Fa500Px />,
      },
      {
        title: "Personal Training",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
        icons: <FaEarlybirds  />,
      },
      {
        title: "Best Skater",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur dolores voluptas obcaecati quo consequuntur mollitia facilis.",
        icons: <FaCarBattery />,
      },
  ];
  return (
    <section className='carttt' id="services">
    
    <h1>Services</h1>
    <Title/>
    <div className="cardContainer">

      {cardData.map(({ title, icons, description }, index) => (
        <div className={`card ${index === 1 ? "highlight" : ""}`} key={index}>
            <div className="circle-i">  <i className="iconskate">{icons}</i></div>
        
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>
         

        </div>
      ))}
    </div>
    </section>
  );
};

export default Services;