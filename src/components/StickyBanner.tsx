"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function StickyBanner() {
  const marqueeItems = Array(6).fill(
    "🌟 LIMITED TIME OFFER: GET 50% OFF YOUR FIRST HIRE IN VIETNAM 🌟 SCALE YOUR TEAM WITH PREMIUM TECH TALENT"
  );

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 20, stiffness: 100, delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 h-[60px] bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 border-t border-indigo-500/30 shadow-[0_-10px_40px_rgba(75,86,210,0.4)] overflow-hidden flex items-center"
    >
      {/* Moving Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-blue-600/20 animate-[gradient_3s_ease_infinite] bg-[length:200%_200%]" />

      {/* Marquee Text Container */}
      <div className="absolute inset-0 flex items-center overflow-hidden whitespace-nowrap">
        <div className="animate-marquee flex items-center">
          {marqueeItems.map((text, i) => (
            <span key={i} className="text-white/90 font-bold text-[14px] sm:text-[16px] tracking-widest px-8">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Fixed Button on the Right */}
      <div className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
          className="btn-ripple relative inline-flex items-center justify-center h-[40px] sm:h-[44px] px-6 sm:px-8 rounded-full text-white font-bold text-[13px] sm:text-[14px] tracking-wide shadow-md hover:shadow-lg transition-all duration-300 bg-[#4B56D2] group flex-shrink-0"
        >
          <span className="relative z-10 flex items-center gap-2">
            Claim Offer <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </button>
      </div>
      
      {/* Left Fade Overlay (for smooth marquee entrance) */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-blue-900 to-transparent z-10 pointer-events-none" />
      
      {/* Right Fade Overlay (behind button) */}
      <div className="absolute right-0 top-0 bottom-0 w-40 sm:w-64 bg-gradient-to-l from-purple-900 via-purple-900/80 to-transparent z-0 pointer-events-none" />
    </motion.div>
  );
}
