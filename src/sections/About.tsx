"use client";
import React from "react";
import { motion } from "framer-motion";
import { AboutData } from "@/constants";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-gray-400 block mb-2">
            01 / Who We Are
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight">
            About <span className="font-medium">Aman Architects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl md:text-3xl font-light leading-relaxed">
              {AboutData.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {AboutData.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-gray-100">
              <div>
                <h4 className="text-4xl md:text-5xl font-medium mb-2">
                  {AboutData.stats.experience}+
                </h4>
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Years of Expertise
                </p>
              </div>
              <div>
                <h4 className="text-4xl md:text-5xl font-medium mb-2">
                  {AboutData.stats.projects}+
                </h4>
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Projects Delivered
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Architectural Imagery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full bg-gray-100 overflow-hidden group"
          >
            <Image
              src="/hero-arch.jpg" // Ensure this image exists in your public folder
              alt="Architectural Workspace"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Minimalist Overlay Badge */}
            <div className="absolute bottom-0 right-0 bg-black text-white p-8 md:p-12 max-w-[250px]">
              <p className="text-xs uppercase tracking-[0.2em] opacity-60 mb-2">
                Our Mission
              </p>
              <p className="text-sm font-light italic leading-relaxed">
                Transforming spaces into timeless experiences through precision and art.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;