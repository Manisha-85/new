import React, { useState, useEffect } from "react";
import TrainerCard from "./TrainerCard";
import trainer1 from "../../../assets/Trainer1.jpg";
import trainer2 from "../../../assets/Trainer2.jpg";
import trainer3 from "../../../assets/Trainer3.jpg";
import trainer4 from "../../../assets/Trainer4.jpg";
import facebookIcon from "../../../assets/Facebook.png";
import instagramIcon from "../../../assets/instagram.png";
import twitterIcon from "../../../assets/Twitter.png";
import "../../../CSS/TrainersPage.css";
import Footer from "../../Footer";

const TrainersPage = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const trainers = [
    {
      image: trainer1,
      name: "Rahul Mehta",
      specialty: "Strength & Conditioning Coach",
      experience: 8,
      socials: [
        { icon: facebookIcon, link: "https://facebook.com" },
        { icon: instagramIcon, link: "https://instagram.com" },
        { icon: twitterIcon, link: "https://twitter.com" }
      ]
    },
    {
      image: trainer2,
      name: "Sneha Kapoor",
      specialty: "Yoga & Wellness Expert",
      experience: 6,
      socials: [
        { icon: facebookIcon, link: "https://facebook.com" },
        { icon: instagramIcon, link: "https://instagram.com" }
      ]
    },
    {
      image: trainer3,
      name: "Amit Sharma",
      specialty: "Personal Trainer & Nutritionist",
      experience: 10,
      socials: [
        { icon: instagramIcon, link: "https://instagram.com" },
        { icon: twitterIcon, link: "https://twitter.com" }
      ]
    },
    {
      image: trainer4,
      name: "Priya Nair",
      specialty: "Zumba & Cardio Specialist",
      experience: 5,
      socials: [
        { icon: facebookIcon, link: "https://facebook.com" },
        { icon: instagramIcon, link: "https://instagram.com" }
      ]
    }
  ];

  if (!showPage) {
    return null; 
  }

  return (
    <div className="trainers-page">
      <h2 className="page-title">Meet Our Expert Trainers</h2>
      <p className="page-subtitle">
        Our professional trainers are here to guide you in every step of your fitness journey.
      </p>
      <div className="trainers-grid">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} {...trainer} />
        ))}
      </div>
    <Footer/>
    </div>
    
  );
};

export default TrainersPage;
