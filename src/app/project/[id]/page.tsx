"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  
  // 1. Current Project Find Karo
  const currentIndex = ProjectsData.findIndex((p) => p.id === Number(params.id));
  const project = ProjectsData[currentIndex];

  if (!project) return <div className="h-screen flex items-center justify-center font-mono text-white bg-black">NODE_NOT_FOUND</div>;

  // 2. Next Project Logic (Infinite Loop)
  const nextIndex = (currentIndex + 1) % ProjectsData.length;
  const nextProject = ProjectsData[nextIndex];

  return (
    <section className="min-h-screen bg-[#050505] text-white py-32 px-6 md:px-20 relative overflow-hidden">
      
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none border-l border-white/10 ml-[20%] hidden md:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Navigation Uplink */}
        <button 
          onClick={() => router.back()}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all mb-16"
        >
          <FaArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Terminal
        </button>

        {/* Project Identity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/30 block mb-6">
                Project_Node // 0{project.id}
              </span>
              <h1 className="text-5xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85] mb-8">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 !== 0 ? "text-white/20 italic" : ""}>{word} </span>
                ))}
              </h1>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
             <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-10">
                <div>
                   <p className="text-[9px] uppercase text-white/20 tracking-[0.4em] mb-3">Timeline</p>
                   <p className="font-light text-xl tracking-tight">{project.year}</p>
                </div>
                <div>
                   <p className="text-[9px] uppercase text-white/20 tracking-[0.4em] mb-3">Geocode</p>
                   <p className="font-light text-xl tracking-tight">{project.location}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Hero Asset */}
        <div className="relative h-[70vh] w-full bg-neutral-900 overflow-hidden mb-32">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/60" />
        </div>

        {/* Conceptual Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start pb-32 border-b border-white/5">
          <div className="md:col-span-4">
            <h2 className="text-sm uppercase tracking-[0.5em] font-medium text-white/20">The_Concept</h2>
          </div>
          <div className="md:col-span-8 space-y-12">
            <p className="text-3xl md:text-5xl font-light leading-[1.1] tracking-tight text-white/90">
              {project.description}
            </p>
            <p className="text-white/40 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              {project.details}
            </p>
          </div>
        </div>

        {/* 3. THE "NEXT PROJECT" SWITCHER */}
        <div className="py-32">
          <Link href={`/project/${nextProject.id}`} className="group block relative overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/20 group-hover:text-white transition-colors">
                  Up Next — 0{nextProject.id}
                </span>
                <h3 className="text-4xl md:text-7xl font-light uppercase tracking-tighter group-hover:italic transition-all duration-700">
                  {nextProject.title}
                </h3>
              </div>
              <div className="p-8 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-500">
                <FaArrowRight size={32} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              </div>
            </div>
            
            {/* Background Image Peek on Hover */}
            <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-10 transition-opacity duration-700">
              <Image src={nextProject.image} alt="Next" fill className="object-cover grayscale" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;