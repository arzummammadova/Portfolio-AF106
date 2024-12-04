import React from 'react'
import Title from '../title.jsx/Title'
import "./Ourteam.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";




const Ourteam = () => {

  const teamdata = [
    {
      name: 'Jean Smith', role: 'Skateboard Trainer', image: 'https://preview.colorlib.com/theme/skater/images/person_1.jpg', sosial: {
        facebook: 'https://www.facebook.com/jane.smith',
        twitter: 'https://www.twitter.com/janesmith',
        instagram: 'https://www.linkedin.com/in/janesmith'

      }
    },
    {
      name: 'Bob Carry', role: 'Skateboard Trainer', image: 'https://preview.colorlib.com/theme/skater/images/person_2.jpg', sosial: {
        facebook: 'https://www.facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://www.linkedin.com',
      }
    },
    { name: 'Jack Doe', role: 'Skateboard Trainer', image: 'https://preview.colorlib.com/theme/skater/images/person_1.jpg', sosial: {
      facebook: 'https://www.facebook.com/jane.smith',
      twitter: 'https://www.twitter.com/janesmith',
      instagram: 'https://www.linkedin.com/in/janesmith'

    } },


  ]

  return (

    <>
      <div className='title'>
        <h2>OUR TEAM</h2>
        <Title />

      </div>
     
      <div className="teamCard">
        {teamdata.map(({ name, role, image,sosial }, index) => (
          <div key={index} className="teamMember">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{role}</p>
            <div className="socialMedia">
              <a className='sosiali'  href={sosial.facebook}> <FaFacebookF /></a>
              <a className='sosiali'  href={sosial.twitter}><FaTwitter /></a>
              <a className='sosiali'  href={sosial.instagram}><FaInstagram />
              </a>
  
                </div>

          </div>
        ))}
    
      </div>

      
    </>


  )
}

export default Ourteam
