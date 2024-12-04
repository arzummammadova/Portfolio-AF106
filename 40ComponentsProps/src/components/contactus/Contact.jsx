import React from 'react'
import './Contact.css'
import Buttons from '../button/Buttons'
const Contact = () => {
  return (
    <div id='contact'>
      <div className='title'>
        <p className='title-p'>Get In Touch</p>

        <h1>Contact ME</h1>
        </div>
      <div className='contact'>
        <form action="">
            <div className="form-info">
            <input type='text' placeholder='First name' />    
            <input type='text' placeholder='Last name' />
            </div>
            
            <input type='email' placeholder='Email' />
            <textarea placeholder=' Write your Message' rows='15'></textarea>
            <Buttons color="#FF8B00" text="Send" padding={"1rem 10rem"} />

           
        </form>

        <div className="right-side">
            <p className='right-side-title'>Need to know more on details. Get In Touch</p>
            <p className='right-side-desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores, distinctio! Harum quibusdam nisi, illum nulla aspernatur aut quidem aperiam, quae non tempora recusandae voluptatibus fugit impedit</p>
            <Buttons text={"Get Starter"}  color={"#FF8B00"}/>
        </div>
      </div>

      </div>
  
  )
}

export default Contact
