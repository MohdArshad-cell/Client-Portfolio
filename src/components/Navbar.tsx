"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks, SiteConfig } from "@/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-8 ${
      isScrolled ? "bg-white/80 backdrop-blur-lg py-4 border-b border-gray-100" : "bg-transparent py-8"
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase">
          {SiteConfig.name}
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          {NavLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-[10px] uppercase tracking-[0.2em] font-medium hover:opacity-50 transition-opacity">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}