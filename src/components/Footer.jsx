import React from "react";
import { Link } from "react-router-dom";

import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import Logo from "../assets/logos.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Logo} alt="Logo" className="logo-img" />
          <h2 className="logo-text">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Sculpt and Strive
            </Link>
          </h2>
        </div>

        <div className="footer-links">
          <h3>Program Services</h3>
          <ul>
            <li><a href="#fitness">Fitness Training</a></li>
            <li><a href="#nutrition">Nutrition Plans</a></li>
            <li><a href="#coaching">Personal Coaching</a></li>
            <li><a href="#yoga">Yoga & Wellness</a></li>
          </ul>
        </div>

        <div className="footer-address">
          <h3>Address</h3>
          <p>Sector -1 Meerut Uttar Pradesh-250002</p>
          <p>Email: info@sculptandstrive.com</p>
          <p> Phone: +91 7302113369</p>
        </div>
      </div>
      <hr className="divider" />

      <div className="footer-bottom">
        <p>Copyrights © <span className="company-link">Sculpt and Strive</span> . All Rights Reserved | <span className="company-link"> Designed by Vigomerge Technology Pvt Ltd </span>. </p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
