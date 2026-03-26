"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => setIsMounted(true));
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth) - 0.5);
      mouseY.set((clientY / innerHeight) - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const rotateX = useTransform(springY, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-5deg", "5deg"]);

  return (
    <motion.section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      <div className={`w-full h-full transition-opacity duration-1000 ${isMounted ? "opacity-100" : "opacity-0"}`}>
        
        {/* BACKGROUND LAYER */}
        <motion.div style={{ scale: videoScale }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-[#050505] z-10" />
          <div className="absolute inset-0 z-10 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)', backgroundSize: '60px 60px' }} />
          <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale brightness-[0.3]">
            <source src="/hero-clip.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* REFINED TYPOGRAPHY */}
        <motion.div 
          style={{ y: contentY, opacity: contentOpacity, rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative z-30 flex flex-col items-center justify-center text-center px-6 pt-24"
        >
          {/* LINE 01 */}
          <div className="relative mb-2">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-none lowercase">
              architecting
            </h1>
          </div>

          {/* LINE 02 */}
          <div className="relative mb-6">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-extralight text-white/20 italic tracking-tighter leading-none uppercase">
              SPACES.
            </h2>
            <div className="absolute -right-12 top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-3 gap-1 opacity-10">
               {[...Array(9)].map((_, i) => <div key={i} className="w-1 h-1 bg-white" />)}
            </div>
          </div>

          {/* LINE 03 */}
          <div className="relative">
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-none uppercase">
              Defining Lifestyles.
            </h3>
            
            {/* Dimension Line [cite: 2025-10-20] */}
            <div className="absolute -bottom-10 left-0 w-full h-[0.5px] bg-white/20 hidden md:block">
               <div className="absolute -left-0.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/40 rotate-45" />
               <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-1 bg-white/40 rotate-45" />
               <span className="absolute left-1/2 -translate-x-1/2 -bottom-4 text-[7px] text-white/10 font-mono tracking-widest uppercase">
                  H: 2.850MM (CEILING_VOID)
               </span>
            </div>
          </div>

          {/* BUTTON FIX: No more white block */}
          <motion.div className="mt-32 md:mt-40">
            <a 
              href="#projects" 
              className="group relative px-12 py-4 border border-white/20 text-white text-[10px] uppercase tracking-[0.5em] overflow-hidden block"
            >
              {/* Is div ko dhyan se dekho, scale-y-0 iska main fix hai */}
              <div className="absolute inset-0 bg-white scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom z-0" />
              <span className="relative z-10 group-hover:text-black transition-colors duration-500 font-bold">
                Initiate_Exploration
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* BOTTOM HUD */}
        <div className="absolute bottom-10 left-10 right-10 z-40 flex justify-between items-end opacity-20 pointer-events-none">
           <div className="flex flex-col gap-2">
             <span className="text-[8px] font-mono tracking-tighter uppercase">
               26.8467° N, 80.9462° E // LKO_IND
             </span>
           </div>
           <span className="text-[9px] font-mono italic">MMXXVI // ACTIVE</span>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;