"use client";

import React from "react";
import { motion } from "framer-motion";

export function AwardsHero() {
  return (
    <section className="w-full bg-white relative overflow-hidden min-h-[70vh] flex flex-col justify-center pt-48 pb-24 border-b border-slate-100">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none mix-blend-overlay" />

      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <span className="badge-primary mb-6">AWARDS & RECOGNITION</span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.2]">
            Celebrating Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Achievements</span>
          </h1>
          <p className="text-slate-500 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto font-normal">
            Being a global IT leader, we are working tirelessly to serve our customers seamlessly and fulfill any needs. Award recognition is an affirmation that shows that things our people do positively impact their jobs, communities, and organizations around the world. Together, we are extraordinary.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
