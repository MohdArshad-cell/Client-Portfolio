"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ServicesData } from "@/constants";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const ServiceDetail = () => {
  const params = useParams();
  const router = useRouter();
  
  // Array 0-indexed hai, isliye -1
  const service = ServicesData[Number(params.id) - 1];

  if (!service) return <div className="h-screen bg-black text-white flex items-center justify-center">SERVICE_NOT_FOUND</div>;

  return (
    <section className="min-h-screen bg-[#050505] text-white py-32 px-6 md:px-20 relative overflow-hidden">
      {/* HUD Border Line */}
      <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white/5 hidden md:block" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <button onClick={() => router.back()} className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.5em] text-white/30 hover:text-white transition-all mb-20">
          <FaArrowLeftLong className="group-hover:-translate-x-2 transition-transform" /> Back_to_Node
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[10px] uppercase tracking-[0.8em] text-white/20 block mb-6">
              Capability // 0{params.id}
            </motion.span>
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-9xl font-light uppercase tracking-tighter leading-[0.85] mb-12">
              {service.title.split(' ')[0]} <br />
              <span className="text-white/20 italic italic">{service.title.split(' ')[1] || "Expertise"}</span>
            </motion.h1>
            <p className="text-2xl md:text-4xl font-light text-white/60 leading-tight tracking-tight max-w-2xl">
              {service.description}
            </p>
          </div>
          
          <div className="lg:col-span-4 border-l border-white/10 pl-12 space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.4em] text-white/20 mb-4">Technical_Parameters</h4>
              <ul className="space-y-4 text-xs font-light text-white/40">
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Precision</span> <span>99.9%</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>BIM_Level</span> <span>Level 3</span></li>
                <li className="flex justify-between border-b border-white/5 pb-2"><span>Standard</span> <span>ISO_9001</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetail;