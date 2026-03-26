"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { ProjectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Smooth scroll transition for the horizontal movement
  const x = useSpring(useTransform(scrollYProgress, [0, 1], ["10%", "-70%"]), {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Progress bar for the "Technical" feel
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* BACKGROUND HUD: Yeh section ko "Drafting Table" wali vibe dega */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 flex gap-4 items-center">
            <span className="w-2 h-2 bg-white animate-pulse" />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em]">
              System_Status // Indexing_Archive
            </span>
          </div>
          
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        {/* PROJECTS TRACK */}
        <motion.div style={{ x }} className="flex gap-20 px-12">
          {ProjectsData.map((project, index) => (
            <Link 
              key={project.id} 
              href={`/project/${project.id}`} 
              className="group relative h-[500px] w-[380px] md:h-[650px] md:w-[550px] flex-shrink-0 overflow-hidden bg-neutral-900/50"
            >
              {/* Project Numbering */}
              <div className="absolute top-6 left-6 z-20 overflow-hidden">
                <span className="text-white/10 text-8xl font-bold leading-none block group-hover:-translate-y-full transition-transform duration-700">
                  0{index + 1}
                </span>
                <span className="text-white absolute top-0 left-0 text-8xl font-bold leading-none translate-y-full group-hover:translate-y-0 transition-transform duration-700">
                  0{index + 1}
                </span>
              </div>

              {/* Parallax Image Container */}
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority={index < 2}
                  className="object-cover grayscale brightness-75 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              
              {/* Technical Metadata Overlay */}
              <div className="absolute bottom-12 left-12 right-12 z-20">
                <div className="flex justify-between items-end gap-4 overflow-hidden">
                  <div className="flex-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/40 mb-2">
                      {project.category} {project.location}
                    </p>
                    <h3 className="text-4xl md:text-6xl text-white font-light uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                  </div>
                  <div className="text-right hidden md:block">
                     <span className="text-[10px] font-mono text-white/20 block mb-1">YEAR</span>
                     <span className="text-sm font-light text-white italic">{project.year}</span>
                  </div>
                </div>
                
                {/* Reveal line on hover */}
                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-white/30 transition-all duration-700" />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 p-8">
                 <div className="w-12 h-[1px] bg-white/10 group-hover:bg-white/40 transition-colors" />
                 <div className="w-[1px] h-12 bg-white/10 absolute top-8 right-8 group-hover:bg-white/40 transition-colors" />
              </div>
            </Link>
          ))}
        </motion.div>

        {/* BOTTOM NAVIGATION HUD */}
        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-center z-30">
          <div className="flex flex-col gap-1">
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">Navigation_Progress</span>
            <div className="w-48 h-[1px] bg-white/10 relative">
               <motion.div 
                 style={{ scaleX }} 
                 className="absolute inset-0 bg-white origin-left" 
               />
            </div>
          </div>
          <div className="text-white/20 font-mono text-[10px] tracking-widest uppercase">
            SCROLL_TO_EXPLORE [TOTAL_{ProjectsData.length}]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;