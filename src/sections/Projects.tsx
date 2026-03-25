"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "The Glass Pavilion",
    category: "Residential",
    src: "/project-1.jpg", // Make sure to add these to your public folder!
  },
  {
    id: 2,
    title: "Urban Monolith",
    category: "Commercial",
    src: "/project-2.jpg",
  },
  {
    id: 3,
    title: "Aether Library",
    category: "Public Space",
    src: "/project-3.jpg",
  },
  {
    id: 4,
    title: "Sky Garden",
    category: "Landscaping",
    src: "/project-4.jpg",
  },
];

const Projects = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Moving from 0% to -75% horizontally based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#050505]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* Background Decorative Text */}
        <div className="absolute top-20 left-10 opacity-5 pointer-events-none">
           <h2 className="text-[20vw] font-bold text-white leading-none">WORKS</h2>
        </div>

        <motion.div style={{ x }} className="flex gap-12 px-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative h-[450px] w-[350px] md:h-[600px] md:w-[500px] overflow-hidden bg-neutral-900"
            >
              {/* Image with subtle hover zoom */}
              <motion.img
                src={project.src}
                alt={project.title}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
              />
              
              {/* Technical Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="absolute bottom-8 left-8 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[8px] uppercase tracking-[0.5em] text-white/50 mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl md:text-3xl text-white font-extralight uppercase tracking-tighter">
                  {project.title}
                </h3>
              </div>
              
              {/* Corner Detail */}
              <div className="absolute top-6 right-6 h-8 w-8 border-t border-r border-white/20 group-hover:border-white/60 transition-colors" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;