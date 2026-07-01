"use client";

import React from "react";
import Image from "next/image";

export function AgileMindsetHero() {
  return (
    <section className="w-full bg-slate-50 pt-32 pb-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4B56D2]/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Text Content */}
        <div className="text-left max-w-4xl mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-8 animate-fade-in-up">
            Embracing <span className="text-[#4B56D2]">an Agile Mindset for Success</span>
          </h1>
          
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed animate-fade-in-up delay-100">
            Agile is not just a methodology; it's a philosophy that empowers teams to deliver value rapidly, adapt to change seamlessly, and drive continuous improvement. At Krazio, we have integrated the Agile mindset into every facet of our development process, allowing us to build resilient, innovative, and market-ready products. Here is how our Agile approach elevates our engineering process, accelerates time-to-market, and guarantees exceptional results.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-fade-in-up delay-200">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Agile Mindset Collaboration" 
            fill
            className="object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
        </div>

      </div>
    </section>
  );
}
