import React from "react";
import "../../../CSS/TrainersPage.css";

const TrainerCard = ({ image, name, specialty, experience, socials }) => {
  return (
    <div className="trainer-card">
      <img src={image} alt={name} className="trainer-image" />
      <div className="trainer-info">
        <h3 className="trainer-name">{name}</h3>
        <p className="trainer-specialty">{specialty}</p>
        <p className="trainer-experience">{experience} years experience</p>
        <div className="trainer-socials">
          {socials.map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noreferrer">
              <img src={s.icon} alt="social" className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainerCard;
