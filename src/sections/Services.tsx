"use client";
import { ServicesData } from "@/constants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-32 px-8 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.4em] text-gray-400">Expertise</span>
        <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tighter mt-4 mb-20">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
          {ServicesData.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-gray-100 pb-12"
            >
              <h3 className="text-xl uppercase tracking-widest font-medium mb-4 group-hover:text-gray-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;