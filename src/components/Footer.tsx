"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiteConfig, ContactData, SocialLinks } from "@/constants";
import { ArrowUpRight, Globe, Shield, Clock, Zap } from "lucide-react";
import Magnetic from "./Magnetic"; // Using your existing component

const Footer = () => {
  const [time, setTime] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-40 pb-12 px-6 md:px-20 border-t border-white/5 overflow-hidden">
      
      {/* 1. KINETIC BRAND BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none translate-y-1/4 opacity-[0.03]">
        <h2 className="text-[30vw] font-bold tracking-tighter leading-none uppercase whitespace-nowrap">
          {SiteConfig.name}
        </h2>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* TOP: THE FINAL CALL */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-20 mb-40">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono tracking-[0.8em] text-white/20 uppercase">Next_Phase</span>
              <div className="h-[1px] w-20 bg-white/20" />
            </div>
            <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-[0.9]">
              Let’s build your <br />
              <span className="text-white/20 italic font-extralight text-4xl md:text-7xl">Legacy Architecture.</span>
            </h2>
          </motion.div>

          <Magnetic>
            <button 
              onClick={scrollToTop}
              className="group relative w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white hover:text-black transition-all duration-700"
            >
              <ArrowUpRight size={32} className="group-hover:-rotate-45 transition-transform duration-500" />
              <span className="text-[8px] font-mono uppercase tracking-widest opacity-40">Top_Reset</span>
            </button>
          </Magnetic>
        </div>

        {/* MIDDLE: THE TERMINAL GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-32 border-t border-white/5 pt-20">
          
          {/* Index 01: Directory */}
          <div className="space-y-8">
            <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] block uppercase underline decoration-white/5 underline-offset-8">01 // NAV_MAP</span>
            <div className="flex flex-col gap-4">
              {["Projects", "About", "Services", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all">
                  <span className="w-0 group-hover:w-4 h-[1px] bg-white transition-all" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Index 02: Communication Node */}
          <div className="space-y-8">
            <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] block uppercase underline decoration-white/5 underline-offset-8">02 // COMMS_HQ</span>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <p className="text-[8px] text-white/20 uppercase mb-1">Direct_Mail</p>
                <p className="text-xs text-white/60 group-hover:text-white transition-colors">{ContactData.email}</p>
              </div>
              <div className="group cursor-pointer">
                <p className="text-[8px] text-white/20 uppercase mb-1">Secure_Line</p>
                <p className="text-xs text-white/60 group-hover:text-white transition-colors">{ContactData.phone}</p>
              </div>
            </div>
          </div>

          {/* Index 03: Social Protocol */}
          <div className="space-y-8">
            <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] block uppercase underline decoration-white/5 underline-offset-8">03 // SOCIALS</span>
            <div className="grid grid-cols-2 gap-4">
              {SocialLinks.map((social) => (
                <a 
                  key={social.platform} 
                  href={social.url} 
                  className="px-4 py-2 border border-white/5 text-[9px] uppercase tracking-widest text-white/30 hover:bg-white hover:text-black transition-all text-center"
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>

          {/* Index 04: System Stats (The "Arshad" Signature) */}
          <div className="p-8 bg-white/[0.02] border border-white/5 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
               <Zap size={40} />
            </div>
            <span className="text-[9px] font-mono text-white/20 tracking-[0.4em] block uppercase">04 // SYSTEM_MONITOR</span>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <div className="flex items-center gap-2">
                  <Clock size={10} className="text-white/20" />
                  <span className="text-[8px] uppercase text-white/20">LKO_TIME</span>
                </div>
                <span className="text-[10px] font-mono text-white/60 tracking-tighter">{time || "00:00:00"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[8px] uppercase text-white/20">Sync_Status</span>
                <span className="text-[10px] font-mono text-green-500 animate-pulse uppercase">Live</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase text-white/20">Protocol</span>
                <span className="text-[10px] font-mono text-white/40 uppercase">Aman_v2.1</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM: THE LEGAL HUD */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-mono text-white/20 tracking-[0.4em]">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p>© {currentYear} {SiteConfig.name.toUpperCase()}ALL_RIGHTS_RESERVED</p>
            <span className="hidden md:block h-3 w-[1px] bg-white/10" />
            <p className="hover:text-white transition-colors cursor-crosshair">DESIGNED_BY_ARSHAD_TERMINAL</p>
          </div>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Globe size={12} />
              <span>NORTH_INDIA_GRID // 26.8467° N</span>
            </div>
            <div className="flex items-center gap-2 hidden lg:flex">
              <Shield size={12} />
              <span>ENCRYPTED_SSL</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;