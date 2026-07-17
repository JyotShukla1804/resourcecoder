"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function StickyBanner() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 h-[64px] sm:h-[70px] bg-[#26285C] border-t border-white/10 flex items-center justify-end px-4 sm:px-8 lg:px-16"
    >
      {/* Subtle blue glow matching site accent */}
      <div className="absolute inset-0 bg-[#4B56D2]/5 z-0 pointer-events-none" />

      {/* Absolute Centered Text Content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4">
        <span className="font-extrabold text-[12px] sm:text-[14px] md:text-[16px] tracking-wide text-white drop-shadow-sm flex items-center justify-center gap-2 pointer-events-auto">
          <span className="flex items-center leading-none mt-[1px]">🌟</span>
          <span className="text-white uppercase text-center">
            <span className="text-yellow-400 font-black mr-1.5">LIMITED TIME OFFER:</span>
            GET 50% OFF YOUR FIRST HIRE IN VIETNAM
          </span>
          <span className="flex items-center leading-none mt-[1px]">🌟</span>
        </span>
      </div>

      {/* Button (Right aligned) */}
      <div className="relative z-10 flex-shrink-0 ml-2 group">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
          className="relative overflow-hidden inline-flex items-center justify-center px-7 h-[46px] rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 bg-white text-[#4B56D2] shadow-md group-hover:text-white group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-y-[2px]"
        >
          {/* Gradient Background that fades in on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Button Text */}
          <span className="relative z-10 flex items-center">
            Claim Offer
          </span>
        </button>
      </div>
    </motion.div>
  );
}
