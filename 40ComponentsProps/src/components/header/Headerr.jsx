import React from 'react';
import './Header.css';
import { FaChevronDown, FaAngleRight } from 'react-icons/fa';
import { RxHamburgerMenu } from "react-icons/rx";


const Headerr = () => {
    return (
        <header id='header'>
            <div className='header'>
                <a href="index.html" className="logo">Skater</a>

                <nav className="navbar">
                    <ul>
                        <li><a href="#header" className='active'>Home</a></li>
                        <li><a href="#services" >Services</a></li>

                        <li className="dropdown-container">
                            <a href="#" className='about'>
                                About <FaChevronDown className='down' />
                            </a>
                            <ul className='dropdown'>
                                <li><a href="#ourteam"> Our Team</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li className='more-links'>
                                    <a href="#">
                                        More Links <FaAngleRight className="right-icon" />
                                    </a>
                                    <ul className='dropdown-little'>
                                        <li><a href="#">Menu One</a></li>
                                        <li><a href="#">Menu Two</a></li>
                                        <li><a href="#">Menu Three</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li><a href="blog.html">Testimonials</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>

                    
                </nav>
                <div className="burger">
                            <RxHamburgerMenu />
                        <ul className="nav-links"></ul>
                    </div>
            </div>
        </header>
    );
};

export default Headerr;
