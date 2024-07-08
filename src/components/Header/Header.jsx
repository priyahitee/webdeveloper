import React from 'react'
import './Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
    <div className="header_logoContainer">
      <img src="./images/Logo.svg" width="150" height="75" alt="PMEntire's logo" />
    </div>
    <div className="header_navContainer">
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_list__items whiteText">
            <Link to="/">About Us</Link>
          </li>
          <li className="nav_list__items whiteText">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  )
}

export default Header