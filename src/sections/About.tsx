"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AboutData } from "@/constants";
import Image from "next/image";

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Scroll Parallax for the main image [cite: 2025-10-20]
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.6], [0, 1, 1]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-32 px-6 md:px-20 bg-[#050505] text-white overflow-hidden"
    >
      {/* Decorative Blueprint Lines [cite: 2025-10-20] */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/5 hidden md:block" />
      <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/5 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: Minimalist HUD Style */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-24 md:mb-40"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40">
              Identity // 01
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none">
            The Philosophy of <br />
            <span className="text-white/20 italic font-extralight">Aman Architects.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24 items-start">
          
          {/* LEFT: Cinematic Parallax Image [cite: 2025-10-20] */}
          <div className="lg:col-span-5 relative group">
            <div className="relative h-[450px] md:h-[650px] w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 border border-white/5">
              <motion.div style={{ y: imageY }} className="absolute -inset-y-20 inset-x-0">
                <Image
                  src="/hero-arch.jpg" 
                  alt="Architectural Vision"
                  fill
                  className="object-cover scale-110"
                />
              </motion.div>
              {/* Corner Detail */}
              <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-white/20" />
            </div>
            {/* Floating Technical Tag */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="absolute -bottom-8 -right-8 bg-white text-black p-8 hidden md:block max-w-[200px]"
            >
              <p className="text-[8px] uppercase tracking-widest mb-2 opacity-40 font-bold">Concept_Note</p>
              <p className="text-xs leading-relaxed font-light uppercase tracking-tight">
                Every structure is a dialogue between the earth and the sky.</p>
            </motion.div>
          </div>

          {/* RIGHT: Narrative & Stats */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="lg:col-span-7 space-y-16 md:pt-20"
          >
            <div className="space-y-8">
              <h3 className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-white/90">
                {AboutData.title}
              </h3>
              <p className="text-white/40 leading-relaxed text-lg font-light max-w-xl">
                {AboutData.description}
              </p>
            </div>

            {/* TECHNICAL STATS: HUD Style */}
            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
              <div className="group cursor-default">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-5xl md:text-7xl font-extralight tracking-tighter group-hover:italic transition-all">
                    {AboutData.stats.experience}
                  </h4>
                  <span className="text-xl text-white/20 group-hover:text-white">+</span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mt-4 group-hover:text-white/60 transition-colors">
                  Years of Technical Expertise
                </p>
              </div>

              <div className="group cursor-default">
                <div className="flex items-baseline gap-2">
                  <h4 className="text-5xl md:text-7xl font-extralight tracking-tighter group-hover:italic transition-all">
                    {AboutData.stats.projects}
                  </h4>
                  <span className="text-xl text-white/20 group-hover:text-white">+</span>
                </div>
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/30 mt-4 group-hover:text-white/60 transition-colors">
                  Global Projects Delivered
                </p>
              </div>
            </div>

            {/* CTA Link [cite: 2025-10-20] */}
            <div className="pt-8">
              <a 
                href="#contact" 
                className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.6em] text-white/60 hover:text-white transition-all group"
              >
                Learn our Process
                <span className="w-10 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-white transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;