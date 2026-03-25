"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants";
import { FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services" className="relative py-32 px-6 md:px-20 bg-[#050505] text-white overflow-hidden">
      {/* Decorative Grid Background - Blueprint vibe */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: High-Contrast Typography */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[1px] w-12 bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/40">
                Expertise // 02
              </span>
            </div>
            <h2 className="text-5xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85]">
              Surgical <br /> 
              <span className="text-white/20 italic font-extralight">Precision.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="max-w-xs text-right"
          >
            <p className="text-white/30 text-[11px] uppercase tracking-widest leading-relaxed mb-4">
              We translate abstract concepts into structural reality using advanced BIM modeling and sustainable engineering.
            </p>
            <div className="h-[1px] w-full bg-white/10" />
          </motion.div>
        </div>

        {/* SERVICES GRID: Kinetic Border Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/5 border border-white/5">
          {ServicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-[#050505] p-12 md:p-20 flex flex-col justify-between aspect-square md:aspect-video lg:aspect-square overflow-hidden cursor-crosshair"
            >
              {/* Background Kinetic Reveal */}
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1]" />
              
              {/* Technical ID */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 group-hover:text-black/40 transition-colors">
                  SRV_NODE_{index + 1}
                </span>
                <FaArrowRightLong 
                  className="text-white/10 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-500" 
                  size={24} 
                />
              </div>

              {/* Main Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl md:text-5xl font-light uppercase tracking-tighter mb-6 group-hover:text-black transition-colors duration-500">
                  {service.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? "opacity-40 italic font-extralight" : ""}>{word} </span>
                  ))}
                </h3>
                <p className="text-white/30 text-sm md:text-base font-light leading-relaxed max-w-sm group-hover:text-black/60 transition-colors duration-500">
                  {service.description}
                </p>
                
                {/* Secondary Technical Data */}
                <div className="mt-8 flex gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                   <div className="flex flex-col">
                     <span className="text-[7px] uppercase tracking-widest text-black/40">Scale</span>
                     <span className="text-[9px] font-mono text-black">1:50_METRIC</span>
                   </div>
                   <div className="flex flex-col">
                     <span className="text-[7px] uppercase tracking-widest text-black/40">Status</span>
                     <span className="text-[9px] font-mono text-black">READY_FOR_EXEC</span>
                   </div>
                </div>
              </div>

              {/* Vertical Blueprint Line */}
              <div className="absolute top-0 right-0 h-full w-[1px] bg-white/5 group-hover:bg-black/5" />
            </motion.div>
          ))}
        </div>

        {/* FOOTER CALLOUT */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-10"
        >
          <p className="text-[9px] uppercase tracking-[0.8em] text-white/20 mb-6 md:mb-0">
            Precision Over Decoration // MMXXVI
          </p>
          <a href="#contact" className="text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-1 hover:text-white/60 transition-all">
            Inquire for Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;