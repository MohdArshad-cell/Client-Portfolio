"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { SiteConfig } from "@/constants";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // 1. HIGH-PERFORMANCE MOUSE TRACKING (For Parallax Depth)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs to avoid jitter
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, [mouseX, mouseY]);

  // 2. SCROLL ANIMATIONS (Video & Text)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Mouse Parallax for the Text Layer
  const rotateX = useTransform(springY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Blueprint dynamic crosshair (Using MotionValues directly)
  const blueprintX = useTransform(springX, [-0.5, 0.5], ["-20%", "20%"]);
  const blueprintY = useTransform(springY, [-0.5, 0.5], ["-20%", "20%"]);

  const taglineLines = ["Architecting", "Spaces.", "Defining Lifestyles."];

  return (
    <motion.section 
      ref={containerRef} 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505] selection:bg-white selection:text-black"
    >
      {/* BACKGROUND LAYER 01: Optimized Cinematic Video with Scroll Scaling */}
      <motion.div style={{ scale: videoScale, opacity }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-[#050505] z-10" />
        <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-[0.4]">
          <source src="/hero-clip.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* BACKGROUND LAYER 02: Elite Interactive Blueprint Grid */}
      {/* Instead of just a static grid, this moves with your mouse. [cite: 2025-10-20] */}
      <motion.div 
        style={{ x: blueprintX, y: blueprintY, opacity: 0.15 }}
        className="absolute inset-0 z-10 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }}
      />
      {/* Moving dynamic crosshair guides [cite: 2025-10-20] */}
      <motion.div style={{ x: springX, y: springY }} className="absolute inset-0 z-10 pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white" />
      </motion.div>

      {/* CONTENT LAYER: Refined Kinetic Typography with 3D Parallax */}
      <motion.div 
        style={{ y: textY, rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative z-30 text-center px-6"
      >
        <div className="overflow-hidden mb-6">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isMounted ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-white/40 uppercase text-[9px] tracking-[0.8em] font-light"
          >
            Studio — {SiteConfig.name}
          </motion.p>
        </div>
        
        <div className="flex flex-col items-center gap-1">
          {taglineLines.map((line, i) => (
            <div key={i} className="overflow-hidden h-[50px] md:h-[90px] lg:h-[110px]">
              <motion.h1 
                initial={{ y: "100%" }}
                animate={isMounted ? { y: 0 } : {}}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + (i * 0.15) 
                }}
                className={`text-5xl md:text-8xl lg:text-9xl text-white uppercase font-light tracking-tighter leading-[1.05] ${
                  i === 1 ? 'text-white/20 italic' : '' // 'elite' fade and italic for 'SPACES.'
                }`}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isMounted ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-20"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-16 py-5 border border-white/5 rounded-full text-white text-[10px] uppercase tracking-[0.5em] transition-all duration-700 hover:border-white/40 overflow-hidden"
          >
            <span className="relative z-10 mix-blend-difference">SCROLL_TO_EXPLORE // MMXXVI</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </a>
        </motion.div>
      </motion.div>

      {/* SYSTEM HUD UI: Minimalist System Status Readout */}
      <div className="absolute bottom-12 left-12 hidden lg:flex flex-col gap-1 z-40">
        <div className="flex gap-4">
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">System_Sync: ACTIVE</span>
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">Geocode: {SiteConfig.location}</span>
        </div>
        <div className="flex gap-4">
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">Render_Mode: HW_ACCEL</span>
          <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">Status: MMXXVI</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;