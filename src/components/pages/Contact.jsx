import React, { useState } from "react";
import "../../CSS/Contact.css";
import bgImage from "../../assets/fitness img.png";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Footer from "../Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle Input
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost/conact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("✅ Message Sent Successfully!");
        setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
      } else {
        setStatus("❌ Something went wrong. Try again!");
      }
    } catch (error) {
      setStatus("⚠️ Server Error. Please try later.");
    }
  };

  return (
    <>
      <div
        className="contact-container"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${bgImage})`,
        }}
      >
        <div className="contact-box">
          <h2 className="contact-title">CONTACT US</h2>

          <div className="contact-content">
            {/* Left Side - Form */}
            <div className="contact-form">
              <h3>ONLINE INQUIRY</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <select name="interest" value={formData.interest} onChange={handleChange}>
                  <option value="">Select An Interest</option>
                  <option value="Basic">Basic</option>
                  <option value="Standard">Standard</option>
                  <option value="Premium">Premium</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit">Submit</button>
              </form>
              {status && <p className="status-msg">{status}</p>}
            </div>

            {/* Right Side - Contact Details */}
            <div className="contact-details">
              <h3>CONTACT DETAILS</h3>
              <p>
                <a href="mailto: info@sculptandstrive.com">info@sculptandstrive.com</a>
                <br />
                +91 7302113369
              </p>

              <div className="office">
                <strong>Short Hills Office</strong>
                <p>
                  Sector -1 Meerut Uttar Pradesh-250002.
                  <br />+91 7302113369
                </p>
              </div>

              <div className="social-links">
                <a href="https://wa.me/+917302113369" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={20} /> <br />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebookF size={20} /> <br />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram size={20} /> <br />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaXTwitter size={20} /> <br />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedinIn size={20} /> <br />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
