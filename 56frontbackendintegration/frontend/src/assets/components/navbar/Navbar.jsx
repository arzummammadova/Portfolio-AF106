import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <div>
      
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="pages">
          <ul>
            <li>    <Link to="/">Home</Link></li>
            <li>  <Link to="/adminpanel">AdminPanel</Link></li>
            <li>  <Link to="/">Product</Link></li>
          </ul>
      
        
        </div>
      </div>
    </div>
  )
}

export default Navbar
