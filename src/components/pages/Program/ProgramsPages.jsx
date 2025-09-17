import React, { useState, useEffect } from "react";
import ProgramCard from "./ProgramCard";
import PricingCard from "./PricingCard";
import mucleImg from "../../../assets/mucle.png";
import correctiveImg from "../../../assets/Corrective.png";  
import youthImg from "../../../assets/Youth.png"; 
import weightlossImg from "../../../assets/Weightloss.png"; 
import "../../../CSS/Programspages.css";
import Footer from "../../Footer";

const ProgramsPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPage(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const programs = [
   
     {
      image: mucleImg,
      title: " Lean Muscle Building Program",
      tagline: " Build Strength. Build Confidence. Build You.",
      description:
        "Our Lean Muscle Building Program is designed to help you build muscle, increase strength, and improve your body composition. We offer customized training programs and nutrition guidance to optimize muscle growth and achieve your desired physique.",
      whoFor:
        " Individuals looking to build muscle, increase strength, and improve their body composition.",
      
        benefits: [
        " Increased muscle mass",
        "Improved strength and power",
        "Enhanced metabolism",
        " Improved body composition",
        "Increased confidence and self-esteem",
      ]
    },
    {
      image: correctiveImg,
      title: "Corrective Exercise Program",
      tagline: "Restore. Rebuild. Realign.",
      description:
        "Our Corrective Exercise Program focuses on identifying and addressing muscle imbalances and movement dysfunctions to alleviate pain and improve overall function. We use targeted exercises and techniques to restore proper alignment, improve mobility, and prevent future injuries.",
      whoFor:
        "Individuals experiencing chronic pain, recovering from injuries, or looking to improve their posture and movement patterns.",
      benefits: [
        "Reduced pain and discomfort",
        "Improved posture and alignment",
        "Increased mobility and flexibility",
        "Enhanced athletic performance",
        "Prevention of future injuries"
      ]
    },
   
    {
      image: youthImg,
      title: "Youth Fitness Program",
      tagline: "Building Healthy Habits for Life.",
      description:
        "Our Youth Fitness Program promotes physical activity, healthy eating habits, and overall well-being in children and adolescents. We offer fun and engaging exercises that build strength, endurance, and coordination, fostering a lifelong love of fitness.",
      whoFor:
        "Children and adolescents looking to improve their fitness, develop healthy habits, and build confidence.",
      benefits: [
        "Improved physical fitness",
        "Development of healthy habits",
        "Increased confidence and self-esteem",
        "Better academic performance",
        "Reduced risk of childhood obesity and related health problems"
      ]
    },
    {
      image: weightlossImg,
      title: "Weight Loss Coaching Program",
      tagline: "Transform Your Body, Transform Your Life.",
      description:
        "Our Weight Loss Coaching Program provides personalized guidance and support to help you achieve your weight loss goals. We offer customized nutrition plans, exercise programs, and behavior modification strategies to promote sustainable weight loss and improved overall health.",
      whoFor:
        "Individuals looking to lose weight, improve their eating habits, and adopt a healthier lifestyle.",
      benefits: [
        "Sustainable weight loss",
        "Improved eating habits",
        "Increased energy levels",
        "Reduced risk of chronic diseases",
        "Improved overall health and well-being"
      ]
    }
  ];

  const pricingPlans = [
    {
      title: "Basic",
      price: "2500/mo",
      features: ["Access to Gym", "1 Program", "Community Support"]
    },
    {
      title: "Standard",
      price: "4999/mo",
      features: [
        "Access to Gym",
        "3 Programs",
        "Personal Trainer",
        "Diet Plan"
      ]
    },
    {
      title: "Premium",
      price: "7999/mo",
      features: [
        "All Access",
        "Unlimited Programs",
        "Personal Trainer",
        "Diet + Yoga"
      ]
    }
  ];

  const handlePlanChoose = (planTitle) => {
    setSelectedPlan(planTitle);
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!showPage) {
    return null;
  }

  return (
    <div className="programs-page">
      {/* Programs Section */}
      <h2 className="page-title">Our Fitness Programs</h2>
      <div className="programs-grid">
        {programs.map((program, index) => (
          <ProgramCard
            key={index}
            image={program.image}
            title={program.title}
            tagline={program.tagline}
            description={program.description}
            whoFor={program.whoFor}
            benefits={program.benefits}
          />
        ))}
      </div>

      {/* Pricing Section */}
      <h2 className="page-title">Pricing Plans</h2>
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            onChoose={handlePlanChoose}
          />
        ))}
      </div>

      {/* Join Now Form */}
      <h2 className="page-title">Join Now</h2>
      <form className="join-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <select
          value={selectedPlan}
          onChange={(e) => setSelectedPlan(e.target.value)}
          required
        >
          <option value="">Select Program</option>
          <option value="Basic">Basic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        <button type="submit">Submit</button>
      </form>

      <Footer />
    </div>
  );
};

export default ProgramsPage;
