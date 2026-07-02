"use client";

import React from "react";
import { motion } from "framer-motion";

export function PartnerTrustedLogos() {
  const logos = [
    { name: "Diversity", class: "font-serif italic text-2xl font-bold" },
    { name: "Global Reach", class: "font-sans uppercase text-xl font-bold tracking-widest" },
    { name: "Innovative", class: "font-mono text-2xl font-semibold" },
    { name: "Certified", class: "font-serif text-2xl font-bold tracking-tight" },
    { name: "Excellence", class: "font-sans text-xl font-black uppercase" },
  ];

  return (
    <div className="w-full bg-white py-10 border-y border-slate-100 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
      
      <div className="max-w-[1358px] mx-auto px-4">
         <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-wrap items-center justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
         >
            {logos.map((logo, idx) => (
               <div key={idx} className={`text-slate-800 ${logo.class}`}>
                 {logo.name}
               </div>
            ))}
         </motion.div>
      </div>
    </div>
  );
}
