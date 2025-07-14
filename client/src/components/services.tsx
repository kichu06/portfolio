import { Code, Smartphone, Layers, Zap, Store, Shield } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export function Services() {
  const { ref, isIntersecting } = useIntersectionObserver();

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Modern, responsive web applications using Vue.js, React.js, and cutting-edge technologies.",
      features: [
        "Single Page Applications (SPAs)",
        "Progressive Web Apps (PWAs)",
        "Component-Based Architecture",
        "Performance Optimization"
      ],
      color: "bg-[var(--accent-cyan)]",
      textColor: "text-[var(--dark-primary)]"
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect user experience across all devices and screen sizes.",
      features: [
        "Mobile-First Development",
        "Cross-Browser Compatibility",
        "Flexible Grid Systems",
        "Touch-Friendly Interfaces"
      ],
      color: "bg-[var(--accent-blue)]",
      textColor: "text-white"
    },
    {
      icon: Layers,
      title: "Component Libraries",
      description: "Reusable, well-documented component systems that scale with your business needs.",
      features: [
        "Reusable Components",
        "Storybook Documentation",
        "Design System Integration",
        "Code Maintainability"
      ],
      color: "bg-purple-500",
      textColor: "text-white"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Advanced techniques to improve loading times, user experience, and search engine rankings.",
      features: [
        "Code Splitting & Lazy Loading",
        "Image Optimization",
        "Bundle Size Reduction",
        "Lighthouse Audits"
      ],
      color: "bg-[var(--success-green)]",
      textColor: "text-[var(--dark-primary)]"
    },
    {
      icon: Store,
      title: "E-commerce Solutions",
      description: "VTEX platform integration and custom e-commerce features for enhanced online shopping.",
      features: [
        "VTEX Platform Integration",
        "Shopping Cart Development",
        "Payment Gateway Integration",
        "Conversion Rate Optimization"
      ],
      color: "bg-orange-500",
      textColor: "text-white"
    },
    {
      icon: Shield,
      title: "Web Accessibility",
      description: "WCAG compliant applications ensuring your website is accessible to all users.",
      features: [
        "WCAG 2.1 AA Compliance",
        "Screen Reader Support",
        "Keyboard Navigation",
        "Accessibility Audits"
      ],
      color: "bg-red-500",
      textColor: "text-white"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[var(--dark-primary)]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive frontend development services to bring your digital vision to life.
          </p>
        </div>
        
        <div ref={ref} className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div key={index} className="glass-card p-8 rounded-xl hover-lift text-center">
              <div className={`w-16 h-16 ${service.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <service.icon className={`text-2xl ${service.textColor}`} size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[var(--accent-cyan)]">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="text-sm text-gray-300 space-y-2 text-left">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
