import React from 'react'
import { motion } from 'framer-motion';
const experiences = [
  {
    company: "Motorola Mobility (Lenovo)",
    role: "Frontend Developer",
    period: "Jul 2024 – Mar 2026",
    bullets: [
      "Migrated multiple VTEX portals to in-house Flash CMS using Vue.js and SASS.",
      "Developed reusable UI components and integrated React modules.",
      "Improved web accessibility from 70% to 92% using WCAG-compliant practices.",
      "Collaborated with cross-geo design teams (US & India) to implement responsive Figma designs.",
      "Developed backend automation workflows using Python and FastAPI to streamline operational processes.",
      "Resolved 100+ cross-browser and UI-specific bugs during QA and UAT cycles.",
      "Integrated widgets using script tags on specific meta targets for headless CMS.",
      "Integrated REST APIs and optimized frontend load times using performance audits.",
      "Leveraged AI-assisted development tools to accelerate implementation, debugging, and code optimization."
    ]
  },
  {
    company: "Lenovo India Pvt. Ltd.",
    role: "Web Developer",
    period: "Jan 2023 – Jul 2024",
    bullets: [
      "Delivered 15+ frontend features for 8 successful global product launches using Vue.js and Vuetify.",
      "Reduced layout bugs and improved mobile session metrics by 25% with responsive design.",
      "Collaborated closely with UX teams and QA to deliver high-quality interfaces.",
      "Worked with Agile/Scrum teams to ship weekly feature updates and fixes.",
      "Followed web security practices: sanitized inputs, configured CSP headers, and managed domain whitelisting.",
    ]
  }
];


export function ExperienceSection() {
  return (
    <section id="experience" className="py-5  text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-gradient text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="glass-card p-6 rounded-xl "
            >
              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-[var(--accent-cyan)] mb-1">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
                {exp.bullets.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

