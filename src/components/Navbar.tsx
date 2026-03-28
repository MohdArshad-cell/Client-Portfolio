"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useSpring } from "framer-motion";
import Link from "next/link";
import { SiteConfig } from "@/constants";
import Magnetic from "./Magnetic"; // Essential for that premium feel

const Navbar = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  // Smooth Progress Bar for the top of the nav
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit' // Added seconds for "Live Terminal" vibe
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Works", href: "#projects", id: "01" },
    { name: "Identity", href: "#about", id: "02" },
    { name: "Expertise", href: "#services", id: "03" },
    { name: "Contact", href: "#contact", id: "04" },
  ];

  return (
    <>
      <motion.nav
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-8"
        }`}
      >
        {/* TOP PROGRESS LINE */}
        <motion.div 
          style={{ scaleX }} 
          className="absolute top-0 left-0 right-0 h-[1px] bg-white/40 origin-left" 
        />

        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between relative">
          
          {/* LEFT: BRANDING & NODE STATUS */}
          <div className="flex items-center gap-10 flex-1">
            <Link href="/" className="group flex items-center gap-4">
              <span className="text-white text-xl md:text-2xl font-light tracking-[0.5em] uppercase group-hover:italic transition-all">
                {SiteConfig.name.split(' ')[0]}
              </span>
              <div className="h-4 w-[1px] bg-white/10 hidden lg:block" />
              <div className="hidden lg:flex flex-col">
                <span className="text-[7px] text-white/20 uppercase tracking-[0.4em] font-mono">NODE_ACTIVE</span>
                <span className="text-[9px] text-white/40 font-mono tracking-tighter">LKO_IN // {time}</span>
              </div>
            </Link>
          </div>

          {/* CENTER: TECHNICAL DIRECTORY (Fixed Center) */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="group relative flex flex-col items-center">
                <span className="text-[7px] text-white/20 font-mono group-hover:text-white transition-colors mb-1">
                  [{link.id}]
                </span>
                <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-all">
                  {link.name}
                </span>
                {/* Underline HUD effect */}
                <span className="absolute -bottom-2 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT: INTERACTIVE CTA */}
          <div className="flex justify-end items-center gap-8 flex-1">
            <div className="hidden xl:flex flex-col text-right">
              <span className="text-[7px] text-white/20 uppercase tracking-[0.3em]">SECURE_ENCRYPTION</span>
              <span className="text-[8px] text-green-500/60 font-mono uppercase">SSL_ACTIVE</span>
            </div>

            <Magnetic>
              <a 
                href="#contact"
                className="group relative px-8 py-3 overflow-hidden border border-white/10"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="relative z-10 text-[9px] uppercase tracking-[0.5em] font-bold text-white group-hover:text-black transition-colors duration-500">
                  Inquire_Now
                </span>
              </a>
            </Magnetic>

            {/* HAMBURGER ICON (For Mobile) */}
            <div className="flex flex-col gap-1.5 cursor-pointer group lg:hidden">
              <div className="w-6 h-[1px] bg-white group-hover:w-4 transition-all" />
              <div className="w-4 h-[1px] bg-white group-hover:w-6 transition-all" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Subtle Frame Detail (Corners of the screen) */}
      <div className="fixed inset-0 pointer-events-none z-[110] border-[1px] border-white/5 hidden md:block" />
    </>
  );
};

export default Navbar;