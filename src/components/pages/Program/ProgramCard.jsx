import React from "react";
import "../../../CSS/Programspages.css";

const ProgramCard = ({ image, title, tagline, description, whoFor, benefits }) => {
  return (
    <div className="program-card">
      <img src={image} alt={title} className="program-img" />
      <h3>{title}</h3>
      {tagline && <h4 className="tagline">{tagline}</h4>}
      <p>{description}</p>

      {whoFor && (
        <div className="who-for">
          <strong>Who It’s For:</strong>
          <p>{whoFor}</p>
        </div>
      )}

      {benefits && (
        <div className="benefits">
          <strong>Benefits:</strong>
          <ul>
            {benefits.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProgramCard;
