import React, { useState } from "react";
import "../../CSS/BookNow.css";

const BookNow = () => {
  const [isOpen, setIsOpen] = useState(true); // <-- page load hote hi open
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="booknow-page">
      {/* Book Now button hata diya */}
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-box">
            <button className="popup-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>

            {!submitted ? (
              <>
                <h2>Book Your Slot</h2>
                <form className="popup-form" onSubmit={handleSubmit}>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <input type="tel" placeholder="Phone Number" required />
                  <select required>
                    <option value="">Select Program</option>
                    <option value="Strength">Strength Training</option>
                    <option value="Cardio">Cardio Blast</option>
                    <option value="Yoga">Yoga & Flexibility</option>
                  </select>
                  <button type="submit">Submit</button>
                </form>
              </>
            ) : (
              <h3 style={{ color: "#0084b5", textAlign: "center" }}>
                ✅ Thank you! Your booking is confirmed.
              </h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default BookNow;
