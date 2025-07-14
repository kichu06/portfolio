import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect, useState } from "react";

export function Skills() {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [animatedBars, setAnimatedBars] = useState(false);

  useEffect(() => {
    if (isIntersecting && !animatedBars) {
      setAnimatedBars(true);
    }
  }, [isIntersecting, animatedBars]);

  const skillCategories = [
    {
      title: "Languages",
      color: "text-[var(--accent-cyan)]",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Python", level: 75 },
      ]
    },
    {
      title: "Frameworks",
      color: "text-[var(--accent-cyan)]",
      skills: [
        { name: "Vue.js", level: 95 },
        { name: "React.js", level: 88 },
        { name: "Next.js", level: 80 },
      ]
    },
    {
      title: "Tools & Tech",
      color: "text-[var(--accent-cyan)]",
      skills: [
        { name: "SASS/CSS3", level: 92 },
        { name: "Git/GitHub", level: 87 },
        { name: "VTEX/CMS", level: 85 },
      ]
    }
  ];

  const techBadges = [
    "HTML5", "CSS3", "Sass", "Vuetify", "Bootstrap", "RESTful APIs", "Storybook", "Scrapy"
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--dark-primary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Technical Skills</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern frontend technologies with hands-on experience in building scalable applications.
          </p>
        </div>
        
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-card p-8 rounded-xl hover-lift">
              <h3 className={`text-xl font-semibold mb-6 ${category.color}`}>{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white">{skill.name}</span>
                      <span className="text-[var(--accent-cyan)]">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="skill-bar h-2 rounded-full"
                        style={{ 
                          width: animatedBars ? `${skill.level}%` : '0%',
                          transitionDelay: `${(categoryIndex * 3 + skillIndex) * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techBadges.map((tech, index) => (
              <span 
                key={index}
                className="bg-[var(--dark-tertiary)] px-4 py-2 rounded-full text-sm border border-[var(--accent-cyan)]/30 hover:border-[var(--accent-cyan)] transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
