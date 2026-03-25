"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLinks, SiteConfig } from "@/constants";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "py-4 bg-white/80 backdrop-blur-md border-b border-gray-100" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="group flex flex-col">
          <span className={`text-xl font-medium tracking-tighter uppercase transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}>
            {(SiteConfig?.name || "Aman Architects").split(' ')[0]}
            <span className="font-light italic text-gray-400"> {SiteConfig.name.split(' ')[1]}</span>
          </span>
          <span className="text-[7px] uppercase tracking-[0.4em] opacity-40 text-gray-500 group-hover:tracking-[0.6em] transition-all">
            Architectural Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {NavLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-[10px] uppercase tracking-[0.2em] font-medium transition-all hover:opacity-50 ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="#contact" 
            className={`px-6 py-2 border text-[9px] uppercase tracking-widest transition-all ${
              scrolled ? "border-black text-black hover:bg-black hover:text-white" : "border-white/20 text-white hover:bg-white hover:text-black"
            }`}
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-black" : "text-white"}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen bg-black z-[110] flex flex-col p-12 justify-center"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
              <X size={32} />
            </button>
            <div className="flex flex-col gap-8">
              {NavLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-5xl text-white font-light uppercase tracking-tighter hover:italic transition-all"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;