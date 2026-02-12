"use client";

import { motion } from "framer-motion";
import { SiteConfig } from "@/constants";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image - Yahan apni image ka path dena */}
      <div className="absolute inset-0 z-0 opacity-60">
        <img
          src="/hero-arch.jpg" 
          alt="Architectural Design"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-4"
        >
          Welcome to {SiteConfig.name}
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-light text-white uppercase tracking-tighter leading-tight max-w-4xl mx-auto"
        >
          {SiteConfig.tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-10"
        >
          <a 
            href="#projects" 
            className="border border-white/30 text-white px-8 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Explore Projects
          </a>
        </motion.div>
      </div>

      {/* Bottom Detail (Scroll Indicator) */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Hero;