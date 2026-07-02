"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Star, ShieldCheck, Cpu } from "lucide-react";

export function AwardsShowcase() {
  const awards = [
    { title: "AWS Select Partner", year: "2023", icon: <Cpu className="w-8 h-8 text-blue-500 mb-4" />, color: "bg-blue-50" },
    { title: "Clutch Champion", year: "2023", icon: <Star className="w-8 h-8 text-amber-500 mb-4" />, color: "bg-amber-50" },
    { title: "Clutch Global", year: "2023", icon: <Star className="w-8 h-8 text-emerald-500 mb-4" />, color: "bg-emerald-50" },
    { title: "Top B2B Company", year: "2022", icon: <Award className="w-8 h-8 text-indigo-500 mb-4" />, color: "bg-indigo-50" },
    { title: "App Development", year: "2024", icon: <Cpu className="w-8 h-8 text-rose-500 mb-4" />, color: "bg-rose-50" },
    { title: "HIPAA Compliant", year: "2023", icon: <ShieldCheck className="w-8 h-8 text-cyan-500 mb-4" />, color: "bg-cyan-50" },
    { title: "GDPR Certified", year: "2024", icon: <ShieldCheck className="w-8 h-8 text-violet-500 mb-4" />, color: "bg-violet-50" },
    { title: "ISO 27001", year: "2023", icon: <ShieldCheck className="w-8 h-8 text-teal-500 mb-4" />, color: "bg-teal-50" },
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
            {doubledAwards.map((award, idx) => (
              <div 
                key={idx} 
                className={`flex-shrink-0 w-64 h-72 ${award.color} rounded-[2rem] border border-white p-8 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group cursor-pointer overflow-hidden`}
              >
                {/* Abstract Glass Shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
                
                {award.icon}
                <h3 className="text-slate-900 font-bold text-xl mb-2">{award.title}</h3>
                <span className="inline-block px-3 py-1 bg-white/60 backdrop-blur-sm rounded-full text-sm font-semibold text-slate-600 mt-4">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
           <p className="text-sm text-slate-400 italic">
             *Official certificates provided upon request during the partnership scoping phase.
           </p>
        </div>
      </div>
    </section>
  );
}
