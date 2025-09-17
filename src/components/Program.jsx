import React from "react";

const programs = [
  {
    title: "Women's Specialized Training",
    description:
      "Comprehensive programs designed for women at every life stage, addressing unique physiological needs and goals.",
    tags: [
      "Prenatal & Postnatal",
      "Menopausal Support",
      "Perimenopausal",
      "Postmenopausal",
      "General Women’s Fitness",
    ],
  },
  {
    title: "Age-Specific Programs",
    description:
      "Tailored training approaches for every age group, from youth development to senior fitness.",
    tags: [
      "Youth Training",
      "Adult Fitness",
      "Senior Programs",
      "Active Aging",
      "Fall Prevention",
    ],
  },
  {
    title: "Sport-Specific Training",
    description:
      "Elite athletic training programs designed for peak performance in your chosen sport.",
    tags: ["Football", "Cricket", "Volleyball", "Basketball", "Golf", "General Athletics"],
  },
  {
    title: "Nutrition & Wellness",
    description:
      "Comprehensive nutrition coaching and weight management programs for sustainable results.",
    tags: [
      "Weight Loss",
      "Nutrition Planning",
      "Meal Prep",
      "Supplement Guidance",
      "Habit Formation",
    ],
  },
];

const Program = () => {
  return (
    <section className="sp-section">
      <div className="sp-container">
        {/* Left Content */}
        <div className="sp-content">
          <h2 className="sp-title">Specialized Programs</h2>
          <p className="sp-subtitle">
            Expert programs designed for specific populations, <br/>life stages, and athletic pursuits
          </p>
          
          <div className="sp-grid">
            {programs.map((program, index) => (
              <div key={index} className="sp-card">
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <div className="sp-tags">
                  {program.tags.map((tag, i) => (
                    <span key={i} className="sp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
