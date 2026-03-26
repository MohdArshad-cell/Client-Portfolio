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
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      {/* 3-Column Grid with fixed height for perfect centering */}
      <div className="max-w-[1800px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* LEFT: Branding */}
        <div className="flex items-center gap-6 flex-1">
          <Link href="/" className="group flex items-center gap-3">
            <span className="text-white text-2xl font-light tracking-[0.4em] uppercase group-hover:italic transition-all">
              {SiteConfig.name.split(' ')[0]}
            </span>
            <div className="h-6 w-[1px] bg-white/10 hidden lg:block" />
            <div className="hidden lg:flex flex-col">
              <span className="text-[7px] text-white/20 uppercase tracking-[0.5em]">SYSTEM_TIME</span>
              <span className="text-[9px] text-white/50 font-mono">{time} UTC+5:30</span>
            </div>
          </Link>
        </div>

        {/* CENTER: Navigation (Locked Center) */}
        <div className="hidden md:flex items-center gap-12 lg:gap-16">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="group flex flex-col items-center gap-1">
              <span className="text-[7px] text-white/20 font-mono group-hover:text-white transition-colors">
                {link.id}
              </span>
              <span className="text-[10px] uppercase tracking-[0.5em] text-white/40 group-hover:text-white transition-all relative">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* RIGHT: CTA */}
        <div className="flex justify-end items-center gap-8 flex-1">
          <a 
            href="#contact"
            className="hidden sm:block px-8 py-3 bg-white text-black text-[9px] uppercase tracking-[0.5em] font-bold hover:bg-black hover:text-white border border-white transition-all duration-500"
          >
            INQUIRE_NOW
          </a>
          <div className="flex flex-col gap-1.5 cursor-pointer group">
            <div className="w-8 h-[1px] bg-white group-hover:w-5 transition-all" />
            <div className="w-5 h-[1px] bg-white group-hover:w-8 transition-all" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;