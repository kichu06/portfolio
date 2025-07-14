import { Code, Zap, Users, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function About() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const achievements = [
    {
      icon: Code,
      title: "15+ Reusable Components",
      description: "Boosted code modularity by 40%",
      color: "bg-[var(--success-green)]"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Improved page load times by 15%",
      color: "bg-[var(--accent-cyan)]"
    },
    {
      icon: Users,
      title: "Accessibility Excellence",
      description: "Elevated score from 70% to 92%",
      color: "bg-[var(--accent-blue)]"
    },
    {
      icon: Award,
      title: "Automation Expert",
      description: "Saved 10+ hours weekly with Python bot",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[var(--dark-secondary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Passionate frontend developer with expertise in modern web technologies and a track record of delivering high-quality applications.
          </p>
        </div>
        
        <div ref={ref} className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-cyan)]">Professional Journey</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-[var(--accent-cyan)] pl-6">
                <h4 className="text-xl font-semibold mb-2">Frontend Developer</h4>
                <p className="text-gray-400 mb-1">Motorola Mobility (Lenovo Company)</p>
                <p className="text-sm text-gray-500">July 2024 - Present</p>
                <p className="text-gray-300 mt-2">
                  Crafting reusable Vue.js components, integrating React modules into VTEX platform, 
                  and improving web accessibility scores by 22%.
                </p>
              </div>
              
              <div className="border-l-4 border-[var(--accent-blue)] pl-6">
                <h4 className="text-xl font-semibold mb-2">Web Developer</h4>
                <p className="text-gray-400 mb-1">Lenovo India Pvt. Ltd.</p>
                <p className="text-sm text-gray-500">January 2023 - July 2024</p>
                <p className="text-gray-300 mt-2">
                  Delivered 15+ frontend features, developed dynamic SPAs, and implemented 
                  responsive designs that boosted mobile engagement by 25%.
                </p>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-[var(--accent-cyan)]">Key Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center`}>
                    <achievement.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
