import React from "react";
import { FaRunning, FaAppleAlt, FaBullseye, FaChartLine } from "react-icons/fa";


const Success = () => {
  const features = [
    {
      icon: <FaRunning />,
      title: "Habit Tracking",
      description: "Monitor daily habits and build lasting routines",
      color: "#9d87ec",
    },
    {
      icon: <FaAppleAlt />,
      title: "Nutrition Tracking",
      description: "Log meals and track nutritional goals",
      color: "#9d87ec",
    },
    {
      icon: <FaBullseye />,
      title: "Goal Setting",
      description: "Set and achieve personalized fitness milestones",
      color: "#9d87ec",
    },
    {
      icon: <FaChartLine />,
      title: "Progress Analytics",
      description: "Visualize your transformation journey",
      color: "#9d87ec",
    },
  ];

  return (
    <section className="track-success">
      <h2 className="track-title">Track Your Success</h2>
      <p className="track-subtitle">
        Comprehensive tracking tools to monitor progress and celebrate
        achievements
      </p>

      <div className="track-grid">
        {features.map((item, index) => (
          <div className="track-card" key={index}>
            <div
              className="track-icon"
              style={{ backgroundColor: item.color }}
            >
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Success;
