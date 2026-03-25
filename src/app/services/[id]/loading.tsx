"use client";
import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="h-screen w-full bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background HUD Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      {/* Vertical Scan Line */}
      <motion.div 
        initial={{ left: "-10%" }}
        animate={{ left: "110%" }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 w-[1px] h-full bg-white/40 z-10 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      />

      <div className="relative z-20 flex flex-col items-center text-center px-6">
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mb-8"
        >
          <span className="text-[10px] uppercase tracking-[1em] text-white/40">Fetching_Service_Core</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-7xl font-extralight text-white uppercase tracking-tighter mb-4">
          Loading <span className="text-white/20 italic">Specifications</span>
        </h2>

        {/* Progress HUD */}
        <div className="mt-12 flex gap-12 font-mono text-[9px] text-white/20">
          <div className="flex flex-col gap-1">
            <span>BIT_RATE</span>
            <span className="text-white/40">1024_KBPS</span>
          </div>
          <div className="flex flex-col gap-1 border-x border-white/5 px-12">
            <span>ENCRYPTION</span>
            <span className="text-white/40">AES_256</span>
          </div>
          <div className="flex flex-col gap-1">
            <span>STATUS</span>
            <span className="text-green-500/50">PARSING...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;