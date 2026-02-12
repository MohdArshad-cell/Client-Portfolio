"use client";
import { ContactData, SiteConfig } from "@/constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#111] text-white py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          
          {/* Left: Call to Action */}
        <div>
  <h2 className="text-5xl md:text-7xl font-light uppercase tracking-tighter leading-none mb-10">
    {"Let's"} build <br /> <span className="text-white/40 italic">together.</span>
  </h2>
  {/* Ya fir ye use kar: Let&apos;s build */}
  <a 
    href={`mailto:${ContactData.email}`}
    className="text-xl md:text-2xl font-light border-b border-white/20 pb-2 hover:border-white transition-all"
  >
    {ContactData.email}
  </a>
</div>
          {/* Right: Info Grid */}
          <div className="flex flex-col justify-end gap-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Location</p>
                <p className="text-sm font-light">{ContactData.address}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">Inquiries</p>
                <p className="text-sm font-light">{ContactData.phone}</p>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="pt-10 border-t border-white/10 flex justify-between items-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                © {new Date().getFullYear()} {SiteConfig.name}
              </p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                Crafted by Arshad {/* */}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;