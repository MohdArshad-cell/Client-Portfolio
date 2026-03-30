"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ContactData, SocialLinks } from "@/constants";
import { Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  // FIX: SSR/Hydration error ko rokne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section id="contact" className="relative py-32 px-6 md:px-20 bg-[#050505] text-white overflow-hidden">
      
      {/* Background Decorative HUD */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.02] border-l border-white/5 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.6em] text-white/40">
              Connection // 03
            </span>
          </div>
          <h2 className="text-5xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85]">
            Initiate <br />
            <span className="text-white/20 italic font-extralight">Dialogue.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT: INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-20"
          >
            <div className="space-y-12">
              <p className="text-xl md:text-2xl text-white/40 font-light max-w-sm leading-relaxed tracking-tight">
                Ready to translate your vision into a structural masterpiece? Our terminal is open for global inquiries.
              </p>

              <div className="space-y-10">
                {[
                  { icon: <Mail size={18} />, label: "Data_Stream", value: ContactData.email },
                  { icon: <Phone size={18} />, label: "Voice_Link", value: ContactData.phone },
                  { icon: <MapPin size={18} />, label: "Geocode", value: ContactData.address }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group cursor-crosshair">
                    <div className="mt-1 text-white/20 group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-white/20 mb-2 group-hover:text-white/40 transition-colors">
                        {item.label}
                      </p>
                      <p className="text-lg font-light tracking-tight group-hover:italic transition-all">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-wrap gap-x-10 gap-y-4">
              {SocialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all"
                >
                  <span className="w-2 h-2 rounded-full bg-white/10 group-hover:bg-white transition-colors" />
                  {link.platform}
                </a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/[0.04] border border-white/10 p-8 md:p-16 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Globe size={120} strokeWidth={0.5} />
            </div>

            <form className="space-y-12 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="group flex flex-col gap-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-white/50 group-focus-within:text-white transition-colors">
                    Client_Identity
                  </label>
                  <input 
                    type="text" 
                    placeholder="ENTER NAME" 
                    className="bg-transparent border-b border-white/20 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/30 font-light"
                  />
                </div>
                <div className="group flex flex-col gap-3">
                  <label className="text-[9px] uppercase tracking-[0.4em] text-white/50 group-focus-within:text-white transition-colors">
                    Digital_Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="EMAIL@DOMAIN.COM" 
                    className="bg-transparent border-b border-white/20 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder:text-white/30 font-light"
                  />
                </div>
              </div>

              <div className="group flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/50 group-focus-within:text-white transition-colors">
                  Project_Classification
                </label>
                <select className="bg-transparent border-b border-white/20 py-4 text-sm focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer font-light text-white/60">
                  <option className="bg-[#0b0b0b]">RESIDENTIAL_ARCH</option>
                  <option className="bg-[#0b0b0b]">COMMERCIAL_STRUCTURE</option>
                  <option className="bg-[#0b0b0b]">INTERIOR_SYSTEMS</option>
                  <option className="bg-[#0b0b0b]">URBAN_PLANNING</option>
                </select>
              </div>

              <div className="group flex flex-col gap-3">
                <label className="text-[9px] uppercase tracking-[0.4em] text-white/50 group-focus-within:text-white transition-colors">
                  Project_Brief
                </label>
                <textarea 
                  rows={4} 
                  placeholder="DESCRIBE THE VISION..." 
                  className="bg-transparent border-b border-white/20 py-4 text-sm text-white focus:outline-none focus:border-white transition-colors resize-none placeholder:text-white/30 font-light"
                />
              </div>

              {/* FIX: Changed inner 'div' to 'span' to avoid invalid nesting in 'button' */}
              <button type="button" className="relative w-full group overflow-hidden border border-white/20 py-6 transition-all duration-500 hover:border-white">
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-4 group-hover:text-black transition-colors">
                  <span className="uppercase tracking-[0.5em] text-[10px] font-bold">Transmit Inquiry</span>
                  <ArrowRight size={16} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>

        {/* Technical Footer */}
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[8px] uppercase tracking-[0.8em] text-white/10">
            All Systems Operational // MMXXVI
          </p>
          <p className="text-[8px] uppercase tracking-[0.8em] text-white/10">
            Aman Architects Studio — Lucknow, IND
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;