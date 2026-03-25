"use client";
import React from "react";
import { SiteConfig, ContactData, NavLinks } from "@/constants";
import Link from "next/link";
import { ArrowUpRight, Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = 2026; // System_Sync

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 px-6 md:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Brand & Tagline */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none">
              Building <br />
              <span className="text-white/20">The Future.</span>
            </h2>
            <p className="text-white/40 max-w-sm text-sm uppercase tracking-widest leading-relaxed">
              {SiteConfig.tagline}
            </p>
          </div>

          {/* Footer Links Grid */}
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
              <a href={`mailto:${ContactData.email}`} className="text-xs uppercase tracking-widest hover:text-white/60 transition-colors">Email</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-white/60 transition-colors">Instagram</a>
              <a href="#" className="text-xs uppercase tracking-widest hover:text-white/60 transition-colors">LinkedIn</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-white/20">Location</span>
              <p className="text-xs uppercase tracking-widest leading-relaxed text-white/40">
                {ContactData.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
            © {currentYear} {SiteConfig.name} — All Rights Reserved
          </p>
          
          <div className="flex items-center gap-2">
            <span className="text-[8px] uppercase tracking-[0.5em] text-white/10 italic">
              Designed by Arshad_OS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;