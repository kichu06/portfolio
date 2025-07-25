const experiences = [
  {
    company: "Motorola Mobility (Lenovo)",
    role: "Frontend Developer",
    period: "Jul 2024 – Present",
    bullets: [
      "Migrated multiple VTEX portals to in-house Flash CMS using Vue.js and SASS.",
      "Developed reusable UI components and integrated React modules.",
      "Improved web accessibility from 70% to 92% using WCAG-compliant practices.",
      "Collaborated with cross-geo design teams (US & India) to implement responsive Figma designs.",
      "Automated product entry using a Python Scrapy bot, reducing manual work by 40%.",
      "Resolved 100+ cross-browser and UI-specific bugs during QA and UAT cycles.",
        "Integrated widgets using script tags on specific meta targets for headless CMS.",
      "Integrated REST APIs and optimized frontend load times using performance audits."
    ]
  },
  {
    company: "Lenovo India Pvt. Ltd.",
    role: "Web Developer",
    period: "Jan 2023 – Jul 2024",
    bullets: [
      "Built dynamic SPAs using Vue.js, Vuetify, and JavaScript for global product pages.",
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
            <div key={index} className="glass-card p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-1">{exp.role}</h3>
              <p className="text-[var(--accent-cyan)] mb-1">{exp.company}</p>
              <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 text-left">
                {exp.bullets.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

