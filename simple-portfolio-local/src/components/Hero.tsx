import { Download, FileText, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Nikhil_Nath_P_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadCL = () => {
    const link = document.createElement('a');
    link.href = '/cover-letter.pdf';
    link.download = 'Nikhil_Nath_P_Cover_Letter.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center gradient-bg">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Nikhil</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-400 leading-relaxed">
              Experienced professional with 2+ years specializing in building scalable, 
              responsive web applications and SPAs using JavaScript frameworks like 
              Vue.js and React.js. Currently working at Motorola Mobility.
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
                className="text-2xl text-white hover:text-cyan-500 transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/kichu06" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-cyan-500 transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:nikhilnath6677@gmail.com"
                className="text-2xl text-white hover:text-cyan-500 transition-colors duration-300"
              >
                <Mail />
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-gray-900 flex items-center justify-center">
                <div className="text-6xl text-cyan-500">{'</>'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}