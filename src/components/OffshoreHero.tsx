"use client";

import React from "react";
import Link from "next/link";
import { AnimatedNumber } from "./AboutStats";
import dynamic from "next/dynamic";

const CobeGlobe = dynamic(() => import("./CobeGlobe").then((m) => m.CobeGlobe), {
  ssr: false,
});

import { AnimatedMeshBackground } from "./AnimatedMeshBackground";

export function OffshoreHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#f8f9ff] overflow-hidden pt-48 pb-24">
      <AnimatedMeshBackground />

      <div className="max-w-[1358px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="text-left space-y-8 max-w-2xl">
            <div className="inline-flex items-center justify-center bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 text-[#4B56D2] font-semibold text-xs tracking-[0.1em] uppercase animate-fade-in-up">
              Global Talent, Local Control
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up delay-100">
              Build Your Dream <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4B56D2] to-indigo-600">Offshore Team.</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed animate-fade-in-up delay-200">
              Establish a fully managed Offshore Development Center (ODC). Access top-tier engineering talent, scale operations seamlessly, and reduce overhead—without compromising on quality or control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
              <Link
                href="#contact-form"
                className="btn-ripple inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-[#4B56D2] rounded-full hover:bg-[#3d46a8] hover:shadow-[0_0_20px_rgba(75,86,210,0.25)]"
              >
                Set Up Your ODC
              </Link>
              <Link
                href="#capabilities"
                className="btn-ripple inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-700 transition-all border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300"
              >
                Explore Capabilities
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-100 mt-12 animate-fade-in-up delay-400">
              <div>
                <div className="text-3xl font-extrabold text-[#4B56D2]"><AnimatedNumber value="500+" /></div>
                <div className="text-xs text-[#4B56D2] font-semibold uppercase tracking-wider mt-1">Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#4B56D2]"><AnimatedNumber value="40+" /></div>
                <div className="text-xs text-[#4B56D2] font-semibold uppercase tracking-wider mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-[#4B56D2]"><AnimatedNumber value="60%" /></div>
                <div className="text-xs text-[#4B56D2] font-semibold uppercase tracking-wider mt-1">Cost Savings</div>
              </div>
            </div>
          </div>

          {/* Right Column: Advanced WebGL Gyroscopic Continents Globe */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center animate-fade-in-up delay-200">
            {/* Ambient Background Glow */}
            <div className="absolute w-[360px] h-[360px] bg-[#4B56D2]/10 rounded-full blur-[110px] animate-pulse pointer-events-none" />
            
            

            <CobeGlobe />

            {/* Floating Badges */}
            <div className="absolute z-20 top-[15%] right-[5%] sm:right-[10%] bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-5 py-3 animate-[float-badge_6s_ease-in-out_infinite]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Top 1% Talent</div>
                  <div className="text-sm font-bold text-slate-900">Active</div>
                </div>
              </div>
            </div>

            <div className="absolute z-20 bottom-[15%] left-[5%] bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-5 py-3 animate-[float-badge_7s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4B56D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Operations</div>
                  <div className="text-sm font-bold text-slate-900">24/7 Sync</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
