"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Script from "next/script";

export function TestimonialsSection() {
  const widgetRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!widgetRef.current) return;
    
    // Clear the container to prevent duplicates on re-renders
    widgetRef.current.innerHTML = '';

    // Create the clutch widget div
    const widgetDiv = document.createElement('div');
    widgetDiv.className = "clutch-widget w-full";
    widgetDiv.setAttribute("data-url", "https://widget.clutch.co");
    widgetDiv.setAttribute("data-widget-type", "12");
    widgetDiv.setAttribute("data-height", "375");
    widgetDiv.setAttribute("data-nofollow", "false");
    widgetDiv.setAttribute("data-expandifr", "true");
    widgetDiv.setAttribute("data-scale", "100");
    widgetDiv.setAttribute("data-reviews", "440657,439901,439844,437889,437527,434976,434972,434969,432085,427396,422318,408498");
    widgetDiv.setAttribute("data-clutchcompany-id", "2344583");
    
    // Create the script
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "https://widget.clutch.co/static/js/widget.js";
    script.async = true;

    // Append both to the container
    widgetRef.current.appendChild(widgetDiv);
    widgetRef.current.appendChild(script);

    // Force initialization if the script was already loaded and cached globally
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).CLUTCHCO) {
        try {
          (window as any).CLUTCHCO.Init();
        } catch (e) {}
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full self-stretch bg-black py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden border-t border-slate-950/80">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1358px] mx-auto w-full relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.2]">
            Words of Appreciation
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal">
            Discover how ResourceCoders' innovative solutions have transformed businesses and empowered our
            clients. Hear directly from those who trust us, choose us, and succeed with us, time and time
            again!
          </p>
        </div>

        {/* Clutch Widget Section */}
        <div className="relative w-full mb-16 flex justify-center py-4 min-h-[375px] bg-white rounded-2xl p-4">
          <div ref={widgetRef} className="w-full min-h-[375px]" />
        </div>

        {/* Call To Action Button */}
        <div className="flex justify-center">
          <Link
            href="#interview-section"
            className="btn-ripple inline-flex items-center justify-center text-white font-bold text-xs tracking-widest py-4.5 px-10 rounded-full transition-shadow duration-300 uppercase shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_30px_rgba(37,99,235,0.5)] bg-[#4B56D2]"
          >
            Talk To Our Experts
          </Link>
        </div>
      </div>
    </section>
  );
}
