"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="relative py-40 px-6 md:px-20 bg-[#050505] text-white overflow-hidden">
      
      {/* ARCHITECTURAL CANVAS BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', 
             backgroundSize: '80px 80px' 
           }} />
      
      {/* Section Marking Lines */}
      <div className="absolute top-0 right-[10%] w-[1px] h-full bg-white/5 hidden lg:block" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER: The "Surgical" Focus */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono tracking-[0.8em] text-white/20 uppercase">Operational_Scope</span>
              <div className="h-[1px] w-20 bg-white/20" />
            </div>
            <h2 className="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.8]">
              High_Performance <br /> 
              <span className="text-white/20 italic font-extralight">Execution.</span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:max-w-xs md:text-right pt-4"
          >
            <p className="text-white/40 text-[11px] uppercase tracking-[0.2em] leading-relaxed mb-6">
              We leverage computational design and BIM workflows to eliminate errors before a single brick is laid.
            </p>
            <div className="h-[1px] w-full bg-white/10" />
          </motion.div>
        </div>

        {/* SERVICES MODULES: Vertical Stack with Precision */}
        <div className="space-y-[1px] bg-white/5 border-y border-white/5">
          {ServicesData.map((service, index) => (
            <Link key={index} href={`/services/${index + 1}`} className="block group relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-[#050505] py-16 md:py-24 px-8 md:px-12 flex flex-col md:flex-row items-center justify-between transition-colors duration-700 group-hover:bg-white"
              >
                {/* 1. SERVICE INDEX & TITLE */}
                <div className="flex flex-col md:flex-row items-baseline gap-8 md:gap-16 w-full md:w-auto">
                  <span className="text-[10px] font-mono text-white/20 group-hover:text-black/40 transition-colors">
                    0{index + 1} MOD_UNIT
                  </span>
                  <h3 className="text-4xl md:text-6xl font-light uppercase tracking-tighter group-hover:text-black transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* 2. DESCRIPTION & DELIVERABLES (Visible on Desktop) */}
                <div className="hidden lg:flex flex-col gap-4 max-w-sm opacity-40 group-hover:opacity-100 transition-all group-hover:text-black">
                   <p className="text-[11px] uppercase tracking-widest leading-relaxed">
                     {service.description}
                   </p>
                   {/* "Deliverables" list for trust building */}
                   <div className="flex gap-4">
                      <span className="text-[8px] border border-white/20 group-hover:border-black/20 px-2 py-1 uppercase">2D_Drafting</span>
                      <span className="text-[8px] border border-white/20 group-hover:border-black/20 px-2 py-1 uppercase">3D_Modeling</span>
                      <span className="text-[8px] border border-white/20 group-hover:border-black/20 px-2 py-1 uppercase">BOM_Report</span>
                   </div>
                </div>

                {/* 3. INTERACTIVE ARROW */}
                <div className="mt-12 md:mt-0">
                  <div className="relative w-16 h-16 rounded-full border border-white/10 group-hover:border-black/20 flex items-center justify-center overflow-hidden transition-colors">
                    <FaArrowRightLong 
                      className="text-white group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-500 z-10" 
                      size={20} 
                    />
                    <div className="absolute inset-0 bg-black scale-0 group-hover:scale-0 transition-transform" />
                  </div>
                </div>

                {/* KINETIC BACKGROUND LINE (Hover effect) */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-1000 ease-in-out" />
              </motion.div>
            </Link>
          ))}
        </div>

        {/* BOTTOM CALLOUT: The "Aman Architects" Standard */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex flex-col gap-2 mb-8 md:mb-0">
            <span className="text-[9px] font-mono uppercase tracking-[0.6em] text-white/20">Standard_Operating_Procedure</span>
            <p className="text-xs font-light text-white/60 tracking-wide">All projects follow IS-Codes and International Building Standards.</p>
          </div>
          
          <a href="#contact" className="relative group overflow-hidden px-10 py-4 border border-white/10 text-[10px] uppercase tracking-[0.5em]">
             <span className="relative z-10">Request_Technical_Audit</span>
             <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
             <span className="absolute inset-0 flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
               Click_to_Consult
             </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;