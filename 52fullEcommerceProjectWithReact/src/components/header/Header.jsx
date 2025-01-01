import React from 'react';
import Vector from '../header/Vector.svg'
import './Header.scss';
import Navbar from '../Navbar/Navbar';
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="header_top">
            <div className="header_top_left">
              <img src={Vector} alt="phone" />
              <a href="tel:+748 383 23 14">+748 383 23 14</a>
            </div>
            <div className="header_top_right">
              <p>|</p>
              <a href="#">Terms of Use</a>
              <p>|</p>
              <a href="#">FAQ</a>
              <p>|</p>
              <a href="#">Customer service</a>
            </div>
          </div>
        </div>
      </header>
   <Navbar/>
    </div>
  
  );
};

export default Header;
