"use client";
import { motion } from "framer-motion";
import { AboutData } from "@/constants";

const About = () => {
  return (
    <section id="about" className="py-32 px-8 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Image with Border Detail */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[3/4] overflow-hidden grayscale">
            <img 
              src={AboutData.image} 
              alt="Architect Aman" 
              className="w-full h-full object-cover" 
            />
          </div>
          {/* Subtle design element */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-black/10 hidden md:block"></div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter mt-4 mb-8">
            {AboutData.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-12 max-w-md">
            {AboutData.description}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            {AboutData.stats.map((stat, index) => (
              <div key={index}>
                <h4 className="text-2xl font-light tracking-tighter">{stat.value}</h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;