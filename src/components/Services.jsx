import React from "react";
import { motion } from "framer-motion";
import { Dumbbell, Heart, Activity, Target } from "lucide-react"; // icons

const services = [
  {
    icon: <Dumbbell size={40} />,
    title: "Strength & Conditioning",
    description:
      "Build lean muscle, increase strength, and improve overall conditioning with personalized programs.",
    points: [
      "Progressive overload training",
      "Compound movement focus",
      "Injury prevention protocols",
      "Performance tracking",
    ],
  },
  {
    icon: <Heart size={40} />,
    title: "Endurance Training",
    description:
      "Enhance cardiovascular fitness and stamina through targeted endurance protocols.",
    points: [
      "VO2 max improvement",
      "Aerobic base building",
      "Interval training",
      "Sport-specific conditioning",
    ],
  },
  {
    icon: <Activity size={40} />,
    title: "Corrective Exercise",
    description:
      "Address movement dysfunctions and imbalances with targeted corrective strategies.",
    points: [
      "Movement assessment",
      "Postural correction",
      "Pain reduction protocols",
      "Mobility enhancement",
    ],
  },
  {
    icon: <Target size={40} />,
    title: "Body Composition",
    description:
      "Transform your physique with specialized fat loss and muscle building programs.",
    points: [
      "Fat loss strategies",
      "Muscle hypertrophy",
      "Metabolic optimization",
      "Body recomposition",
    ],
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <motion.h2
          className="services-title"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Core Training Services
        </motion.h2>
        <motion.p
          className="services-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Comprehensive fitness solutions tailored to your individual needs and goals
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
  key={index}
  className="service-card"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.3, duration: 0.8 }}
>
  <div className="icon-wrap">{service.icon}</div>
  <h3>{service.title}</h3>
  <p>{service.description}</p>
  <ul>
    {service.points.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
