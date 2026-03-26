"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AboutData } from "@/constants";
import Image from "next/image";

const About = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="relative py-40 px-6 md:px-20 bg-[#050505] text-white overflow-hidden"
    >
      {/* BACKGROUND TECHNICAL GRID - Ek architect ka canvas hamesha grid pe hota hai */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Axis Lines for Blueprint Vibe */}
      <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent hidden lg:block" />
      <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION IDENTIFIER */}
        <div className="flex items-center gap-6 mb-20">
          <div className="flex flex-col">
            <span className="text-[10px] font-mono tracking-[0.8em] text-white/20 uppercase">Core_Identity</span>
            <span className="text-[10px] font-mono tracking-[0.8em] text-white/60 uppercase">Node_01</span>
          </div>
          <div className="h-[1px] flex-1 bg-white/5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* LEFT: THE MANIFESTO */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-[0.9] mb-12">
                Drafting the <br /> 
                <span className="text-white/20 italic font-extralight">Future Heritage.</span>
              </h2>
              
              <div className="space-y-8 max-w-2xl">
                <h3 className="text-xl md:text-2xl font-light leading-relaxed tracking-wide text-white/80 border-l-2 border-white/20 pl-8">
                  {AboutData.title}
                </h3>
                <p className="text-white/40 leading-relaxed text-lg font-light pl-9">
                  {AboutData.description}
                </p>
              </div>

              {/* TECHNICAL SPECS (The Stats) */}
              <div className="mt-20 grid grid-cols-2 gap-8 py-10 border-y border-white/5 relative">
                {/* Stats 01 */}
                <div className="group">
                   <div className="text-[8px] font-mono text-white/20 uppercase mb-4 tracking-widest">[EXP_LOAD_METRIC]</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-5xl md:text-7xl font-light tracking-tighter">{AboutData.stats.experience}</span>
                     <span className="text-sm font-mono text-white/20">YRS_ACTIVE</span>
                   </div>
                   <p className="text-[9px] uppercase tracking-widest text-white/30 mt-4 group-hover:text-white transition-colors duration-500">
                     Technical Leadership & Execution
                   </p>
                </div>

                {/* Stats 02 */}
                <div className="group">
                   <div className="text-[8px] font-mono text-white/20 uppercase mb-4 tracking-widest">[PROJ_VAL_INDEX]</div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-5xl md:text-7xl font-light tracking-tighter">{AboutData.stats.projects}</span>
                     <span className="text-sm font-mono text-white/20">UNITS</span>
                   </div>
                   <p className="text-[9px] uppercase tracking-widest text-white/30 mt-4 group-hover:text-white transition-colors duration-500">
                     High-Precision Structures Delivered
                   </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: CINEMATIC VISUAL */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative aspect-[3/4] w-full group">
              {/* Outer Dimension Frame */}
              <div className="absolute -inset-4 border border-white/5 scale-95 group-hover:scale-100 transition-transform duration-700 pointer-events-none" />
              
              <div className="relative h-full w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                <motion.div 
                  style={{ y: imageY, rotateX }} 
                  className="absolute -inset-y-20 inset-x-0"
                >
                  <Image
                    src={AboutData.image} 
                    alt="Aman Architects Vision"
                    fill
                    className="object-cover scale-110 brightness-50 group-hover:brightness-100 transition-all duration-700"
                  />
                </motion.div>

                {/* Corner Technical Annotations */}
                <div className="absolute top-6 left-6 flex flex-col gap-1">
                   <div className="w-8 h-[1px] bg-white/40" />
                   <div className="h-8 w-[1px] bg-white/40" />
                   <span className="text-[7px] font-mono text-white/40 mt-2 uppercase tracking-tighter">REF_IMG_084 [LKO]</span>
                </div>
                
                {/* Center HUD Circle Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                   <div className="w-32 h-32 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                      <div className="w-1 h-1 bg-white rounded-full" />
                   </div>
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-6 max-w-[180px] hidden md:block">
                 <p className="text-[7px] font-mono uppercase tracking-widest text-black/40 mb-2 underline decoration-black/10">Design_Note</p>
                 <p className="text-[10px] font-medium leading-tight tracking-tight uppercase italic">
                    Architecture is the art of making the invisible visible.
                 </p>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER CTA */}
        <div className="mt-24 flex justify-end">
           <a href="#contact" className="group flex flex-col items-end">
              <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-2 group-hover:text-white transition-colors">Initiate_Dialogue</span>
              <div className="flex items-center gap-4">
                 <span className="text-xs uppercase tracking-[0.3em] font-light">The Process</span>
                 <div className="w-12 h-[1px] bg-white/20 group-hover:w-24 group-hover:bg-white transition-all duration-700" />
              </div>
           </a>
        </div>
      </div>
    </section>
  );
};

export default About;