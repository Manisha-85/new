import React from "react";
import { FaUserFriends, FaUsers, FaHeartbeat } from "react-icons/fa";


const Training= () => {
  const options = [
    {
      icon: <FaUserFriends />,
      title: "Online Personal Training",
      description:
        "One-on-one virtual sessions with personalized programming and real-time feedback",
      button: "Learn More",
      color: "#9d87ec",
    },
    {
      icon: <FaUsers />,
      title: "Group Training",
      description:
        "Motivating group sessions that combine expert coaching with community support",
      button: "Join Groups",
      color: "#9d87ec",
    },
    {
      icon: <FaHeartbeat />,
      title: "Hybrid Training",
      description:
        "Perfect blend of personal and group training for maximum flexibility and results",
      button: "Get Started",
      color: "#9d87ec",
    },
  ];

  return (
    <section className="training-section">
      <h2 className="training-title">Training Options</h2>
      <p className="training-subtitle">
        Choose the training style that fits your lifestyle and preferences
      </p>

      <div className="training-container">
        {options.map((opt, i) => (
          <div key={i} className="training-card">
            <div className="icon-box" style={{ backgroundColor: opt.color }}>
              {opt.icon}
            </div>
            <h3>{opt.title}</h3>
            <p>{opt.description}</p>
            <button style={{ backgroundColor: opt.color }}>{opt.button}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Training;
