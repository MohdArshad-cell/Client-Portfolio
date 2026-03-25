"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ProjectsData } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa6";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  
  // Find project by ID
  const project = ProjectsData.find((p) => p.id === Number(params.id));

  if (!project) return <div className="h-screen flex items-center justify-center font-mono">NODE_NOT_FOUND</div>;

  return (
    <section className="min-h-screen bg-white text-black py-32 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors mb-12"
        >
          <FaArrowLeft size={10} /> Back to Projects
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Project Title & Category */}
          <div className="lg:col-span-8">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.5, y: 0 }}
              className="text-xs uppercase tracking-[0.5em] block mb-4"
            >
              {project.category} ARCH_LOG_{project.id}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none mb-12"
            >
              {project.title}
            </motion.h1>
          </div>

          {/* Project Stats (Year/Location) */}
          <div className="lg:col-span-4 flex flex-col justify-end pb-12">
             <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-8">
                <div>
                   <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Year</p>
                   <p className="font-medium">{project.year || "2024"}</p>
                </div>
                <div>
                   <p className="text-[10px] uppercase text-gray-400 tracking-widest mb-1">Location</p>
                   <p className="font-medium">{project.location || "Confidential"}</p>
                </div>
             </div>
          </div>
        </div>

        {/* Hero Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] md:h-[80vh] w-full bg-gray-100 overflow-hidden mb-20"
        >
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover" 
          />
        </motion.div>

        {/* Description & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-4">
            <h2 className="text-xl uppercase tracking-tighter font-medium italic text-gray-300">
              The Concept
            </h2>
          </div>
          <div className="md:col-span-8 space-y-10">
            <p className="text-2xl md:text-3xl font-light leading-relaxed">
              {project.description}
            </p>
            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
              {project.details}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;