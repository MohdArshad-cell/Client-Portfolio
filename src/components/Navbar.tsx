"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks, SiteConfig } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px scroll hote hi color change hoga
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-8 ${
      isScrolled 
        ? "bg-white/90 backdrop-blur-xl py-4 border-b border-gray-100 shadow-sm" 
        : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Color Toggle */}
        <Link 
          href="/" 
          className={`text-xl font-bold tracking-tighter uppercase transition-colors duration-500 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {SiteConfig.name}
        </Link>

        {/* Links Color Toggle */}
        <div className="hidden md:flex gap-10 items-center">
          {NavLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`text-[10px] uppercase tracking-[0.3em] font-medium transition-all duration-500 hover:opacity-50 ${
                isScrolled ? "text-black" : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}