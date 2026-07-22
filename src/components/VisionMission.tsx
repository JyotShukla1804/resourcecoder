import React from "react";

export function VisionMission() {
  const visionPoints = [
    "Driving digital transformation with next-generation technologies",
    "Empowering businesses through AI, AR/VR/XR, and custom software",
    "Building scalable, secure, and future-ready digital ecosystems"
  ];

  const missionPoints = [
    "Deliver innovative AI, AR/VR/XR, and custom software solutions",
    "Enable digital transformation with scalable, secure technologies",
    "Build long-term partnerships that drive measurable business growth"
  ];

  return (
    <div className="w-full bg-[#030303] py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden border-t border-slate-950">
      {/* Ambient Dark Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col gap-24 md:gap-32">
        
        {/* Row 1: Vision (Text on Left, Image on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Column */}
          <div className="text-left space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#4B56D2]">
              Our Vision
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Powering the Future<br />Through Innovation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              We envision a future where intelligent technologies empower businesses to innovate faster, operate smarter, and thrive in an ever-evolving digital world. Through AI, immersive technologies, and custom digital solutions, we help organizations unlock sustainable growth and long-term success.
            </p>
            
            <ul className="space-y-4 pt-2">
              {visionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  <svg className="w-5 h-5 text-[#4B56D2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Column */}
          <div className="relative w-full aspect-[29/25] rounded-[32px] overflow-hidden border border-slate-900 shadow-2xl">
            <img
              src="/vision-earth.png"
              alt="Our Vision"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

        </div>

        {/* Row 2: Mission (Image on Left, Text on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Column (First on desktop, second on mobile) */}
          <div className="order-last lg:order-first relative w-full aspect-[29/25] rounded-[32px] overflow-hidden border border-slate-900 shadow-2xl">
            <img
              src="/mission-team.png"
              alt="Our Mission"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>

          {/* Text Column (First on mobile, second on desktop) */}
          <div className="order-first lg:order-last text-left space-y-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#4B56D2]">
              Our Mission
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Empowering Businesses<br />Through Digital Excellence
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              We help businesses unlock their full potential by delivering AI-powered, immersive, and custom digital solutions that solve complex challenges, accelerate innovation, and drive long-term business success. From strategy to deployment, we build secure, scalable, and future-ready technologies that create measurable impact.
            </p>
            
            <ul className="space-y-4 pt-2">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                  <svg className="w-5 h-5 text-[#4B56D2] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
