import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; 

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false); 
  };

  return (
    <header className="header">
      <div className="header-container">
        
        {/* Logo + Name */}
        <div className="logo-section">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="site-title">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Sculpt and Strive
            </Link>
          </h1>
        </div>

        {/* Hamburger Button */}
        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/program" className="book-btn" onClick={handleLinkClick}>Program</Link>
          <Link to="/facility" className="book-btn" onClick={handleLinkClick}>Facility details</Link>
          <Link to="/trainers" className="book-btn" onClick={handleLinkClick}>Trainers</Link>
          <Link to="/about" className="book-btn" onClick={handleLinkClick}>About Us</Link>
          <Link to="/contact" className="book-btn" onClick={handleLinkClick}>Contact</Link>
          <Link to="/book" className="book-btn" onClick={handleLinkClick}>Book Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
