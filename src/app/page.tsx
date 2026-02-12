import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="selection:bg-black selection:text-white">
      <Hero />
      <Projects />
      <About />
      <Services />
      <Contact />
    </main>
  );
}