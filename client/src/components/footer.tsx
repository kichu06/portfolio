import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

export function Footer() {
  const { scrollToSection } = useSmoothScroll();

  const footerLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <footer className="py-8 bg-[var(--dark-primary)] border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© 2024 Nikhil Nath P. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
            {footerLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.action}
                className="text-gray-400 hover:text-[var(--accent-cyan)] transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
