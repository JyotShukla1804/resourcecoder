import React from "react";
import Link from "next/link";

export function OffshoreHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden pt-24 pb-16">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left Column: Content */}
          <div className="text-left space-y-8 max-w-2xl">
            <div className="inline-flex items-center justify-center bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-blue-600 font-semibold text-xs tracking-[0.1em] uppercase animate-fade-in-up">
              Global Talent, Local Control
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-fade-in-up delay-100">
              Build Your Dream <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Offshore Team.</span>
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed animate-fade-in-up delay-200">
              Establish a fully managed Offshore Development Center (ODC). Access top-tier engineering talent, scale operations seamlessly, and reduce overhead—without compromising on quality or control.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up delay-300">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]"
              >
                Set Up Your ODC
              </Link>
              <Link
                href="#capabilities"
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-slate-700 transition-all border border-slate-200 rounded-full hover:bg-slate-50 hover:border-slate-300"
              >
                Explore Capabilities
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-slate-100 mt-12 animate-fade-in-up delay-400">
              <div>
                <div className="text-3xl font-extrabold text-blue-600">500+</div>
                <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1">Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-blue-600">40+</div>
                <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-blue-600">60%</div>
                <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider mt-1">Cost Savings</div>
              </div>
            </div>
          </div>

          {/* Right Column: Advanced Gyroscopic Globe */}
          <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center animate-fade-in-up delay-200">
            {/* Ambient Background Glow */}
            <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            
            <style>{`
              @keyframes spin-outer {
                0% { transform: rotateY(0deg) rotateX(23.5deg) rotateZ(10deg); }
                100% { transform: rotateY(360deg) rotateX(23.5deg) rotateZ(10deg); }
              }
              @keyframes spin-inner {
                0% { transform: rotateY(360deg) rotateX(-15deg); }
                100% { transform: rotateY(0deg) rotateX(-15deg); }
              }
              @keyframes float-badge {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
              }
              .globe-wrapper {
                perspective: 1200px;
                width: 320px;
                height: 320px;
                position: relative;
                z-index: 10;
              }
              @media (min-width: 640px) {
                .globe-wrapper { width: 450px; height: 450px; }
              }
              .globe-outer, .globe-inner {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                transform-style: preserve-3d;
                border-radius: 50%;
              }
              .globe-outer {
                animation: spin-outer 30s linear infinite;
              }
              .globe-inner {
                width: 65%;
                height: 65%;
                top: 17.5%; left: 17.5%;
                animation: spin-inner 20s linear infinite;
              }
              .globe-line-outer {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                border: 1px solid rgba(59, 130, 246, 0.4);
                border-radius: 50%;
              }
              .globe-line-inner {
                position: absolute;
                top: 0; left: 0; right: 0; bottom: 0;
                border: 1px dashed rgba(99, 102, 241, 0.4);
                border-radius: 50%;
              }
            `}</style>

            <div className="globe-wrapper">
              
              {/* Outer Globe */}
              <div className="globe-outer">
                {/* Longitudes */}
                {[...Array(8)].map((_, i) => (
                  <div 
                    key={`vo-${i}`} 
                    className="globe-line-outer"
                    style={{ transform: `rotateY(${i * 22.5}deg)` }}
                  />
                ))}
                {/* Latitudes */}
                {[...Array(7)].map((_, i) => {
                  const angle = -75 + i * 25;
                  const radius = Math.cos(angle * Math.PI / 180) * 100;
                  const topOffset = 50 - (Math.sin(angle * Math.PI / 180) * 50);
                  return (
                    <div 
                      key={`ho-${i}`} 
                      className="absolute border border-blue-500/30 rounded-full"
                      style={{ 
                        width: `${radius}%`, height: `${radius}%`, top: `${topOffset}%`, left: '50%',
                        transform: 'translate(-50%, -50%) rotateX(90deg)'
                      }}
                    />
                  );
                })}
                {/* Outer Surface Nodes */}
                {[...Array(5)].map((_, i) => {
                  const y = -30 + (i * 15); 
                  const rotationY = i * 72; 
                  return (
                    <div 
                      key={`hub-o-${i}`}
                      className="absolute w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,1)]"
                      style={{
                        top: '50%', left: '50%',
                        transform: `translate(-50%, -50%) rotateY(${rotationY}deg) rotateX(${y}deg) translateZ(160px)`
                      }}
                    >
                      <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-60"></div>
                    </div>
                  );
                })}
              </div>

              {/* Inner Globe */}
              <div className="globe-inner">
                {/* Longitudes */}
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={`vi-${i}`} 
                    className="globe-line-inner"
                    style={{ transform: `rotateY(${i * 30}deg)` }}
                  />
                ))}
                {/* Latitudes */}
                {[...Array(5)].map((_, i) => {
                  const angle = -60 + i * 30;
                  const radius = Math.cos(angle * Math.PI / 180) * 100;
                  const topOffset = 50 - (Math.sin(angle * Math.PI / 180) * 50);
                  return (
                    <div 
                      key={`hi-${i}`} 
                      className="absolute border border-indigo-500/30 rounded-full border-dashed"
                      style={{ 
                        width: `${radius}%`, height: `${radius}%`, top: `${topOffset}%`, left: '50%',
                        transform: 'translate(-50%, -50%) rotateX(90deg)'
                      }}
                    />
                  );
                })}
                {/* Core Energy Center */}
                <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-full shadow-[0_0_40px_rgba(99,102,241,0.8)] -translate-x-1/2 -translate-y-1/2 animate-pulse flex items-center justify-center">
                   <div className="w-8 h-8 bg-white/40 rounded-full blur-[2px]" />
                </div>
              </div>

            </div>

            {/* Floating Badges */}
            <div className="absolute z-20 top-[15%] right-[5%] sm:right-[10%] bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-5 py-3 animate-[float-badge_6s_ease-in-out_infinite]">
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
            
            <div className="absolute z-20 bottom-[15%] left-[5%] bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-xl px-5 py-3 animate-[float-badge_7s_ease-in-out_infinite_1s]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
