"use client";

import React from "react";
import { motion } from "framer-motion";

import { AnimatedMeshBackground } from "../AnimatedMeshBackground";

export function AwardsHero() {
  return (
    <section className="w-full bg-[#f8f9ff] relative overflow-hidden min-h-[70vh] flex flex-col justify-center pt-48 pb-24 border-b border-slate-100">
      <AnimatedMeshBackground position="center" />

      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="badge-primary mb-6">AWARDS & RECOGNITION</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.2]">
            Celebrating Our {" "}
            <span className="relative inline-block">
              <span className="absolute -inset-2 bg-[#4B56D2]/30 blur-2xl animate-pulse"></span>
              <span className="relative text-[#4B56D2]">Achievements</span>
            </span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Being a global IT leader, we are working tirelessly to serve our customers seamlessly and fulfill any needs. Award recognition is an affirmation that shows that things our people do positively impact their jobs, communities, and organizations around the world. Together, we are extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
