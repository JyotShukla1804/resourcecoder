"use client";

import { useState } from "react";
import Link from "next/link";

export function StickyBanner() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-slate-900 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] py-4 px-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 relative">
        <div className="flex items-center gap-4 sm:gap-6 flex-col sm:flex-row">
          <p className="text-white font-bold text-[15px] sm:text-[18px] text-center tracking-tight">
            Limited Offer: <span className="text-[#4B56D2]">Get 50% Off</span> Your First Hire in Vietnam
          </p>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-contact-modal'))}
            className="btn-ripple inline-flex items-center justify-center h-[48px] px-8 rounded-full text-white font-bold text-[15px] tracking-wide shadow-md hover:shadow-lg hover:shadow-[#4B56D2]/20 transition-all duration-300 bg-[#4B56D2] flex-shrink-0"
          >
            Claim it now
          </button>
        </div>
      </div>
    </div>
  );
}
