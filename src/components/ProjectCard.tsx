"use client";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard = ({ title, category, image }: ProjectProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden bg-gray-100 aspect-[4/5] cursor-pointer"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <p className="text-white/60 text-xs uppercase tracking-widest mb-2">{category}</p>
        <h3 className="text-white text-2xl font-light uppercase tracking-tighter">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ProjectCard;