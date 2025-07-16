import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    const top = document.getElementById("home");
    if (top) top.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-t from-[var(--dark-secondary)] to-black text-gray-400 border-t border-[var(--border)] py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={scrollToTop} 
            className="flex items-center text-white hover:text-[var(--accent-cyan)] transition"
          >
            <ArrowUp className="w-4 h-4 mr-1" />
            Back to Top
          </button>
        </div>

        <div className="flex space-x-6">
          <a 
            href="https://www.linkedin.com/in/nikhil-nath-222113221/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-cyan)] transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://github.com/kichu06" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-cyan)] transition"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="mailto:nnkichu0609@gmail.com"
            className="hover:text-[var(--accent-cyan)] transition"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-sm">&copy; {new Date().getFullYear()} Nikhil Nath. All rights reserved.</p>
      </div>
    </footer>
  );
}
