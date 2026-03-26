"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="relative py-40 px-6 md:px-20 bg-[#050505] text-white overflow-hidden">
      {/* ARCHITECTURAL GRID OVERLAY */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: High-End Editorial Style */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-16 border-l border-white/10 pl-8 md:pl-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono uppercase tracking-[0.8em] text-white/20">
                Capabilities // Node_02
              </span>
            </div>
            <h2 className="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.8] mb-8">
              Strategic <br /> 
              <span className="text-white/20 italic font-extralight">Intervention.</span>
            </h2>
            <p className="text-white/40 text-sm md:text-lg font-light tracking-wide max-w-xl leading-relaxed">
              We dont just draft buildings; we engineer environments. Our methodology integrates BIM modeling with sustainable logic to ensure every millimetre serves a purpose.
            </p>
          </motion.div>
          
          {/* Technical Legend */}
          <div className="hidden lg:block pt-4">
             <div className="flex flex-col gap-4 text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
                <span>[01] Analysis</span>
                <span>[02] Conceptualization</span>
                <span>[03] Technical Draft</span>
                <span>[04] Site Supervision</span>
             </div>
          </div>
        </div>

        {/* SERVICES GRID: The "Blueprint" Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10 overflow-hidden">
          {ServicesData.map((service, index) => (
            <Link key={index} href={`/services/${index + 1}`} className="group relative overflow-hidden bg-[#050505]">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-12 md:p-20 flex flex-col justify-between aspect-square lg:aspect-[1.2/1] cursor-none"
              >
                {/* REVEAL OVERLAY: Slide up on hover */}
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22, 1, 0.36, 1]" />
                
                {/* Service Identifier */}
                <div className="relative z-10 flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-mono tracking-[0.5em] text-white/30 group-hover:text-black/40 transition-colors">
                      SRV_CODE_{index + 1}
                    </span>
                    <span className="text-[7px] font-mono text-white/10 group-hover:text-black/20 uppercase mt-1">
                      Status: Ready_For_Deployment
                    </span>
                  </div>
                  <div className="p-4 rounded-full border border-white/10 group-hover:border-black/10 transition-colors">
                    <FaArrowRightLong 
                      className="text-white/20 group-hover:text-black -rotate-45 group-hover:rotate-0 transition-all duration-500" 
                      size={20} 
                    />
                  </div>
                </div>

                {/* Content Block */}
                <div className="relative z-10">
                  <h3 className="text-4xl md:text-6xl font-light uppercase tracking-tighter mb-8 group-hover:text-black transition-colors duration-500 leading-none">
                    {service.title.split(' ').map((word, i) => (
                      <span key={i} className={i === 1 ? "opacity-30 italic font-extralight block" : "block"}>{word}</span>
                    ))}
                  </h3>
                  
                  {/* Technical Meta (Visible on Hover) */}
                  <div className="h-0 group-hover:h-24 opacity-0 group-hover:opacity-100 transition-all duration-700 overflow-hidden pt-4">
                     <p className="text-black/60 text-sm font-light leading-relaxed max-w-xs mb-6">
                        {service.description}
                     </p>
                     <div className="flex gap-8 border-t border-black/5 pt-4">
                        <div className="flex flex-col">
                           <span className="text-[7px] uppercase font-bold text-black/40 tracking-tighter">Complexity</span>
                           <span className="text-[10px] font-mono text-black">High_Precision</span>
                        </div>
                        <div className="flex flex-col">
                           <span className="text-[7px] uppercase font-bold text-black/40 tracking-tighter">Deliverable</span>
                           <span className="text-[10px] font-mono text-black">BIM_PACK_0{index + 1}</span>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Decorative Crosshair */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-4 h-[1px] bg-black/20 absolute right-4 top-6" />
                   <div className="h-4 w-[1px] bg-black/20 absolute right-6 top-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* SECTION FOOTER */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex items-center gap-6">
             <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
                <div className="w-1 h-1 bg-white" />
             </div>
             <p className="text-[9px] uppercase tracking-[0.6em] text-white/20">
                Precision is not an option, its the standard.
             </p>
          </div>
          
          <a href="#contact" className="group flex items-center gap-6 py-4 px-10 border border-white/10 hover:border-white/40 transition-all">
            <span className="text-[10px] uppercase tracking-[0.5em] font-light">Request a Consultation</span>
            <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-white transition-all duration-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;