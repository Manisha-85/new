import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; 
import "../../CSS/About.css";
import fitImg from "../../assets/3d fitness.png"; 
import Footer from "../Footer";

const About = () => {
  const [showPage, setShowPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // ✅ popup state
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (!showPage) {
    return null;
  }

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={fitImg} alt="Fitness Center" />
        </div>

        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At <span className="highlight">Fitness</span>, we believe in
            transforming lives through fitness. Our state-of-the-art facility,
            experienced trainers, and motivating community help you achieve your
            health goals—whether it’s building strength, losing weight, or
            improving endurance.
          </p>
          <p>
            With personalized workout plans, nutrition guidance, and
            cutting-edge equipment, we’re here to push you beyond your limits
            and help you become the best version of yourself.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Members</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Professional Trainers</p>
            </div>
          </div>

          {/* ✅ Popup trigger */}
          <button 
            className="about-btn"
            onClick={() => setShowPopup(true)}
          >
            Join Us Today
          </button>
        </div>
      </div>

      {/* ✅ Popup form */}
     {showPopup && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Join Us</h2>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" required />
              <textarea placeholder="Your Goals (e.g., weight loss, strength, yoga)" />
              <button type="submit">Submit</button>
            </form>
            <button className="close-btn" onClick={() => setShowPopup(false)}>✖</button>
          </div>
        </div>
      )}

      <Footer/>
    </section>
  );
};

export default About;
