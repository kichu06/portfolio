// This file contains responsive UI sections: Projects, Skills, Experience, Education
// All data is dynamic via arrays for easy expansion or removal

// ProjectSection.tsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Responsive Menu Cart",
    description:
      "A dynamic e-commerce menu cart that displays products responsively with smooth user interaction.",
    tech: ["Vue.js", "SASS", "HTML", "CSS", "JavaScript"],
    demoLink: "https://kichu06.github.io/responsive-menu-cart/",
    githubLink: "https://github.com/kichu06/responsive-menu-cart",
  },
  {
    title: "Responsive Landing Page",
    description:
      "An optimized landing page demonstrating responsive design techniques across devices.",
    tech: ["Vue.js", "SASS", "HTML", "CSS"],
    demoLink: "https://kichu06.github.io/Responsive-landing-page/",
    githubLink: "https://github.com/kichu06/Responsive-landing-page",
  },
   {
    title: "Responsive Image Slider",
    description:
      "An image carousel built with HTML, CSS, and JavaScript. Fully responsive across devices.",
    tech: ["HTML", "CSS", "Vue.js"],
    demoLink: "https://kichu06.github.io/Responsive-image-slider/",
    githubLink: "https://github.com/kichu06/Responsive-image-slider",
  },
  {
    title: "Responsive Form",
    description:
      "A responsive contact form styled for modern web use. Built with HTML and CSS only.",
    tech: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://kichu06.github.io/Responsive-form/",
    githubLink: "https://github.com/kichu06/Responsive-form",
  },
{
  title: "Responsive Newsletter Form",
  description:
    "A sleek, responsive newsletter subscription form with clean layout and styling for modern web designs.",
  tech: ["HTML", "CSS", "JavaScript"],
  demoLink: "https://kichu06.github.io/responsive-newsletter-form/",
  githubLink: "https://github.com/kichu06/responsive-newsletter-form"
}

];

export function ProjectSection() {
  return (
    <section id="projects" className="py-5 ">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold py-2 mb-10 text-gradient">Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-xl shadow-md text-left flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="px-2 py-1 text-sm bg-gray-700 text-white rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demoLink}
                  target="_blank"
                  className="text-cyan-400 hover:underline flex items-center"
                >
                  Live Demo <FaExternalLinkAlt className="ml-2" size={14} />
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  className="text-gray-400 hover:underline flex items-center"
                >
                  GitHub <FaGithub className="ml-2" size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
