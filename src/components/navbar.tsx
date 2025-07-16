import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close menu on nav click
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[var(--accent-cyan)]">Nikhil</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <button onClick={() => handleScroll("home")} className="text-white hover:text-[var(--accent-cyan)] transition">
            About
          </button>
          <button onClick={() => handleScroll("skills")} className="text-white hover:text-[var(--accent-cyan)] transition">
            Skills
          </button>
          <button onClick={() => handleScroll("experience")} className="text-white hover:text-[var(--accent-cyan)] transition">
            Experience
          </button>
          <button onClick={() => handleScroll("education")} className="text-white hover:text-[var(--accent-cyan)] transition">
            Education
          </button>
           <button onClick={() => handleScroll("projects")} className="text-white hover:text-[var(--accent-cyan)] transition">
            Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="text-white hover:text-[var(--accent-cyan)] transition">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg px-6 py-4 space-y-4">
          <button onClick={() => handleScroll("home")} className="block w-full text-left text-white hover:text-[var(--accent-cyan)]">
            About
          </button>
          <button onClick={() => handleScroll("skills")} className="block w-full text-left text-white hover:text-[var(--accent-cyan)]">
            Skills
          </button>
          <button onClick={() => handleScroll("experience")} className="block w-full text-left text-white hover:text-[var(--accent-cyan)]">
            Experience
          </button>
          <button onClick={() => handleScroll("education")} className="block w-full text-left text-white hover:text-[var(--accent-cyan)]">
            Education
          </button>
           <button onClick={() => handleScroll("projects")} className="block w-full text-left text-white hover:text-[var(--accent-cyan)]">
            Projects
          </button>
          <button onClick={() => handleScroll("contact")} className="block w-full text-left text-white hover:text-[var(--accent-cyan)]">
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
