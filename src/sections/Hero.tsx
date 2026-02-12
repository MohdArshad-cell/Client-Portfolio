"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SiteConfig } from "@/constants";

const Hero = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* 1. Cinematic Background Entry Animation */}
      <motion.div 
        initial={{ scale: 1.3, clipPath: "inset(15% 15% 15% 15%)", opacity: 0 }}
        animate={{ scale: 1, clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
        transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }} // Smooth luxury ease
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-10" />
        <img
          src="/hero-arch.jpg" 
          alt="Cinematic Architecture"
          className="w-full h-full object-cover grayscale-[20%]"
        />
      </motion.div>

      {/* 2. Main Content (Delayed so it comes after BG starts) */}
      <div className="relative z-20 text-center px-6">
        <div className="overflow-hidden mb-4">
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1, ease: [0.33, 1, 0.68, 1] }}
            className="text-white/50 uppercase tracking-[0.5em] text-[10px]"
          >
            Studio — {SiteConfig.name}
          </motion.p>
        </div>
        
        <h1 className="flex flex-col items-center">
          {SiteConfig.tagline.split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden py-1">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ 
                  duration: 1.4, 
                  ease: [0.76, 0, 0.24, 1], 
                  delay: 1.2 + (i * 0.1) // Text comes in after image is mostly revealed
                }}
                className="block text-4xl md:text-7xl lg:text-8xl font-extralight text-white uppercase tracking-tighter leading-[1.1]"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-12"
        >
          <a 
            href="#projects" 
            className="group relative inline-flex items-center justify-center px-10 py-3 border border-white/10 rounded-full text-white text-[9px] uppercase tracking-[0.4em] transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10">View Portfolio</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out" />
          </a>
        </motion.div>
      </div>

      {/* 3. Scroll Indicator Line Animation */}
      <motion.div 
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 48 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] bg-white/20 overflow-hidden"
      >
        <motion.div 
          animate={{ y: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 bg-white h-1/3"
        />
      </motion.div>
    </section>
  );
};

export default Hero;