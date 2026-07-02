"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Cpu } from "lucide-react";

export function AwardsShowcase() {
  const awards = [
    "/cer2.webp",
    "/cer3.webp",
    "/cer4.webp",
    "/cer5.webp",
    "/cer6.webp",
    "/cer7.webp",
    "/cer8.webp",
    "/cer9.webp",
    "/cer10.webp",
    "/cer11.webp",
    "/cer12.jpg",
    "/cer12.webp",
    "/cer13.webp",
    "/cer14.webp",
    "/cer15.jpg",
    "/cer16.webp",
    "/cer17.webp",
    "/cer18.png",
    "/cer19.webp",
    "/GoodFirms.png",
  ];

  const doubledAwards = [...awards, ...awards];

  return (
    <section className="w-full bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Our Awards & Certifications
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto">
              Numerous external and independent organizations have recognized ResourceCoders for top talent and robust security practices. Here's a glimpse of our corporate accomplishments.
            </p>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="w-full overflow-hidden relative py-10">
          {/* Edge Fades */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track - using animate-marquee class from globals.css */}
          <div className="flex animate-marquee-slow gap-8 items-center w-max">
            {doubledAwards.map((awardSrc, idx) => (
              <div 
                key={idx} 
                className="flex-shrink-0 w-56 h-56 flex flex-col items-center justify-center text-center hover:scale-105 transition-all duration-300 relative cursor-pointer"
              >
                <div className="relative w-full h-full flex items-center justify-center z-0">
                  <img src={awardSrc} alt="Award or Certification" className="w-full h-full object-contain mix-blend-multiply" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
