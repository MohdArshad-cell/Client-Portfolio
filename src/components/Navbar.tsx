"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { SiteConfig } from "@/constants";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      {/* Container with rigid max-width for alignment */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-20 md:h-28 grid grid-cols-3 items-center">
        
        {/* COLUMN 1: LEFT (Logo & Status) */}
        <div className="flex items-center gap-8">
          <Link href="/" className="group flex items-baseline gap-2">
            <span className="text-white text-xl font-light tracking-[0.4em] uppercase group-hover:italic transition-all">
              {SiteConfig.name.split(' ')[0]}
            </span>
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
          </Link>

          <div className="hidden xl:flex flex-col border-l border-white/10 pl-6 gap-0.5">
            <span className="text-[7px] text-white/20 uppercase tracking-[0.5em]">System_Time</span>
            <span className="text-[10px] text-white/50 font-mono tracking-tighter">{time} UTC+5:30</span>
          </div>
        </div>

        {/* COLUMN 2: CENTER (Navigation) */}
        <div className="hidden md:flex justify-center items-center gap-12 lg:gap-20">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="group flex flex-col items-center gap-1">
              <span className="text-[7px] text-white/20 font-mono group-hover:text-white transition-colors">
                {link.id}
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 group-hover:text-white transition-colors relative">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full" />
              </span>
            </a>
          ))}
        </div>

        {/* COLUMN 3: RIGHT (CTA & Menu) */}
        <div className="flex justify-end items-center gap-8">
          <a 
            href="#contact"
            className="hidden sm:block px-10 py-3 bg-white text-black text-[9px] uppercase tracking-[0.4em] font-bold hover:invert transition-all rounded-sm"
          >
            Inquire_Now
          </a>

          {/* Industrial Burger Menu */}
          <div className="flex flex-col gap-1.5 cursor-pointer group">
            <div className="w-8 h-[1px] bg-white group-hover:w-5 transition-all" />
            <div className="w-5 h-[1px] bg-white group-hover:w-8 transition-all" />
          </div>
        </div>
      </div>

      {/* Subtle Scanline Bottom Detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </motion.nav>
  );
};

export default Navbar;