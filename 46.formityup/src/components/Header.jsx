import React from 'react'
import Logo from './Logo'
import './Header.css'
import Nav from './Nav'
import Loginregister from './Loginregister'
// import axios from 'axios'

const Header = () => {
    
    return (
        <div className="header-section" style={{ backgroundColor: "#E5D9F2" }}>
            <div className='container' >
                <div className="header">
                    <Logo />
                    <Nav />
                    <Loginregister />
                </div>

            </div>
        </div>

    )
}

export default Header
