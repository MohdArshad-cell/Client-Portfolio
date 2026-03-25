"use client";
import React from "react";
import { SiteConfig, ContactData, NavLinks, SocialLinks } from "@/constants";
import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  // Hardcoding dates is for amateurs. Use dynamic sync.
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none">
              Building <br />
              <span className="text-white/20">The Future.</span>
            </h2>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              {SiteConfig.tagline}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Sitemap</span>
              {NavLinks.map(link => (
                <Link key={link.name} href={link.href} className="text-xs uppercase tracking-widest hover:text-white/60 transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Uplink</span>
              {SocialLinks.map((link) => (
                <a 
                  key={link.platform} 
                  href={link.url} 
                  target="_blank" 
                  className="text-xs uppercase tracking-widest hover:text-white/60 transition-colors flex items-center gap-1 group"
                >
                  {link.platform}
                  <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Location</span>
              <p className="text-xs uppercase tracking-widest leading-relaxed text-white/40">
                {ContactData.address}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            © {currentYear} {SiteConfig.name} — All Rights Reserved
          </p>
          <div className="flex items-center gap-6 text-white/20">
             <Github size={16} className="hover:text-white transition-colors cursor-pointer" />
             <Instagram size={16} className="hover:text-white transition-colors cursor-pointer" />
             <Linkedin size={16} className="hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;