import { Download, FileText, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Hero() {
  const { toast } = useToast();

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/api/download/cv');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Nikhil_Nath_P_CV.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast({
          title: "Success",
          description: "CV downloaded successfully!",
        });
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download CV. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDownloadCL = async () => {
    try {
      const response = await fetch('/api/download/cover-letter');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Nikhil_Nath_P_Cover_Letter.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
        toast({
          title: "Success",
          description: "Cover Letter downloaded successfully!",
        });
      } else {
        throw new Error('Download failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download Cover Letter. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-gradient">Nikhil</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg mb-8 text-gray-400 leading-relaxed">
              Experienced professional with 2+ years specializing in building scalable, responsive web applications 
              and SPAs using JavaScript frameworks like Vue.js and React.js. Currently working at Motorola Mobility.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button 
                onClick={handleDownloadCV}
                className="bg-[var(--accent-cyan)] hover:bg-[var(--accent-blue)] text-[var(--dark-primary)] px-6 py-3 font-semibold hover-lift"
              >
                Download CV <Download className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                onClick={handleDownloadCL}
                variant="outline"
                className="border-2 border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--dark-primary)] px-6 py-3 font-semibold hover-lift"
              >
                Download CL <FileText className="ml-2 h-4 w-4" />
              </Button>
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
                href="mailto:nikhilnath6677@gmail.com"
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
                <div className="text-6xl text-[var(--accent-cyan)]">{'</>'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
