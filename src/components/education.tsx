import React from "react";
import { motion } from "framer-motion";
const education = [
  {
    institution: "Shree Devi Institute of Technology, Mangalore, Karnataka, India",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2018 – 2022",
    description:
      "Graduated with a strong foundation in Computer Science Engineering."
  }
];

export function EducationSection() {
  return (
    <section id="education" className="py-5 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gradient text-center">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div 
            key={index} 
            className="glass-card p-6 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
              <p className="text-[var(--accent-cyan)] mb-1">{edu.institution}</p>
              <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}