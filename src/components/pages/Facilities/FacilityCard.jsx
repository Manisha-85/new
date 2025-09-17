import React from "react";
import "../../../CSS/FacilitiesPage.css";

const FacilityCard = ({ image, title, description }) => {
  return (
    <div className="facility-card">
      <img src={image} alt={title} className="facility-image" />
      <div className="facility-content">
        <h3 className="facility-title">{title}</h3>
        <p className="facility-desc">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
