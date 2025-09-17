import React from "react";
import "../App.css"; 
import heroImg from "../assets/logo.png"; 

const Hero = () => {
  return (
    <header className="hero">
      <img src={heroImg} alt="Fitness" className="hero__bg" />
         <div className="hero__overlay"></div>

        <div className="hero__content">
        <h1 className="hero__title">
          Transform Your <span className="hero__accent">Fitness Journey</span>
        </h1>
        <p className="hero__desc">
          Expert personal training, group sessions, and specialized programs
          designed for every age, gender, and fitness goal. From strength
          training to sport-specific conditioning.
        </p>

        <div className="hero__actions">
          <button className="btn btn--primary">
            Start Your Transformation
          </button>
        <button className="btn btn--ghost">View Programs</button>
          </div>
        </div>

    </header>
  );
};

export default Hero;
