import React, { useState, useEffect } from "react";
import { Download, FileText, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiReact, SiVuedotjs, SiNextdotjs } from "react-icons/si";

export function Hero() {
  const techIcons = [SiReact, SiVuedotjs, SiNextdotjs];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % techIcons.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const CurrentIcon = techIcons[index];

  const handleDownloadCV = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/portfolio/NIKHIL_NATH_P_Final_CV.pdf';
    link.download = 'NIKHIL_NATH_P_Final_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCL = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/portfolio/NIKHIL_NATH_P_CL.pdf';
    link.download = 'NIKHIL_NATH_P_CL.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg pt-20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Nikhil</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-400 leading-relaxed">
              Experienced front-end developer with 2+ years of expertise in building responsive web applications and SPAs using Vue.js, React.js, and Next.js. Proficient in CMS integration with VTEX and Flash, performance tuning, and accessibility compliance. Skilled in translating Figma designs into pixel-perfect UI, resolving complex UI bugs, and enhancing user experiences across global e-commerce platforms. Currently working at Motorola Mobility.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={handleDownloadCV}
                className="bg-cyan-500 hover:bg-blue-500 text-black px-6 py-3 font-semibold rounded-lg transition-colors duration-300 flex items-center"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </button>
              <button
                onClick={handleDownloadCL}
                className="border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black px-6 py-3 font-semibold rounded-lg transition-colors duration-300 flex items-center"
              >
                Download CL <FileText className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/nikhil-nath-222113221/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-[var(--accent-cyan)] transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/kichu06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-[var(--accent-cyan)] transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:nnkichu0609@gmail.com"
                className="text-2xl text-white hover:text-[var(--accent-cyan)] transition-colors duration-300"
              >
                <Mail />
              </a>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[var(--accent-cyan)] to-[var(--accent-blue)] animate-glow"></div>
              <div className="absolute inset-2 rounded-full bg-[var(--dark-secondary)] flex items-center justify-center">
                <div className="text-6xl">
                  <div className="text-8xl transition-transform duration-500 ease-in-out">
                  <CurrentIcon />
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

