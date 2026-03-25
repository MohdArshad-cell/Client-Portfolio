"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiteConfig, ContactData, SocialLinks } from "@/constants";
import { ArrowUpRight, Globe, Shield } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050505] text-white pt-32 pb-12 px-6 md:px-20 border-t border-white/5 overflow-hidden">
      
      {/* 1. GHOST BRANDING: The "Foundation" Layer */}
      <div className="absolute -bottom-10 left-10 select-none pointer-events-none opacity-[0.02] hidden lg:block">
        <h2 className="text-[25vw] font-bold tracking-tighter leading-none uppercase">
          {SiteConfig.name.split(' ')[0]}
        </h2>
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        
        {/* TOP ROW: Vision & System Reset */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-32">
          <div className="max-w-md space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.6em] text-white/40">Studio_Vision</span>
            </div>
            <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed tracking-tight">
              We define the intersection of <span className="text-white italic">structural logic</span> and <span className="text-white italic">spatial poetry</span>. Built to endure.
            </p>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex flex-col items-end gap-4 cursor-pointer"
          >
            <div className="p-8 border border-white/10 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-700">
              <ArrowUpRight size={32} className="group-hover:-rotate-45 transition-transform duration-500" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.5em] text-white/20 group-hover:text-white transition-colors">
              Return_to_Top
            </span>
          </motion.button>
        </div>

        {/* MIDDLE ROW: Technical Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-32 border-t border-white/5 pt-20">
          
          {/* Index 01: Directory */}
          <div className="space-y-8">
            <span className="text-[8px] font-mono text-white/20 tracking-[0.5em] block uppercase">01 // Directory</span>
            <div className="flex flex-col gap-4">
              {["Works", "Identity", "Expertise", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-xs uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all hover:translate-x-2 block w-fit">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Index 02: Digital HQ */}
          <div className="space-y-8">
            <span className="text-[8px] font-mono text-white/20 tracking-[0.5em] block uppercase">02 // Communication</span>
            <div className="flex flex-col gap-4">
              <p className="text-xs text-white/40 font-light tracking-widest">{ContactData.email}</p>
              <p className="text-xs text-white/40 font-light tracking-widest">{ContactData.phone}</p>
              <div className="flex gap-6 pt-4">
                {SocialLinks.map((social) => (
                  <a key={social.platform} href={social.url} className="text-[10px] uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors">
                    {social.platform.substring(0, 2)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Index 03: Physical Geocode */}
          <div className="space-y-8">
            <span className="text-[8px] font-mono text-white/20 tracking-[0.5em] block uppercase">03 // Geocode</span>
            <p className="text-xs text-white/40 font-light leading-relaxed tracking-widest max-w-[200px]">
              {ContactData.address} <br />
              Lucknow, UP 226010, IND
            </p>
          </div>

          {/* Index 04: System Stats */}
          <div className="space-y-8 bg-white/[0.02] p-8 border border-white/5">
            <span className="text-[8px] font-mono text-white/20 tracking-[0.5em] block uppercase">04 // Terminal_Status</span>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase text-white/20">Latency</span>
                <span className="text-[9px] font-mono text-green-500/60">24ms // STABLE</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase text-white/20">Version</span>
                <span className="text-[9px] font-mono text-white/40">v2.0.4-OS</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] uppercase text-white/20">Uptime</span>
                <span className="text-[9px] font-mono text-white/40">99.98%</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: The Legal HUD */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-8">
             <div className="flex flex-col gap-1">
               <span className="text-[7px] text-white/20 uppercase tracking-[0.4em]">Proprietary_Copyright</span>
               <span className="text-[9px] text-white/40 uppercase tracking-widest">© {currentYear} {SiteConfig.name}</span>
             </div>
             <span className="h-6 w-[1px] bg-white/10 hidden md:block" />
             <div className="flex flex-col gap-1">
               <span className="text-[7px] text-white/20 uppercase tracking-[0.4em]">Engineered_By</span>
               <span className="text-[9px] text-white/40 uppercase tracking-widest">Arshad_Terminal_v2</span>
             </div>
          </div>

          <div className="flex items-center gap-10">
             <div className="flex items-center gap-2">
               <Globe size={10} className="text-white/20" />
               <span className="text-[8px] text-white/20 uppercase tracking-[0.5em]">Global_Sync_Active</span>
             </div>
             <div className="flex items-center gap-2">
               <Shield size={10} className="text-white/20" />
               <span className="text-[8px] text-white/20 uppercase tracking-[0.5em]">Encryption: AES-256</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;