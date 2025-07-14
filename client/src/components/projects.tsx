import { ExternalLink, Github, Briefcase, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Projects() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const projects = [
    {
      title: "Responsive Menu Cart",
      description: "Dynamic e-commerce cart with smooth interactions and responsive design for optimal shopping experience.",
      technologies: ["Vue.js", "SASS", "JavaScript"],
      icon: "🛒",
      gradient: "from-[var(--accent-cyan)] to-[var(--accent-blue)]",
      liveUrl: "https://kichu06.github.io/responsive-menu-cart/",
      githubUrl: "#",
      status: "Live"
    },
    {
      title: "Responsive Landing Page",
      description: "Clean, adaptable landing page showcasing responsive design techniques across all devices.",
      technologies: ["Vue.js", "SASS", "CSS3"],
      icon: "💻",
      gradient: "from-purple-500 to-pink-500",
      liveUrl: "https://kichu06.github.io/Responsive-landing-page/",
      githubUrl: "#",
      status: "Live"
    },
    {
      title: "VTEX Integration Platform",
      description: "Integrated 20+ React modules into VTEX platform, improving load times by 15% and conversion rates.",
      technologies: ["React.js", "VTEX", "TypeScript"],
      icon: "🏪",
      gradient: "from-green-500 to-teal-500",
      isEnterprise: true,
      status: "Completed"
    },
    {
      title: "Python Scrapy Automation Bot",
      description: "Automated product data entry system that reduced manual workload by 95%, saving 10+ hours weekly.",
      technologies: ["Python", "Scrapy", "Automation"],
      icon: "🤖",
      gradient: "from-orange-500 to-red-500",
      isEnterprise: true,
      status: "Active"
    },
    {
      title: "Vue.js Component Library",
      description: "Developed 15+ reusable components with Storybook documentation, boosting code reusability by 40%.",
      technologies: ["Vue.js", "Storybook", "SASS"],
      icon: "🧩",
      gradient: "from-blue-500 to-indigo-500",
      isEnterprise: true,
      status: "In Use"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-[var(--dark-secondary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and contributions to modern web development.
          </p>
        </div>
        
        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div key={index} className="glass-card rounded-xl overflow-hidden hover-lift project-card group">
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-4xl">{project.icon}</div>
                <div className="absolute inset-0 project-overlay bg-[var(--dark-primary)]/80 flex items-center justify-center">
                  <div className="text-center">
                    {project.isEnterprise ? (
                      <>
                        <Briefcase className="text-2xl text-[var(--accent-cyan)] mb-2 mx-auto" size={32} />
                        <p className="text-[var(--accent-cyan)]">Enterprise Project</p>
                      </>
                    ) : (
                      <>
                        <ExternalLink className="text-2xl text-[var(--accent-cyan)] mb-2 mx-auto" size={32} />
                        <p className="text-[var(--accent-cyan)]">View Project</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[var(--accent-cyan)]">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs bg-[var(--dark-primary)] px-2 py-1 rounded text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  {project.isEnterprise ? (
                    <span className="text-gray-500 flex items-center">
                      <Briefcase className="mr-2" size={16} />
                      Enterprise
                    </span>
                  ) : (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[var(--accent-cyan)] hover:text-[var(--accent-blue)] transition-colors flex items-center"
                    >
                      <ExternalLink className="mr-2" size={16} />
                      Live Demo
                    </a>
                  )}
                  <span className="text-[var(--success-green)] flex items-center">
                    <CheckCircle className="mr-2" size={16} />
                    {project.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
