import { Navbar } from "./components/navbar";
import { Hero } from "@/components/hero-frontend";
import { SkillsSection } from "./components/skills";
import { ExperienceSection } from "./components/experience";
import { EducationSection } from "./components/education";
import {ProjectSection} from "@/components/project";
import { Contact } from "@/components/contact-frontend";
import { Footer } from "./components/footer";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <main className=" bg-[var(--dark-secondary)]">
        <Hero />
        <SkillsSection/>
        <ExperienceSection />
        <EducationSection/>
        <ProjectSection/>
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;