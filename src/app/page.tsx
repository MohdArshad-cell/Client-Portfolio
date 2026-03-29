"use client"; // 1. Sabse upar ye line add karle

import dynamic from 'next/dynamic';
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Services from "@/sections/Services";
import Contact from "@/sections/Contact";

// Projects ko dynamic load kar, SSR disable karke
const Projects = dynamic(() => import("@/sections/Projects"), { 
  ssr: false,
  loading: () => <div className="h-screen bg-[#050505]" /> // Loading placeholder
});

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