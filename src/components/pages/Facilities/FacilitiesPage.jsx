import React, { useState, useEffect } from "react";
import FacilityCard from "./FacilityCard";
import equipmentImg from "../../../assets/equipment.jpg";
import trainerImg from "../../../assets/trainer.jpg";
import yogaImg from "../../../assets/Yoga.png";
import kids3d from "../../../assets/kids.jpg";
import adultImg from "../../../assets/adult.jpg";
import seniorImg from "../../../assets/senior.jpg";
import atheletImg from "../../../assets/athelets.jpg";
import gallery1 from "../../../assets/Gallary1.jpg";
import gallery2 from "../../../assets/gallery2.jpg";


import prenatalImg from "../../../assets/prenatal.jpeg";
import menopauseImg from "../../../assets/menopause.jpeg";

import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.jpg";
import user3 from "../../../assets/user3.png";
import heroImg from "../../../assets/Hero.jpg"; 
import "../../../CSS/FacilitiesPage.css";
import Footer from "../../Footer";

const FacilitiesPage = () => {
  const [showPage, setShowPage] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  // Facilities
  const facilities = [
    { image: equipmentImg, title: "Modern Equipment", description: "State-of-the-art gym equipment to support every workout style." },
    { image: trainerImg, title: "Personal Training", description: "Certified trainers to guide and motivate you on your fitness journey." },
    { image: yogaImg, title: "Yoga Studio", description: "Peaceful studio for yoga, meditation, and flexibility training." },
  ];

  // Gallery
  const galleryImages = [gallery1, gallery2];

  // Testimonials
  const testimonials = [
    { name: "Rahul Sharma", photo: user1, review: "The best gym experience I've ever had! Trainers are professional and very supportive." },
    { name: "Sneha Patel", photo: user2, review: "Amazing facilities, especially the yoga studio. It really helped me with flexibility and peace of mind." },
    { name: "Amit Verma", photo: user3, review: "The swimming pool and equipment are top-notch. Worth every penny!" }
  ];

  // Programs
  const programList = [
    {
      image: kids3d,
      title: "Kids & Teens (5-17)",
      description: "Fun, engaging activities that build healthy habits early.",
      who: "Children and adolescents looking to improve fitness, develop healthy habits, and build confidence.",
      benefits: [
        "Sport-based games",
        "Flexibility training",
        "Coordination drills",
        "Boosted confidence & focus"
      ]
    },
    {
      image: adultImg,
      title: "Adults (18-40)",
      description: "Programs focused on strength, endurance, and overall fitness.",
      who: "Adults seeking structured strength, cardio, and stress management programs.",
      benefits: [
        "Strength training",
        "Cardio sessions",
        "Stress management",
        "Improved stamina & energy"
      ]
    },
    {
      image: seniorImg,
      title: "Senior Fitness Program",
      description: "Gentle but effective exercises to stay healthy and active.",
      who: "Older adults looking to improve their fitness, maintain independence, and enhance overall well-being.",
      benefits: [
        "Improved strength and balance",
        "Increased mobility and flexibility",
        "Reduced risk of falls",
        "Enhanced cognitive function"
      ]
    },
    {
      image: atheletImg,
      title: "Athletes (All Ages)",
      description: "Specialized programs to improve performance and recovery.",
      who: "Athletes of any sport looking to enhance performance and recovery.",
      benefits: [
        "Sport-specific drills",
        "Speed & agility training",
        "Recovery routines",
        "Performance optimization"
      ]
    },
   
    {
      image: prenatalImg,
      title: "Prenatal & Postnatal Fitness",
      description: "Safe, effective exercises to support women during pregnancy & postpartum.",
      who: "Pregnant women and new mothers looking to maintain fitness and recover safely.",
      benefits: [
        "Reduced pregnancy discomfort",
        "Improved labor and delivery outcomes",
        "Faster postpartum recovery",
        "Increased energy & mood"
      ]
    },
    {
      image: menopauseImg,
      title: "Menopausal & Pre/Perimenopausal Fitness",
      description: "Targeted exercises to manage symptoms and improve health during transition.",
      who: "Women experiencing menopausal or perimenopausal symptoms.",
      benefits: [
        "Reduced hot flashes & mood swings",
        "Improved bone density",
        "Better sleep quality",
        "Improved overall well-being"
      ]
    }
  ];

  if (!showPage) return null;

  return (
    <div className="facilities-page">
      {/* Hero Banner */}
      <div className="hero-banner" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">Explore Our World-Class Facilities</h1>
          <button className="hero-btn" onClick={() => setShowPopup(true)}>Join Now</button>
        </div>
      </div>

      {/* Facilities Section */}
      <h2 className="page-title">Our Facilities</h2>
      <div className="facilities-grid">
        {facilities.map((facility, index) => (
          <FacilityCard key={index} image={facility.image} title={facility.title} description={facility.description} />
        ))}
      </div>

      {/* Programs Section */}
      <section className="programs-section">
        <h2 className="programs-title">Programs for <span>Every Life Stage</span></h2>
        <div className="programs-container">
          {programList.map((prog, index) => (
            <div key={index} className="program-card">
              {prog.image && <img src={prog.image} alt={prog.title} className="program-image" />}
              <h3>{prog.title}</h3>
              <p>{prog.description}</p>

              <div className="who-section">
                <h4>Who It’s For</h4>
                <p>{prog.who}</p>
              </div>

              <div className="benefits-section">
                <h4>Benefits</h4>
                <ul>
                  {prog.benefits.map((point, i) => (
                    <li key={i}>✅ {point}</li>
                  ))}
                </ul>
              </div>

              <button className="program-btn" onClick={() => setShowPopup(true)}>Join</button>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <h2 className="page-title">Gallery</h2>
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <img key={i} src={img} alt={`Gallery ${i + 1}`} className="gallery-image" />
        ))}
      </div>

      {/* Testimonials */}
      <h2 className="page-title">What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <img src={t.photo} alt={t.name} className="testimonial-photo" />
            <p className="testimonial-review">“{t.review}”</p>
            <h4 className="testimonial-name">- {t.name}</h4>
          </div>
        ))}
      </div>

      <Footer />

      {/* Popup */}
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
    </div>
  );
};

export default FacilitiesPage;
