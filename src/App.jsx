import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Contact from "./components/Contact";
import { ShieldCheck } from "lucide-react";

function App() {
  return (
    <div className="noise min-h-screen overflow-hidden bg-[#060a12] text-slate-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
      <footer className="border-t border-slate-800 bg-[#060a12]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <div className="flex items-center gap-2">
            <span className="mono text-teal-300">ST</span>
            <span>© {new Date().getFullYear()} Sohaib Toubal</span>
          </div>
          <p className="flex items-center gap-1.5">
            Designed for secure, intelligent systems <ShieldCheck size={14} className="text-teal-300" />
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
