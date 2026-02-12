"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { SiteConfig } from "@/constants";

const Hero = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 1. Kinetic Parallax Logic
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textWeight = useTransform(scrollYProgress, [0, 1], [100, 900]); // Font weight changes on scroll

  // 2. Interactive Grid Logic
  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black"
    >
      {/* FEATURE 1 & 3: Interactive Grid & Cinematic Background (Video/Image) */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10" />
        
        {/* Subtle Noise/Grain Overlay */}
        <div className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicnLXK/giphy.gif')]" />

        {/* Blueprint Grid Overlay */}
        <div 
          className="absolute inset-0 z-10 opacity-20 transition-opacity duration-1000"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, black, transparent 80%)`
          }}
        />

        {/* Video Background (Fallbacks to Image if video fails) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover grayscale brightness-50"
          poster="/hero-arch.jpg"
        >
          <source src="/hero-clip.mp4" type="video/mp4" />
          <img src="/hero-arch.jpg" alt="Fallback" />
        </video>
      </motion.div>

      {/* FEATURE 2: Kinetic Typography */}
      <div className="relative z-30 text-center px-6">
        <div className="overflow-hidden mb-6">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-white/40 uppercase text-[10px] md:text-xs"
          >
            {SiteConfig.name} — Architecture Studio
          </motion.p>
        </div>
        
        <h1 className="flex flex-col items-center select-none">
          {SiteConfig.tagline.split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden h-fit py-2">
              <motion.span
                style={{ fontWeight: textWeight }}
                initial={{ y: "100%", rotate: 10 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.76, 0, 0.24, 1], 
                  delay: 0.5 + (i * 0.1) 
                }}
                // YAHAN CHANGE KIYA HAI: Sizes ko chhota kiya gaya hai
                className="block text-3xl md:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[0.9]"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        {/* FEATURE 4: Adaptive Button (Magnetic-like Feel) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-12 py-5 border border-white/10 rounded-full text-white text-[10px] uppercase tracking-[0.4em] transition-all duration-700 hover:scale-105 hover:border-white overflow-hidden"
          >
            <span className="relative z-10 mix-blend-difference">Discover Projects</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Status (Futuristic UI Detail) */}
      <div className="absolute bottom-10 left-10 hidden lg:flex items-center gap-6 z-30">
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-white/30 uppercase tracking-widest">Location</span>
          <span className="text-[10px] text-white uppercase tracking-tighter">Lucknow, IN</span>
        </div>
        <div className="w-[1px] h-8 bg-white/10" />
        <div className="flex flex-col gap-1">
          <span className="text-[8px] text-white/30 uppercase tracking-widest">Establishment</span>
          <span className="text-[10px] text-white uppercase tracking-tighter">MMXXVI</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;