import {
  SiReact, SiVuedotjs, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiCss3, SiTailwindcss, SiGit, SiVite, SiOpenai,
  SiGithub, SiSass, SiMysql
} from "react-icons/si";
import { FaRobot, FaComments } from "react-icons/fa";

// Group 1: Core Frontend Skills
const devSkills = [
  { name: "React", icon: SiReact },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "SASS/SCSS", icon: SiSass },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "Vite", icon: SiVite },
];

// Group 2: AI & Productivity Tools
const aiSkills = [
  { name: "ChatGPT", icon: SiOpenai },
  { name: "Claude AI", icon: FaComments },
  { name: "Cursor AI", icon: FaRobot },
  { name: "GitHub Copilot", icon: SiGithub },
];

// Group 3: Other Tools & Practices
const otherSkills = [
  { name: "SQL", icon: SiMysql },
  { name: "VTEX CMS", icon: null },
  { name: "Flash CMS", icon: null },
  { name: "Web Security", icon: null },
  { name: "Mocha", icon: null },
  { name: "GitLab CI/CD", icon: null },
  { name: "Performance Optimization", icon: null },
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
    <section id="skills" className="py-5 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gradient">Skills</h2>

      {/* Frontend Skills */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">Frontend & Dev Tools</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {devSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white hover:text-[var(--accent-cyan)] transition"
            >
              <skill.icon size={40} className="mb-2" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* AI Tools */}
      <div className="mb-12">
        <h3 className="text-xl font-semibold text-white mb-6">AI & LLM Tools</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {aiSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-white hover:text-[var(--accent-cyan)] transition"
            >
              <skill.icon size={40} className="mb-2" />
              <span className="text-sm font-medium">{skill.name}</span>
            </div>
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
                <skill.icon size={40} className="mb-2" />
              ) : (
                <div className="w-10 h-10 mb-2 rounded-full bg-gray-700 flex items-center justify-center text-sm font-semibold">
                  {getInitials(skill.name)}
                </div>
              )}
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
