"use client";

import React from "react";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { HeroBackground } from "@/components";

export function PartnerHero() {


  return (
    <section className="w-full relative overflow-hidden flex items-center min-h-[90vh] bg-[#f8f9ff]">
      <HeroBackground />


      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-48 pb-24">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto text-center">

          {/* Text Content */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/60 shadow-[0_4px_24px_-8px_rgba(75,86,210,0.3)] border border-white backdrop-blur-xl mb-8 mx-auto"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4B56D2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#4B56D2]"></span>
              </span>
              <span className="text-sm font-bold tracking-[0.15em] text-[#4B56D2] uppercase">Collaboration & Growth</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-8"
            >
              Partner With <br />
              <span className="relative inline-block mt-2">
                <span className="absolute -inset-2 bg-[#4B56D2]/30 blur-2xl animate-pulse"></span>
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-blue-500 animate-gradient-x">
                  Krazio Cloud
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-slate-700 text-lg md:text-xl leading-relaxed mb-6 font-medium"
            >
              More than a technology partner, we're committed to your long-term success. Collaborate with Krazio Cloud to build innovative digital solutions, accelerate business growth, and transform ideas into measurable results.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-6 mt-8"
            >
              <div className="flex items-center gap-4 bg-white/50 backdrop-blur-xl border border-white px-5 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#4B56D2]/10 flex items-center justify-center border border-[#4B56D2]/20 shadow-inner">
                  <Handshake className="w-5 h-5 text-[#4B56D2]" />
                </div>
                <span className="text-slate-800 font-bold">Strategic Alliance</span>
              </div>
            </motion.div>
          </div>



        </div>
      </div>
    </section>
  );
}
