"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectsData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={cardRef} className="relative h-screen w-full flex items-center justify-center mb-20 md:mb-40">
      <motion.div 
        style={{ opacity, scale }}
        className="relative w-full max-w-[1400px] h-[70vh] md:h-[80vh] overflow-hidden group border border-white/5"
      >
        <Link href={`/project/${project.id}`} className="block w-full h-full relative">
          <div className="absolute inset-0 overflow-hidden">
            <motion.div style={{ y }} className="relative h-[120%] w-full -top-[10%]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-50 group-hover:brightness-75"
              />
            </motion.div>
          </div>

          <div className="absolute inset-0 z-20 p-8 md:p-16 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">Project_Ref</span>
                <span className="text-4xl font-light text-white/10">0{index + 1}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em] block mb-2">Sector</span>
                <span className="px-4 py-1 border border-white/10 text-[10px] text-white/60 uppercase tracking-widest backdrop-blur-md">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="max-w-2xl">
                <h3 className="text-5xl md:text-8xl font-light text-white uppercase tracking-tighter leading-none mb-4">
                  {project.title}
                </h3>
                <div className="flex gap-6 items-center">
                   <div className="h-[1px] w-12 bg-white/20" />
                   <p className="text-[11px] font-mono text-white/40 uppercase tracking-[0.3em]">
                     {`${project.location} // ${project.year}`}
                   </p>
                </div>
              </div>

              <div className="group/btn relative overflow-hidden px-8 py-3 border border-white/20">
                 <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                 <span className="relative z-10 text-[10px] uppercase tracking-[0.4em] group-hover/btn:text-black transition-colors">
                   View_Case_Study
                 </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#050505] py-20 overflow-hidden">
      {/* Background Section Identifier */}
      <div className="sticky top-0 h-screen w-full pointer-events-none flex items-center justify-center overflow-hidden z-0">
         <h2 className="text-[25vw] font-bold text-white/[0.02] uppercase tracking-tighter leading-none select-none">Selected_Works</h2>
      </div>

      <div className="relative z-10 px-6 md:px-20 mb-20">
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-mono text-white/20 uppercase tracking-[1em]">Archive_Catalog</span>
          <div className="h-[1px] flex-1 bg-white/5" />
          <span className="text-[10px] font-mono text-white/20 uppercase">{`Total_0${ProjectsData.length}`}</span>
        </div>
      </div>

      <div className="relative z-10">
        {ProjectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <div className="relative z-10 py-40 flex flex-col items-center justify-center text-center">
         <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.5em] mb-8">End_of_Current_Archive</p>
         <h4 className="text-3xl md:text-5xl font-light text-white/60 uppercase tracking-tighter">Want to see more?</h4>
         <Link href="/contact" className="mt-12 text-xs uppercase tracking-[0.8em] text-white hover:text-white/40 transition-colors">Initiate_New_Project —&gt;</Link>
      </div>
    </section>
  );
};

export default Projects;