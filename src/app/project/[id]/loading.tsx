"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* BACKGROUND HUD: Architectural Grid [cite: 2025-10-20] */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* SCANNING LINE: Blueprint Vibe [cite: 2025-10-20] */}
      <motion.div 
        initial={{ top: "-10%" }}
        animate={{ top: "110%" }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      />

      {/* CENTER STATUS: Technical Data */}
      <div className="relative z-20 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center">
           <motion.span 
             initial={{ opacity: 0.2 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
             className="text-[10px] uppercase tracking-[0.8em] text-white/40 mb-2"
           >
             Initializing_Node
           </motion.span>
           <h2 className="text-4xl md:text-6xl font-light text-white uppercase tracking-tighter">
             Scanning <span className="text-white/20 italic italic">Assets...</span>
           </h2>
        </div>

        {/* PROGRESS BAR: Industrial Style [cite: 2025-10-20] */}
        <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            initial={{ left: "-100%" }}
            animate={{ left: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 w-full h-full bg-white/60"
          />
        </div>

        {/* HUD FOOTER: System Metadata */}
        <div className="mt-10 flex gap-10 opacity-20">
           <div className="flex flex-col items-center gap-1">
             <span className="text-[7px] uppercase tracking-widest">Protocol</span>
             <span className="text-[9px] font-mono tracking-tighter text-green-500">HTTPS_TLS_1.3</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <span className="text-[7px] uppercase tracking-widest">Buffer</span>
             <span className="text-[9px] font-mono tracking-tighter">READY_FOR_PIPE</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <span className="text-[7px] uppercase tracking-widest">Latency</span>
             <span className="text-[9px] font-mono tracking-tighter">18MS</span>
           </div>
        </div>
      </div>

      {/* CORNER ACCENTS */}
      <div className="absolute top-12 left-12 w-10 h-10 border-t border-l border-white/10" />
      <div className="absolute bottom-12 right-12 w-10 h-10 border-b border-r border-white/10" />
    </div>
  );
};

export default Loading;