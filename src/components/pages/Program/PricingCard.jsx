import React from "react";
import "../../../CSS/Programspages.css";

const PricingCard = ({ title, price, features, onChoose }) => {
  return (
    <div className="pricing-card">
      <h3 className="pricing-title">{title}</h3>
      <p className="pricing-price">{price}</p>
      <ul className="pricing-features">
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className="pricing-btn" onClick={() => onChoose(title)}>
        Choose Plan
      </button>
    </div>
  );
};

export default PricingCard;
