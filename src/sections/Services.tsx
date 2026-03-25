"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServicesData } from "@/constants";

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-[#050505] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 block mb-4">
              02 / Expertise
            </span>
            <h2 className="text-4xl md:text-7xl font-light uppercase tracking-tighter leading-none">
              Specialized <br /> 
              <span className="text-white/40 italic">Solutions</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/40 text-sm max-w-xs font-light leading-relaxed mb-2"
          >
            We provide end-to-end architectural services, from initial sketches to final site execution, ensuring every detail aligns with the original vision.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10 border border-white/10">
          {ServicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#050505] p-10 md:p-16 flex flex-col justify-between hover:bg-white/5 transition-colors duration-500 group relative overflow-hidden"
            >
              {/* Service Number */}
              <span className="text-white/10 text-6xl font-light absolute top-10 right-10 group-hover:text-white/20 transition-colors">
                0{index + 1}
              </span>

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-light uppercase tracking-tight mb-6">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-sm group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </div>

              {/* Decorative line that expands on hover */}
              <div className="mt-12 h-[1px] w-12 bg-white/20 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;