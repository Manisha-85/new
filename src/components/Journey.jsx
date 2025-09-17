import React from "react";


const Journey = () => {
  return (
    <section className="section">
      <div className="journey">
        <div className="stars">★★★★★</div>
        <p className="quote">
          "The personalized approach and comprehensive tracking system helped me
          achieve results I never thought possible. The variety of programs keeps
          me motivated every day."
        </p>
        <p className="author">- Sarah M., Client since 2023</p>
      </div>

      <div className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>
          Join thousands of clients who have transformed their lives through our
          expert training programs
        </p>
        <div className="cta-buttons">
          <button className="btn btn-primary">Book Consultation</button>
          <button className="btn btn-secondary">View Pricing</button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
