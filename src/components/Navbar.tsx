"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { SiteConfig } from "@/constants";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  // 1. Live System Clock Logic
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. Smart Hide Logic: Niche scroll pe hide, upar pe show
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Works", href: "#projects", id: "01" },
    { name: "Identity", href: "#about", id: "02" },
    { name: "Expertise", href: "#services", id: "03" },
    { name: "Contact", href: "#contact", id: "04" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-[100] transition-colors duration-500 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-20 md:h-24 flex justify-between items-center">
        
        {/* LEFT: Branding & System Status */}
        <div className="flex items-center gap-10">
          <Link href="/" className="group">
            <div className="flex items-baseline gap-1">
              <span className="text-white text-xl font-light tracking-[0.4em] uppercase group-hover:italic transition-all">
                {SiteConfig.name.split(' ')[0]}
              </span>
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            </div>
          </Link>

          {/* HUD STATUS: Visible on Desktop */}
          <div className="hidden lg:flex flex-col border-l border-white/10 pl-6 gap-0.5">
            <span className="text-[7px] text-white/30 uppercase tracking-[0.5em]">System_Time</span>
            <span className="text-[10px] text-white/60 font-mono tracking-tighter">{time} UTC+5:30</span>
          </div>
        </div>

        {/* CENTER: Staggered Nav Links */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-start gap-1 cursor-none"
            >
              <span className="text-[7px] text-white/20 font-mono mt-1 group-hover:text-white transition-colors">
                {link.id}
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          ))}
        </div>

        {/* RIGHT: Inquiry & Menu Toggle */}
        <div className="flex items-center gap-8">
          <a 
            href="#contact"
            className="hidden sm:block px-8 py-2.5 bg-white text-black text-[9px] uppercase tracking-[0.4em] font-bold hover:bg-white/90 transition-all rounded-sm overflow-hidden relative group"
          >
            <span className="relative z-10">Inquire_Now</span>
          </a>

          {/* MOBILE BURGER: Industrial Style */}
          <div className="flex flex-col gap-1.5 cursor-pointer group p-2">
            <div className="w-8 h-[1px] bg-white group-hover:w-5 transition-all origin-right" />
            <div className="w-5 h-[1px] bg-white group-hover:w-8 transition-all origin-right" />
            <div className="w-8 h-[1px] bg-white/40 group-hover:bg-white transition-all origin-right" />
          </div>
        </div>
      </div>

      {/* TOP SCANLINE EFFECT: Very subtle technical detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.nav>
  );
};

export default Navbar;