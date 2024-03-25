import React, { useState } from 'react';
import heroMain from '../Assets/logo main.PNG';

const Navbaar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="hamburger-menu" onClick={handleMenuClick}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="nav-logo">
          <img src={heroMain} alt="" />
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#">Home</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Pricing</a></li>
          <div className="button">
            <p>Register Now <span>&#8594;</span></p>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbaar;
