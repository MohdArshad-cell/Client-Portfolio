"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ContactData, SocialLinks } from "@/constants";
import { Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";

const Contact = () => {
  const [mounted, setMounted] = useState(false);

  // FIX 1: Hydration mismatch ko jadh se khatam karne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  // Jab tak client mount na ho, kuch render mat karo (Hydration Safety)
  if (!mounted) return <div className="min-h-screen bg-[#050505]" />;

  return (
    <section id="contact" className="relative py-40 px-6 md:px-20 bg-[#050505] text-white overflow-hidden">
      
      {/* Background HUD Layer */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-white/[0.01] border-l border-white/5 hidden lg:block" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] font-mono tracking-[0.8em] text-white/20 uppercase">Protocol_03</span>
            <div className="h-[1px] w-20 bg-white/20" />
          </div>
          <h2 className="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.8]">
            Initiate <br />
            <span className="text-white/20 italic font-extralight">Dialogue.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* LEFT: TERMINAL INFO */}
          <div className="lg:col-span-5 space-y-24">
            <div className="space-y-16">
              <p className="text-xl text-white/40 font-light leading-relaxed max-w-sm">
                Our design terminal is open for global inquiries. We translate abstract concepts into built heritage.
              </p>

              <div className="space-y-12">
                {[
                  { icon: <Mail size={18} />, label: "DATA_STREAM", value: ContactData.email },
                  { icon: <Phone size={18} />, label: "VOICE_LINK", value: ContactData.phone },
                  { icon: <MapPin size={18} />, label: "GEO_CODE", value: ContactData.address }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-8 group cursor-crosshair">
                    <div className="mt-1 text-white/20 group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">
                        {item.label}
                      </span>
                      <span className="text-lg font-light tracking-tight group-hover:italic transition-all">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Grid */}
            <div className="pt-12 border-t border-white/5 flex flex-wrap gap-10">
              {SocialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20 hover:text-white transition-colors"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: SECURE FORM MODULE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-10 md:p-16 relative"
          >
            <form className="space-y-12" autoComplete="off">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col gap-4 group">
                  <label className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">Identity_Label</label>
                  <input 
                    type="text" 
                    placeholder="NAME_OR_FIRM" 
                    className="bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                  />
                </div>
                <div className="flex flex-col gap-4 group">
                  <label className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">Email_Endpoint</label>
                  <input 
                    type="email" 
                    placeholder="SECURE@DOMAIN.COM" 
                    className="bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/10"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">Classification</label>
                <select className="bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white cursor-pointer text-white/40">
                  <option value="residential">RESIDENTIAL_SYSTEMS</option>
                  <option value="commercial">COMMERCIAL_INFRA</option>
                  <option value="interior">INTERIOR_DESIGN</option>
                </select>
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">Project_Manifesto</label>
                <textarea 
                  rows={4} 
                  placeholder="DESCRIBE_THE_VISION..." 
                  className="bg-transparent border-b border-white/10 py-4 text-sm focus:outline-none focus:border-white resize-none placeholder:text-white/10"
                />
              </div>

              {/* FIXED BUTTON NESTING: 'div' replaced with 'span' */}
              <button 
                type="button" 
                className="relative w-full group overflow-hidden border border-white/10 py-6 transition-all duration-700 hover:border-white"
              >
                <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                <span className="relative z-10 flex items-center justify-center gap-6 group-hover:text-black transition-colors">
                  <span className="uppercase tracking-[0.6em] text-[10px] font-bold">Transmit_Inquiry</span>
                  <ArrowRight size={18} className="-rotate-45 group-hover:rotate-0 transition-all duration-500" />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;