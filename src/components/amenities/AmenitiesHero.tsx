import React from "react";
import Image from "next/image";

export function AmenitiesHero() {
  return (
    <section className="w-full relative overflow-hidden bg-black text-white h-[600px] md:h-[700px] flex items-center justify-center pt-[80px]">
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Modern Boardroom"
          fill
          className="object-cover opacity-40 mix-blend-overlay"
          priority
        />
        {/* Gradients to blend image into background */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        
        {/* Brand Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4B56D2]/30 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 w-full max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-200 text-sm font-semibold tracking-wide uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          World-Class Infrastructure
        </span>
        <h1 className="text-5xl sm:text-6xl md:text-[80px] font-extrabold tracking-tighter leading-[1.1] mb-8">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#4B56D2]">Amenities</span> <br className="hidden md:block" />
          for Dedicated Teams
        </h1>
        <p className="text-lg md:text-2xl text-slate-300 font-medium max-w-3xl mx-auto leading-relaxed">
          Empowering your developers with state-of-the-art facilities, ergonomic workspaces, and enterprise-grade security.
        </p>
      </div>
    </section>
  );
}
