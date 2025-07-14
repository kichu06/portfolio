import { Hero } from "@/components/hero-frontend";
import { Contact } from "@/components/contact-frontend";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[var(--dark-primary)] text-white">
      <main>
        <Hero />
        <Contact />
      </main>
    </div>
  );
}

export default App;