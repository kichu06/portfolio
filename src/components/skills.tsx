import {
  SiReact, SiVuedotjs, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiVite, SiOpenai,
  SiGithub, SiSass, SiMysql, SiFigma, SiJira
} from "react-icons/si";
import { FaRobot, FaComments } from "react-icons/fa";
import { motion } from 'framer-motion';


const devSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "SASS/SCSS", icon: SiSass, color: "#CC6699" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
];

const aiSkills = [
  { name: "ChatGPT", icon: SiOpenai, color: "#10A37F" },
  { name: "Claude AI", icon: FaComments, color: "#ffffff" },  // Placeholder color
  { name: "Cursor AI", icon: FaRobot, color: "#3B82F6" },     // Placeholder color
  { name: "GitHub Copilot", icon: SiGithub, color: "#ffffff" },
];

const otherSkills = [
  { name: "SQL", icon: SiMysql, color: "#4479A1" },
  { name: "JIRA", icon: SiJira, color: "#0052CC" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "VTEX CMS", icon: null },
  { name: "Flash CMS", icon: null },
  { name: "Web Security", icon: null },
  { name: "Mocha", icon: null },
  { name: "GitLab CI/CD", icon: null },
  { name: "Performance Optimization", icon: null },
  { name: "Accessibility", icon: null },
];

// Helper to generate initials from name
const getInitials = (name: string) =>
  name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export function SkillsSection() {
  return (
    <section id="skills" className="py-5 px-6 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gradient">Skills</h2>

      {/* Frontend Skills */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">Frontend & Dev Tools</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {devSkills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center text-white hover:text-[var(--accent-cyan)] transition"
            >
              <skill.icon size={40} className="mb-2" style={{ color: skill.color }} />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* AI Tools */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">AI & LLM Tools</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {aiSkills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              key={index}
              className="flex flex-col items-center text-white hover:text-[var(--accent-cyan)] transition"
            >
              <skill.icon size={40} className="mb-2" style={{ color: skill.color }} />
              <span className="text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Other Tools */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-6">Other Tools & Practices</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {otherSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white hover:text-[var(--accent-cyan)] transition"
            >
              {skill.icon ? (
                <skill.icon size={40} className="mb-2" style={{ color: skill.color }} />
              ) : (
                <motion.div
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  initial={{ opacity: 0, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }} key={index} className="w-10 h-10 mb-2 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">
                  {getInitials(skill.name)}
                </motion.div>
              )}
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
