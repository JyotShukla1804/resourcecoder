"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Video } from "lucide-react";

export function StartupCTA() {
  return (
    <section className="w-full bg-white relative z-10 border-t border-slate-100">
      <div className="w-full max-w-[1358px] mx-auto">
        <div className="flex flex-col lg:flex-row">
          
          {/* Left Side - Dark Premium Look */}
          <div className="w-full lg:w-1/2 bg-[#0f172a] p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4B56D2]/20 rounded-full blur-[80px] pointer-events-none" />
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <span className="text-[#4B56D2] font-bold tracking-widest uppercase text-sm mb-4 block">
                Take the First Step
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1]">
                Ready to validate your next big idea?
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                Stop guessing and start building with confidence. Book a free, no-obligation strategy session with our senior startup consultants today.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Video className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">1-on-1 Video Call</p>
                    <p className="text-sm">Direct access to a senior consultant</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <Clock className="w-5 h-5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white">30 Minutes</p>
                    <p className="text-sm">Action-packed and strictly no-fluff</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Light Booking Look */}
          <div className="w-full lg:w-1/2 bg-[#f8f9ff] p-12 lg:p-24 flex items-center justify-center relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md bg-white rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.05)] border border-slate-100 p-8 text-center"
            >
              <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-10 h-10 text-[#4B56D2]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule Your Session</h3>
              <p className="text-slate-500 mb-8">
                Choose a time that works best for you. Spots are extremely limited.
              </p>
              
              <Link
                href="#interview-section"
                className="btn-ripple w-full flex items-center justify-center bg-[#4B56D2] hover:bg-indigo-600 text-white font-bold text-lg py-5 rounded-xl transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Find an Available Slot
              </Link>
              
              <p className="text-xs text-slate-400 mt-6">
                No credit card required. 100% confidential.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
