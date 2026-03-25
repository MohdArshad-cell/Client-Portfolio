"use client";
import React from "react";
import { motion } from "framer-motion";
import { ContactData, SocialLinks } from "@/constants";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-20 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-400 block mb-4">
            03 / Connection
          </span>
          <h2 className="text-4xl md:text-7xl font-light uppercase tracking-tighter">
            Lets build <br />
            <span className="font-medium italic text-gray-300">Something Great</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-12">
              <p className="text-xl text-gray-500 font-light max-w-sm leading-relaxed">
                Have a project in mind? Or just want to say hi? We are always open to discussing new visions and creative spaces.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                    <p className="text-lg font-medium">{ContactData.email}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                    <p className="text-lg font-medium">{ContactData.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Office</p>
                    <p className="text-lg font-medium">{ContactData.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12 flex gap-8">
              {SocialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm uppercase tracking-widest font-medium hover:text-gray-400 transition-colors"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400">Project Type</label>
                <select className="bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors appearance-none cursor-pointer">
                  <option>Residential Architecture</option>
                  <option>Commercial Design</option>
                  <option>Interior Planning</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-gray-400">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell us about your vision..." 
                  className="bg-transparent border-b border-gray-200 py-3 focus:outline-none focus:border-black transition-colors resize-none"
                />
              </div>

              <button className="w-full py-5 bg-black text-white flex items-center justify-center gap-4 group hover:bg-gray-900 transition-all">
                <span className="uppercase tracking-[0.2em] text-xs font-bold">Transmit Inquiry</span>
                <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;