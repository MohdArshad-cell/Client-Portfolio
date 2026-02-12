"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SiteConfig } from "@/constants";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  // Hydration and Warning Fix
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
    // Normalized CAD-style coordinates
    setCoords({ 
      x: Math.round((e.clientX / (typeof window !== 'undefined' ? window.innerWidth : 1)) * 1000), 
      y: Math.round((e.clientY / (typeof window !== 'undefined' ? window.innerHeight : 1)) * 1000) 
    });
  };

  const taglineLines = ["Designing", "Spaces,", "Defining Lifestyles."];

  return (
    <motion.section 
      ref={containerRef} 
      initial={{ opacity: 0 }}
      animate={{ opacity: isMounted ? 1 : 0 }}
      transition={{ duration: 1 }}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black cursor-none"
    >
      {/* 1. TECHNICAL LAYER: Live Coordinate Readout */}
      <div className="absolute top-32 right-12 hidden lg:flex flex-col items-end gap-1 z-40 opacity-40 font-mono text-[8px] text-white pointer-events-none">
        <div className="flex gap-4">
          <span className="tracking-widest">X-POS: {coords.x}</span>
          <span className="tracking-widest">Y-POS: {coords.y}</span>
        </div>
        <div className="flex gap-4">
          <span className="tracking-widest">RENDER_MODE: HW_ACCEL</span>
          <span className="tracking-widest">FPS: 60.00</span>
        </div>
      </div>

      {/* 2. PRECISION LAYER: Architect's Crosshair */}
      <motion.div 
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        className="pointer-events-none fixed inset-0 z-50 mix-blend-difference hidden md:block"
        style={{ left: -20, top: -20 }}
      >
        <div className="relative h-10 w-10">
          <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-white/40" />
          <div className="absolute left-1/2 top-0 h-full w-[0.5px] bg-white/40" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
        </div>
      </motion.div>

      {/* 3. BACKGROUND LAYER: Cinematic Video & Interactive Grid */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/95 z-10" />
        
        {/* Subtle Noise Overlay */}
        <div className="absolute inset-0 z-20 opacity-[0.02] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicnLXK/giphy.gif')]" />

        {/* Blueprint Grid */}
        <div 
          className="absolute inset-0 z-10 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 70%)`,
            WebkitMaskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 70%)`
          }}
        />

        <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-[0.45]">
          <source src="/hero-clip.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* 4. CONTENT LAYER: Refined 3-Line Typography */}
      <div className="relative z-30 text-center px-6">
        <div className="overflow-hidden mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/30 uppercase text-[8px] tracking-[0.6em]"
          >
            Studio — {SiteConfig.name}
          </motion.p>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          {taglineLines.map((line, i) => (
            <div key={i} className="overflow-hidden py-1">
              <motion.h1 
                initial={{ scale: 0.9, opacity: 0, filter: "blur(12px)" }}
                animate={isMounted ? { scale: 1, opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.5 + (i * 0.15) 
                }}
                className="text-4xl md:text-6xl lg:text-7xl text-white uppercase font-extralight tracking-tight leading-[1.05] select-none"
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="mt-20"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-12 py-4 border border-white/10 rounded-full text-white text-[9px] uppercase tracking-[0.4em] transition-all duration-500 hover:border-white overflow-hidden"
          >
            <span className="relative z-10 mix-blend-difference">Explore Projects</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </a>
        </motion.div>
      </div>

      {/* 5. FOOTER DETAILS: Brand Identity */}
      <div className="absolute bottom-12 left-12 hidden lg:flex items-center gap-10 z-30">
        <div className="flex flex-col gap-1">
          <span className="text-[7px] text-white/20 uppercase tracking-widest">HQ Location</span>
          <span className="text-[10px] text-white/60 uppercase tracking-tighter">Lucknow, Uttar Pradesh</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div className="flex flex-col gap-1">
          <span className="text-[7px] text-white/20 uppercase tracking-widest">Current Era</span>
          <span className="text-[10px] text-white/60 uppercase tracking-tighter">MMXXVI</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;