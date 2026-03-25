"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

interface ProjectProps {
  id: number;
  title: string;
  category: string;
  image: string;
}

const ProjectCard = ({ title, category, image }: ProjectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking logic for "Empire-Grade" parallax
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative w-full aspect-[4/5] bg-gray-100 overflow-hidden cursor-pointer"
    >
      {/* Background Image with Hover Scale */}
      <motion.div 
        style={{ transformStyle: "preserve-3d" }}
        className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        {/* Shadow Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Floating Meta Data */}
      <div className="absolute bottom-10 left-10 z-20 translate-z-20">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          className="text-[10px] uppercase tracking-[0.4em] text-white mb-2"
        >
          {category}
        </motion.p>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-3xl font-light text-white uppercase tracking-tighter"
        >
          {title}
        </motion.h3>
      </div>
      
      {/* Corner Accent Detail */}
      <div className="absolute top-10 right-10 w-8 h-8 border-t border-r border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
    </motion.div>
  );
};

export default ProjectCard;