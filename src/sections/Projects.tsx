"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ProjectsData } from "@/constants"; // Single Source of Truth
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate based on number of items (approx -25% per item)
  // 4 items = -75%, but better to keep it dynamic if possible
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        {/* Background Decorative Text */}
        <div className="absolute top-20 left-10 opacity-5 pointer-events-none select-none">
          <h2 className="text-[20vw] font-bold text-white leading-none">WORKS</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12">
          {ProjectsData.map((project) => (
            <Link 
              key={project.id} 
              href={`/project/${project.id}`} 
              className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[500px] flex-shrink-0 overflow-hidden bg-neutral-900"
            >
              {/* Optimized Next.js Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-10 left-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[10px] uppercase tracking-[0.5em] text-white/40 mb-3">
                  {project.category}
                </p>
                <h3 className="text-3xl md:text-5xl text-white font-light uppercase tracking-tighter">
                  {project.title}
                </h3>
              </div>
              
              {/* Industrial Accent */}
              <div className="absolute top-8 right-8 h-10 w-10 border-t border-r border-white/10 group-hover:border-white/40 transition-colors" />
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;